<script setup lang="ts">
import HeartPeople from './HeartPeople.vue';

import {getDataPeople} from '../../services/axios.ts'
import { ref, onMounted } from 'vue';


const data = ref<null | any >(null)

async function acessApi(){data.value = await getDataPeople()}

onMounted(() => {
    acessApi();
    
});


</script>

<template>
    <div class="container">
        <h1>Sua cara metade:</h1>
       
        <div class="matching">
           
            <HeartPeople  :thumbnail="data?.results[0].picture.large" :first="data?.results[0].name.first" :last="data?.results[0].name.last" />
            <div class="button-matching">
                <p>match</p>
                <button @click="acessApi" >Click! </button>
            </div>
            <HeartPeople :thumbnail="data?.results[1].picture.large" :first="data?.results[1].name.first" :last="data?.results[1].name.last" />
        </div>
    </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@300..700&family=Inter:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

h1 {
    font-family: "Fredoka", sans-serif;
    font-size: 60px;
    display: flex;
    justify-content: center;
}



p {
    font-size: 4rem;
    font-weight: 900;
    color: #8D0D0D;
    filter: drop-shadow(0px 0px 1px #8D0D0D);
}

.matching {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 7.5rem;
}

.container {
    padding: 3rem;
}

.button-matching {
    display: flex;
    flex-direction: column;
    align-items: center;
}

button {
    width: 7rem;
    padding: 1rem;
    background: #8D0D0D;
    color: #FFFEFE;
    font-size: 24px;
    font-family: "Fredoka", sans-serif;
    font-weight: 600;
    border: 0;
    border-radius: 12px;
    cursor: pointer;
}
</style>
