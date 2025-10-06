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
    <div class="p-12">
        <h1 class="text-6xl flex justify-center color-primary font-bold">Sua cara metade:</h1>
        <div class="flex justify-around items-center gap-30">
            <HeartPeople  :thumbnail="data?.results[0].picture.large" :first="data?.results[0].name.first" :last="data?.results[0].name.last" />
            <div class="flex flex-col items-center gap-4">
                <p class="text-6xl font-black text-primary drop-shadow-[0_0_1px_#8D0D0D] color-primary">match</p>
                <button @click="acessApi" class="w-28 p-4 bg-primary text-white text-2xl font-semibold border-0 rounded-xl cursor-pointer hover:bg-primary/80 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">Click! </button>
            </div>
            <HeartPeople :thumbnail="data?.results[1].picture.large" :first="data?.results[1].name.first" :last="data?.results[1].name.last" />
        </div>
    </div>

</template>
