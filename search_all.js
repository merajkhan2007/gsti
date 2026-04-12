const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\HP\\OneDrive\\Desktop\\1111';

let out = '';

function walk(d) {
    fs.readdirSync(d).forEach(f => {
        const full = path.join(d, f);
        if (fs.statSync(full).isDirectory()) {
            walk(full);
        } else {
            let content = '';
            try { content = fs.readFileSync(full, 'utf8'); } catch(e) {}
            if (content.includes('error/system') || content.includes('system/error')) {
                out += `[${full}]\n`;
            }
        }
    });
}
walk(dir);
fs.writeFileSync('C:\\Users\\HP\\OneDrive\\Desktop\\1111\\global_error_system.txt', out);
