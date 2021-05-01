const argv = require('./config/yargs')
const { createFile } = require('./src/multiplications');
const colors = require('colors/safe');

console.clear();

createFile(argv.init,argv.finish ,argv.list)
    .then(fileName => console.log(colors.green.underline( fileName)))
    .catch(err => console.log(colors.red.underline(err))); 
