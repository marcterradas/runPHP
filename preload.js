const { promisify } = require('util')
const exec = promisify(require('child_process').exec)

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }

    setInterval(async () => {
        const code = localStorage.getItem('code')
        console.log(code)
    }, 1000)
})

const executePHPCode = async (code = '') => {
    const query = `php -r "${code}"`
    try {
        const { stdout, stderr } = await exec(query)
        console.log(stdout)
    } catch (error) {
        console.error(error)
    }
}
