const fs = require('fs');
const file = 'C:\\Users\\HP\\OneDrive\\Desktop\\1111\\Goods & Services Tax (GST) _ Services.html';
let content = fs.readFileSync(file, 'utf8');

// Look for <script> that uses $script.path or $script and inject a cache buster
if (!content.includes('urlArgs')) {
    content = content.replace(/\$script\.path\((['"])[^'"]+\1\);/g, '$&\n    $script.urlArgs("v=" + (new Date()).getTime());');
    fs.writeFileSync(file, content);
    console.log('Cache buster injected into HTML');
} else {
    console.log('Already has urlArgs');
}
