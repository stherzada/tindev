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
    <footer class="flex flex-col items-center">
        <div class="flex flex-col items-center mt-8 mb-4 font-medium">
            <p class="m-0">Copyright <span class="font-bold color-primary">© {{ currentYear }}</span> </p>
            <p class="m-0">Sthefany Sther</p>
        </div>
        <div class="flex gap-2">
            <a href="https://github.com/stherzada" target="_blank"><img src="../assets/github.svg"></a>
            <a href="https://www.twitch.tv/stherzada" target="_blank"><img src="../assets/twitch.svg"></a>
        </div>
    </footer>
</template>