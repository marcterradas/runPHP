<template>
    <div id="editor" ref="container" class="h-full"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { editorDefaultConfiguration, editorDefaultPosition } from '../utils/defaultConfigurations'
import * as monaco from 'monaco-editor'

const container = ref<HTMLDivElement | null>(null)
const emit = defineEmits<(e: 'change', payload: string) => void>()

onMounted(() => {
    const editor = monaco.editor.create(container.value!, editorDefaultConfiguration())

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
