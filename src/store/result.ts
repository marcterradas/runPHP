import { defineStore } from 'pinia'

export const useResultStore = defineStore('result', {
    state: () => ({
        value: '',
    }),
    actions: {
        edit(newValue: string) {
            this.value = newValue
        },
    },
})
