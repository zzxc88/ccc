const fs = require('fs');
const file = './database/sewa.json';

let sewa = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file)) : {};

function save() {
    fs.writeFileSync(file, JSON.stringify(sewa, null, 2));
}

function convertToMs(timeStr) {
    let total = 0;
    const regex = /(\d+)([dhmsyj])/g;
    let match;
    while ((match = regex.exec(timeStr)) !== null) {
        const val = parseInt(match[1]);
        const unit = match[2];
        switch (unit) {
            case 'd': total += val * 86400000; break; // days to ms
            case 'h': total += val * 3600000; break; // hours to ms
            case 'm': total += val * 60000; break; // minutes to ms
            case 's': total += val * 1000; break; // seconds to ms
            case 'y': total += val * 31536000000; break; // years to ms
            case 'j': total += val * 3600000; break; // hours (alternative symbol for 'jam')
        }
    }
    return total;
}

function formatMs(ms) {
    const d = Math.floor(ms / (1000 * 60 * 60 * 24));
    const h = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((ms % (1000 * 60)) / 1000);
    return `${d}d ${h}h ${m}m ${s}s`;
}

function addSewa(jid, durationMs) {
    const now = Date.now();
    sewa[jid] = { expired: now + durationMs, added: now };
    save();
}

function delSewa(jid) {
    delete sewa[jid];
    save();
}

function listSewa() {
    const now = Date.now();
    let teks = 'Daftar Sewa Aktif:\n\n';
    for (let jid in sewa) {
        const sisa = sewa[jid].expired - now;
        if (sisa > 0) {
            teks += `• ${jid} - ${formatMs(sisa)}\n`;
        }
    }
    return teks.trim();
}

function autoCheck(Xlesy, owner) {
    const now = Date.now();
    for (let jid in sewa) {
        if (sewa[jid].expired <= now) {
            Xlesy.sendMessage(jid, {
                text: `Masa Aktif Sewa Telah Berakhir!\nSilahkan Hubungi Owner Untuk Memperpanjang\n\nOwner: ${owner}`
            }).then(() => {
                // Delay 5 detik sebelum keluar
                return new Promise(resolve => setTimeout(resolve, 5000));
            }).then(() => {
                return Xlesy.groupLeave(jid);
            }).then(() => {
                delSewa(jid);
            }).catch(() => {
                delSewa(jid); // tetap hapus data walau gagal
            });
        }
    }
}

module.exports = { addSewa, delSewa, listSewa, autoCheck, convertToMs };