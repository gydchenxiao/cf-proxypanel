// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLangStore = defineStore('lang', {
  state: () => {
    return {
      langValue: '简体中文'
    }
  },
  persist: true
})
