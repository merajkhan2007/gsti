const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\HP\\OneDrive\\Desktop\\1111\\Goods & Services Tax (GST) _ Services_files';

let out = '';
fs.readdirSync(dir).forEach(f => {
    if (f.endsWith('.js.download') || f.endsWith('.js')) {
        let content = fs.readFileSync(path.join(dir, f), 'utf8');
        let lines = content.split('\n');
        lines.forEach((line, i) => {
            if (line.includes('location.href') || line.includes('$location.path') || line.includes('location.replace')) {
                out += `[${f} Line ${i + 1}]: ${line.trim().substring(0, 150)}\n`;
            }
        });
    }
});
fs.writeFileSync('C:\\Users\\HP\\OneDrive\\Desktop\\1111\\all_locations.txt', out);
