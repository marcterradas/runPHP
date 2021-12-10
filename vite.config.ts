import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')
const prefix = 'monaco-editor/esm/vs'

export default defineConfig({
    base: path.resolve(__dirname, './dist/'),
    plugins: [vue()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    editorWorker: [`${prefix}/editor/editor.worker`]
                }
            }
        }
    }
})
