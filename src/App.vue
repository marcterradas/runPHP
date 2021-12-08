<template>
    <div id="app">
    <div class="h-screen">
        <Editor></Editor>
    </div>
    <div class="h-screen">
        <Result></Result>
    </div>
    </div>
</template>

<script setup lang="ts">
import Editor from './components/Editor.vue'
import Result from './components/Result.vue'
</script>

<style lang="scss">
@import './assets/styles/reset.css';
</style>