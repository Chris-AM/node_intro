const argv = require('yargs')
                .option('i', {
                    alias: 'init',
                    type: 'number',
                    demandOption: true,
                    describe: 'is the multiplier of the multiplication'
                })
                .option('f',{
                    alias: 'finish',
                    type: 'number',
                    demandOption:true,
                    describe: 'puts the limit to the table'
                })
                .option('l', {
                    alias: 'list',
                    type:   'boolean',
                    default: false,
                    describe: 'shows multiplication in console'
                })
                .check( (argv) => {
                    if( isNaN(argv.init)){
                        throw 'Must be a number'
                    }
                    return true;
                })
                .argv;

module.exports = argv;