<script setup lang="ts">
</script>

<template>

    <div class="question">
        <span class="bracket">{</span>
        <div class="question-text">
            <p>Cansado de codar <span class="text-bold">sozinho(a)?</span></p>
            <p class="question-margin"> Seus problemas acabaram!</p>
        </div>
        <span class="bracket">}</span>
    </div>

</template>

<style scoped>
p {
    margin: 0px;
}

.bracket {
    color: #8D0D0D;
    font-size: 4rem;
    font-weight: 600;
}

.text-bold {
    font-weight: bold;
}

.question-text {
    display: flex;
    flex-direction: column;
    align-items: center;
}


.question {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

}

.question-margin {
    margin-top: 0.5rem;
}
</style>