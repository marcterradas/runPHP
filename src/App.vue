<script setup lang="ts">
import Editor from './components/Editor.vue'
import Result from './components/Result.vue'
</script>

<template>
    <div class="h-full grid grid-cols-2 gap-0 bg-vs-dark p-2">
        <Editor />
        <Result />
    </div>
</template>
