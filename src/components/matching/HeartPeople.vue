<script setup lang="ts">

const props = defineProps<{ first: string, last: string, thumbnail: string }>();



</script>

<template>
    <div class="heart-people">
        <div class="mask">
            <img :src='props.thumbnail' alt="">
        </div>
        <p>{{ props.first }} {{ props.last }}</p>
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


img {
    width: 20rem;
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


.heart-people {
    display: flex;
    flex-direction: column;
    align-items: center;
}

p {
    font-family: "Fredoka", sans-serif;
    font-size: 2rem;
    font-weight: 500;

    color: #000;
}
</style>