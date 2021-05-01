const fs = require('fs');
const colors = require('colors/safe');

const createFile = async (init = 0, finish = 10, list = false) => {

    try {

        let i = 1;
        let print, myConsole = '';


        for (i; i <= finish; i++) {
            const result = i * init;
            print += `${i} * ${init} = ${result}\n`;
            myConsole += ` ${i} ${colors.blue.bold('*')} ${init} ${colors.blue.bold('=')} ${result}\n`;
            
        }

        if (list) {
            console.log( colors.rainbow('=================='));
            console.log(colors.blue('Table of:'), colors.blue.bold(init), 
                        colors.green('finishes in:'), colors.green.bold(finish))
            console.log( colors.rainbow('=================='));
            console.log(myConsole);
        }

        fs.writeFileSync(`./print/table_of_${init} * ${finish}.txt`, print)

        return (`${init} table.txt, created`)

    } catch (error) {
        throw error
    }

}





module.exports = {
    createFile
}