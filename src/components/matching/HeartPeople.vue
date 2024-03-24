<script setup lang="ts">
</script>

<template>
    <div class="heart-people">
        <div class="mask">
            <img src="https://avatars.githubusercontent.com/u/72408918?v=4" alt="">
        </div>
        <p>Stherzada</p>
    </div>
</template>


<style scoped>
.mask {
    mask-image: url("../../assets/heart.svg");
    mask-size: 26rem;
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


.heart-people {
    display: flex;
    flex-direction: column;
    align-items: center;
}

p {
    font-family: "Fredoka", sans-serif;
    font-size: 2rem;
    font-weight: 500;

    filter: drop-shadow(0px 1px 4px #8D0D0D);
    color: #FFFFFF;
}
</style>