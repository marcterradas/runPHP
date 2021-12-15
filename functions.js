
const { promisify } = require('util')
const exec = promisify(require('child_process').exec)

/**
 * Execute php code  in the terminal
 * @param { string } code 
 */
const executePHPCode = async ( code = '' ) => {

    const query = `php -r "${code}"`
    try {
        const { stdout, stderr } = await exec(query)
        console.log(stdout)
    } catch (error) {
        console.log(error)
    }
}