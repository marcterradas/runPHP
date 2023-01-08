<script setup lang="ts">
import { storeToRefs } from 'pinia'
import ActionButton from './ActionButton.vue'
import { useResultStore } from '../store/result'

const { result } = storeToRefs(useResultStore())
</script>

<template>
    <div class="text-vs-white">{{ result }}</div>
    <ActionButton />
</template>
