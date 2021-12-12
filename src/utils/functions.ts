const { promisify } = require('util')
const exec = promisify(require('child_process').exec)
const question = require('readline-sync').question

/**
 * Execute php command from terminal and return output
 * @param { string } code
 * @returns { string } terminal output
 */
export const executePHPCode = async (code: string): Promise<string> => {
    const query: string = `php -r "${code}"`

    try {
        const { stdout, stderr } = await exec(query)
        return stdout
    } catch (error: any) {
        return error
    }
}
