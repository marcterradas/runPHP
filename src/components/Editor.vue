<template>
    <div id="editor" ref="container" class="h-full"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useStorage, useDebounceFn } from '@vueuse/core'
import { editorDefaultConfiguration, editorDefaultPosition } from '../utils/defaultConfigurations'
import * as monaco from 'monaco-editor'

const initialEditorValue = {}
const container = ref<HTMLDivElement | null>(null)

let editor: monaco.editor.IStandaloneCodeEditor

const editorValue = useStorage<Record<string, any>>('editor-value', initialEditorValue)
const emit = defineEmits<(e: 'change', payload: String) => void>()

onMounted(() => {
    editor = monaco.editor.create(container.value!, editorDefaultConfiguration())
    editor.focus()
    editor.setPosition(editorDefaultPosition())
    emit('change', editor.getValue())

    editor.onDidChangeModelContent(
        useDebounceFn(() => {
            emit('change', editor.getValue())
        })
    )
})
</script>
