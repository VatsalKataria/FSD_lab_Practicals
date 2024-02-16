const path = require('path');
const fs = require('fs');
const os = require('os');
const util = require('util');

console.log('Example usage of the path module:');
console.log('Normalized path:', path.normalize('/test/test1//2slashes/1slash/tab/..'));

console.log('\nExample usage of the fs module:');
const filePath = path.join(__dirname, 'example.txt');
const fileContent = 'Hello, World!';
fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File written successfully!');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content:', data);
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error('Error deleting file:', err);
                return;
            }
            console.log('File deleted successfully!');
        });
    });
});

console.log('\nExample usage of the os module:');
console.log('Platform:', os.platform());
console.log('CPU architecture:', os.arch());
console.log('Free memory:', os.freemem() / (1024 * 1024), 'MB');
console.log('Total memory:', os.totalmem() / (1024 * 1024), 'MB');
console.log('Home directory:', os.homedir());

console.log('\nExample usage of the util module:');
const asyncFunction = util.promisify(fs.readFile);
asyncFunction(filePath, 'utf8')
    .then(data => {
        console.log('File content (using util.promisify):', data);
    })
    .catch(err => {
        console.error('Error reading file:', err);
    });