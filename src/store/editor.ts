import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEditorStore = defineStore('editor', () => {
    const editor = ref('')
    function updateEditorValue(newValue: string) {
        editor.value = newValue
    }
    return { editor, updateEditorValue }
})
