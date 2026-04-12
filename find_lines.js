const fs = require('fs');
const file = 'C:\\Users\\HP\\OneDrive\\Desktop\\1111\\Goods & Services Tax (GST) _ Services_files\\directives2.0.js.download';
const lines = fs.readFileSync(file, 'utf8').split('\n');
lines.forEach((line, i) => {
    if (line.includes('location.href') && line.includes('accessdenied')) {
        console.log(`Line ${i + 1}: ${line}`);
    }
    if (line.includes('$window.location.href = "error/notfound"')) {
        console.log(`Line ${i + 1}: ${line}`);
    }
});
