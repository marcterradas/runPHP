<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { configuration, position } from '../editor-configuration'
import * as monaco from 'monaco-editor'

const container = ref<HTMLDivElement | null>(null)
// const emit = defineEmits<(e: 'change', payload: string) => void>()
const setUpEditor = (): void => {
    const editor = monaco.editor.create(container.value!, configuration())
    editor.focus()
    editor.setPosition(position())
}
onMounted(setUpEditor)
</script>

<template>
    <div id="editor" ref="container" class="h-full"></div>
</template>
