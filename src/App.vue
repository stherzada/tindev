<script setup lang="ts">

import Footer from './components/Footer.vue';

import Question from './components/Question.vue';
import Welcome from './components/Welcome.vue';
import Match from './components/matching/Match.vue';


</script>

<template>
  <div data-theme="tindev" class="min-h-screen bg-base-100 overflow-y-hidden overflow-x-hidden">
    <div class="flex justify-center mt-4 sm:mt-8 lg:mt-12 px-4">
      <h1 class="font-anonymous text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary drop-shadow-[0_0_1px_#8D0D0D] color-primary font-bold text-center">
        <<span class="italic">Tin</span>dev/>🌹
      </h1>
    </div>
    <div class="p-4 sm:p-6 md:p-8 lg:p-12 gap-2 sm:gap-4">
      <Question />
      <Welcome />
    </div>
    <Suspense>
      <Match />
    </Suspense>

    <Footer />
  </div>
</template>./components/Matching/Match.vue