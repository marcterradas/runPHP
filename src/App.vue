<template>
    <div class="h-full grid grid-cols-2 gap-0 bg-vs-dark">
        <div class="pt-3">
            <Editor @change="onChange"></Editor>
        </div>
        <div class="pl-6 pt-3">
            <Result></Result>
        </div>
    </div>
</template>

<script setup lang="ts">
import Editor from './components/Editor.vue'
import Result from './components/Result.vue'

const onChange = (code: string) => {
    localStorage.setItem('code', code.trim())
}
</script>
