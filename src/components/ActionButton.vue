<script setup lang="ts">
import { useEditorStore } from '@/store/editor'
import { useResultStore } from '@/store/result'

const handleClick = (): void => {
    const editorStore = useEditorStore()
    // const resultStore = useResultStore()
    const { editor } = editorStore
    // const { result, editResult } = resultStore

    console.log(editor)
    // 1. get user input
    // 2. execute code in php
    // 3. show code to input
}
</script>

<template>
    <button
        @click="handleClick"
        class="absolute bottom-2 right-2 p-0 w-12 h-12 bg-blue-400 rounded-full hover:bg-blue-500 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none flex justify-center items-center"
    >
        <img src="/right-arrow.svg" class="w-8 h-8" alt="action" />
    </button>
</template>
