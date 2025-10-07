<template>
  <button
    ref="buttonRef"
    @click="toggleSwitchTheme"
    aria-label="Toggle theme"
    class="p-2 rounded hover:bg-base-300-dark/50 transition-colors cursor-pointer relative overflow-hidden transition-all duration-300 ease-out hover:scale-110 active:scale-95"
    :class="isDarkMode ? 'bg-base-300-dark hover:bg-base-200-dark' : 'bg-base-200 hover:bg-base-300'"
  >
      <div class="relative z-10 transition-transform duration-500" :class="isDarkMode ? ' transition-transform duration-500 rotate-0' : ' transition-transform duration-500 rotate-360'">
        <Sun
          v-if="isDarkMode"
          class="h-6 w-6 text-yellow-400"
          stroke-width="2"
        />
        <Moon
          v-else
          class="h-6 w-6 text-gray-600"
          stroke-width="2"
        />
      </div>
  </button>
</template>

<script setup lang="ts">

import { useThemeAnimation, ThemeAnimationType } from '../composables/useThemeAnimation'
import { onMounted } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'

const { buttonRef, toggleSwitchTheme, isDarkMode } = useThemeAnimation({
  onDarkModeChange: (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  },
  animationType: ThemeAnimationType.CIRCLE,
  duration: 500,
})

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark')
  }
})
</script>
