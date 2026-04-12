const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\HP\\OneDrive\\Desktop\\1111\\Goods & Services Tax (GST) _ Services_files';
const htmlFile = 'C:\\Users\\HP\\OneDrive\\Desktop\\1111\\Goods & Services Tax (GST) _ Services.html';

let out = '';
function searchFile(file) {
    if (!fs.existsSync(file)) return;
    const content = fs.readFileSync(file, 'utf8');
    const regex = /(error\/system|system\/error)/ig;
    let match;
    while ((match = regex.exec(content)) !== null) {
        if (file.includes('underscore')) continue;
        out += `[${path.basename(file)}]: ...${content.substring(Math.max(0, match.index - 50), match.index + 100).replace(/\r?\n|\r/g, ' ')}...\n`;
    }
}

searchFile(htmlFile);
fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.js.download') || file.endsWith('.js')) {
        searchFile(path.join(dir, file));
    }
});
fs.writeFileSync('C:\\Users\\HP\\OneDrive\\Desktop\\1111\\lines_error_system.txt', out);
