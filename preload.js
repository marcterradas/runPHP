const { promisify } = require('util')
const { spawn } = require('child_process')

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }

    const intervalTime = 1000

    setInterval(executePHPCode, intervalTime)
})

const executePHPCode = () => {
    const result = document.getElementById('result')
    const error = document.getElementById('error')
    const code = localStorage.getItem('code')
    const executedCode = localStorage.getItem('executedCode')

    if (code == '' && code != executedCode) {
        result.innerHTML = ''
        error.innerHTML = ''
        localStorage.setItem('executedCode', '')
    }

    if (code != '' && code != executedCode) {
        const command = spawn('php', ['-r', code])

        command.stdout.on('data', (data) => {
            error.innerHTML = ''
            result.innerHTML = data
        })

        command.stderr.on('data', (data) => {
            result.innerHTML = ''
            error.innerHTML = data
        })

        localStorage.setItem('executedCode', code)
    }
}
