import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
    state: () => ({
        counter: 5
    })
})

export default useCounterStore;