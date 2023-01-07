import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useResultStore = defineStore('editor', () => {
    const editor = ref('')
    function editEditor(newValue: string) {
        editor.value = newValue
    }
    return { editor, editEditor }
})
