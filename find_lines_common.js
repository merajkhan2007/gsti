const fs = require('fs');
const file = 'C:\\Users\\HP\\OneDrive\\Desktop\\1111\\Goods & Services Tax (GST) _ Services_files\\common1.6.js.download';
const lines = fs.readFileSync(file, 'utf8').split('\n');
let out = '';
lines.forEach((line, i) => {
    if (line.includes('location.href') || line.includes('window.location.href')) {
        out += `Line ${i + 1}: ${line.trim()}\n`;
    }
});
fs.writeFileSync('C:\\Users\\HP\\OneDrive\\Desktop\\1111\\lines_common.txt', out);
