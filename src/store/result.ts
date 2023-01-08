import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useResultStore = defineStore('result', () => {
    const result = ref('')
    function editResult(newValue: string) {
        result.value = newValue
    }
    return { result, editResult }
})
