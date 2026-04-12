const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\HP\\OneDrive\\Desktop\\1111\\Goods & Services Tax (GST) _ Services_files';

function disableHref(file) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    if (file.includes('underscore')) return;
    
    // Replace all $window.location.href or window.location.href or location.href with a console.log
    let original = content;
    // Catch anything ending with location.href = ...
    content = content.replace(/(\$window\.window\.|window\.|\$window\.)?location\.href\s*=\s*([^;]+);/g, 'console.log("Redirect prevented to: " + $2);');
    
    if (original !== content) {
        fs.writeFileSync(file, content);
        console.log(`Replaced hrefs in ${path.basename(file)}`);
    } else {
        // Did it not replace?
        if (content.includes('error/system') && content.includes('.href =')) {
            console.log(`Missed some hrefs in ${path.basename(file)}!`);
        }
    }
}

fs.readdirSync(dir).forEach(f => {
    if (f.endsWith('.js.download') || f.endsWith('.js')) {
        disableHref(path.join(dir, f));
    }
});
