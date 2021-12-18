 const editorDefaultConfiguration = () => {
    return {
        value: 'async function',
        minimap: {
            enabled: false
        },
        fontSize: 16,
        theme: 'vs-dark'
    }
}

const editorDefaultPosition = () => {
    return {
        column: 1,
        lineNumber: 2
    }
}

module.exports = {
    editorDefaultConfiguration,
    editorDefaultPosition
}