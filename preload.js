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
        const executedCode = localStorage.getItem('executedCode')

        if (code != '' && code != executedCode) {
            const output = await executePHPCode(code)
            updateResult(output)
            localStorage.setItem('executedCode', code)
        }
    }, 1000)
})

const executePHPCode = async (code = '') => {
    const query = `php -r "${code}"`
    try {
        const { stdout, stderr } = await exec(query)
        return { status: true, result: stdout }
    } catch (error) {
        return { status: false, result: error }
    }
}

const updateResult = (output) => {
    const result = document.getElementById('result')
    console.log(output)
}
