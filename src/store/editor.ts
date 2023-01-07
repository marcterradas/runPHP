import { defineStore } from 'pinia'

export const useEditorStore = defineStore('editor', {
    state: () => ({
        value: '',
    }),
    actions: {
        edit(newValue: string) {
            this.value = newValue
        },
    },
})
