<template>
    <div class="">
    <div class="">
        <Editor></Editor>
    </div>
    <div class="">
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
body {
    height: 100%;
}
</style>