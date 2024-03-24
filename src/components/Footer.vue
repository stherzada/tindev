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
    <footer>
        <div class="footer-text">
            <p>Copyright <span>© {{ currentYear }}</span> </p>
            <p>Sthefany Sther</p>
        </div>
        <div class="socials">
            <a href="https://github.com/stherzada" target="_blank"><img src="../assets/github.svg"></a>
            <a href="https://www.twitch.tv/stherzada" target="_blank"><img src="../assets/twitch.svg"></a>
        </div>
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    font-weight: 500;
}

p {
    margin: 0;
}

span {
    font-weight: 700;
}

.socials {
    display: flex;
    gap: 0.5rem;
}
</style>