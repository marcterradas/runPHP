<template>
    <div class="h-full grid grid-cols-2 gap-0">
        <div>
            <Editor></Editor>
        </div>
        <div>
            <Result></Result>
        </div>
    </div>
</template>

<script setup lang="ts">
import Editor from './components/Editor.vue'
import Result from './components/Result.vue'
</script>