const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\HP\\OneDrive\\Desktop\\1111\\Goods & Services Tax (GST) _ Services_files';
const htmlDir = 'C:\\Users\\HP\\OneDrive\\Desktop\\1111';

// Copy the file
const oldFile = path.join(dir, 'searchtpbypanctrl1.0.js.download');
const newFile = path.join(dir, 'searchtpbypanctrl1.1.js.download');
fs.copyFileSync(oldFile, newFile);

// Update HTML references
function updateHtmlFiles(directory) {
    fs.readdirSync(directory).forEach(f => {
        const full = path.join(directory, f);
        if (fs.statSync(full).isDirectory() && f !== 'Goods & Services Tax (GST) _ Services_files') {
            updateHtmlFiles(full);
        } else if (f.endsWith('.html')) {
            let content = fs.readFileSync(full, 'utf8');
            if (content.includes('searchtpbypanctrl1.0.js.download') || content.includes('searchtpbypanctrl1.0.js')) {
                content = content.replace(/searchtpbypanctrl1\.0\.js/g, 'searchtpbypanctrl1.1.js');
                fs.writeFileSync(full, content);
                console.log(`Updated ${f}`);
            }
        }
    });
}
updateHtmlFiles(htmlDir);
