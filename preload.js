window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }
})

const { promisify } = require('util')
const exec = promisify(require('child_process').exec)

async function executePHPCode(code = '') {
    const query = `php -r "${code}"`
    try {
        const { stdout, stderr } = await exec(query)
        console.log(stdout)
    } catch (error) {
        console.error(error)
    }
}

executePHPCode('var_dump("11111");')
