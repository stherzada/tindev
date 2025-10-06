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
    <div class="p-4 sm:p-6 md:p-8 lg:p-12">
        <h1 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl flex justify-center color-primary font-bold text-center px-4 mb-6">Sua cara metade:</h1>
        <div class="flex flex-col lg:flex-row justify-around items-center gap-4 lg:gap-8">
            <HeartPeople  :thumbnail="data?.results[0].picture.large" :first="data?.results[0].name.first" :last="data?.results[0].name.last" />
            <div class="flex flex-col items-center gap-2 sm:gap-4">
                <p class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary drop-shadow-[0_0_1px_#8D0D0D] color-primary">match</p>
                <button @click="acessApi" class="w-20 sm:w-24 md:w-28 p-2 sm:p-3 md:p-4 bg-primary text-white text-lg sm:text-xl md:text-2xl font-semibold border-0 rounded-xl cursor-pointer hover:bg-primary/80 focus:outline-2 focus:outline-offset-2 active:bg-primary/60 touch-manipulation">Click! </button>
            </div>
            <HeartPeople :thumbnail="data?.results[1].picture.large" :first="data?.results[1].name.first" :last="data?.results[1].name.last" />
        </div>
    </div>

</template>
