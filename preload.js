const { promisify } = require('util')
const exec = promisify(require('child_process').exec)
const { editorDefaultConfiguration, editorDefaultPosition } = require('./utils/monacoDefaultConfiguration')

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }

    initEditor()
})

const initEditor = () => {
    console.log('init monaco ...')
}

const executePHPCode = async (code = '') => {
    const query = `php -r "${code}"`
    try {
        const { stdout, stderr } = await exec(query)
        console.log(stdout)
    } catch (error) {
        console.error(error)
    }
}

const updateResult = () => {
    console.log('update result ...')
}
