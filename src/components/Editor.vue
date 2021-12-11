<template>
    <div id="editor" ref="container" class="h-full"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted, watch, toRefs } from 'vue'
import { useResizeObserver, useStorage, useDebounceFn } from '@vueuse/core'

import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'

self.MonacoEnvironment = {
    getWorker(_: string, label: string) {
        return new editorWorker()
    }
}

const initialEditorValue = {}

const container = ref<HTMLDivElement | null>(null)

let editor: monaco.editor.IStandaloneCodeEditor

const editorState = useStorage<Record<string, any>>('editor-state', {})
const editorValue = useStorage<Record<string, any>>('editor-value', initialEditorValue)

const emit = defineEmits<(e: 'change', payload: typeof editorValue.value) => void>()

onMounted(() => {
    editor = monaco.editor.create(container.value!, {
        minimap: {
            enabled: false
        }
    })

    emit('change', editorValue.value)
})
</script>
