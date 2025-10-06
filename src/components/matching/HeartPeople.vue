<script setup lang="ts">

const props = defineProps<{ first: string, last: string, thumbnail: string }>();

</script>

<template>
    <div class="flex flex-col items-center">
        <div class="mask">
            <img :src='props.thumbnail' alt="" class="w-80">
        </div>
        <p class="text-3xl font-medium text-black font-fredoka">{{ props.first }} {{ props.last }}</p>
    </div>
</template>

<style scoped>
.mask {
    mask-image: url("../../assets/heart.svg");
    mask-size: 20rem;
    mask-repeat: no-repeat;
    mask-position: center;
    transform: scale(1);
    animation: pulse 0.5s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
}
</style>