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

    const result = document.getElementById('result')

    setInterval(() => {
        const code = localStorage.getItem('code')
        const executedCode = localStorage.getItem('executedCode')

        if (code == '' && code != executedCode) {
            result.classList.remove('text-red-500')
            result.classList.remove('text-vs-white')
            result.innerHTML = ''
            localStorage.setItem('executedCode', '')
        }

        if (code != '' && code != executedCode) {
            const command = spawn('php', ['-r', code])

            command.stdout.on('data', (data) => {
                result.classList.remove('text-red-500')
                result.classList.add('text-vs-white')
                result.innerHTML = data
            })

            command.stderr.on('data', (data) => {
                result.classList.remove('text-vs-white')
                result.classList.add('text-red-500')
                result.innerHTML = data
            })

            localStorage.setItem('executedCode', code)
        }
    }, 1000)
})
