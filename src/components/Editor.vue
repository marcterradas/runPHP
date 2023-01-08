<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as monaco from 'monaco-editor'
import { configuration, position } from '../editor-configuration'
import { useEditorStore } from '../store/editor'

const container = ref<HTMLDivElement | null>(null)
const editorStore = useEditorStore()
const { updateEditorValue } = editorStore

const setUpEditor = (): void => {
    const editor = monaco.editor.create(container.value!, configuration())
    editor.focus()
    editor.setPosition(position())
    editor.onDidChangeModelContent(() => updateEditorValue(editor.getValue()))
}
onMounted(setUpEditor)
</script>

<template>
    <div id="editor" ref="container" class="h-full"></div>
</template>
