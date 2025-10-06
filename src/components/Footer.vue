<script setup lang="ts">

import { ref, onMounted } from 'vue';

const currentYear = ref('');

onMounted(() => {
    updateYear();
});

function updateYear() {
    const date = new Date();
    const year = date.getFullYear();
    currentYear.value = year.toString();
}

</script>


<template>
    <footer class="flex flex-col items-center py-4">
        <div class="flex flex-col items-center mt-6  sm:mt-8 mb-4 font-medium">
            <p class="m-0 text-sm sm:text-base">Copyright <span class="font-bold text-primary">© {{ currentYear }}</span> </p>
            <p class="m-0 text-sm sm:text-base">Sthefany Sther</p>
        </div>
        <div class="flex gap-3 sm:gap-4">
            <a href="https://github.com/stherzada" target="_blank" class="touch-manipulation">
                <img src="../assets/github.svg" class="w-6 h-6 sm:w-8 sm:h-8" alt="GitHub">
            </a>
            <a href="https://www.twitch.tv/stherzada" target="_blank" class="touch-manipulation">
                <img src="../assets/twitch.svg" class="w-6 h-6 sm:w-8 sm:h-8" alt="Twitch">
            </a>
        </div>
    </footer>
</template>