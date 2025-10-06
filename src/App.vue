<script setup lang="ts">

import Footer from './components/Footer.vue';

import Question from './components/Question.vue';
import Welcome from './components/Welcome.vue';
import Match from './components/matching/Match.vue';


</script>

<template>
  <div data-theme="tindev" class="min-h-screen bg-base-100 overflow-x-hidden">
    <div class="flex justify-center mt-12">
      <h1 class="font-anonymous text-6xl text-primary drop-shadow-[0_0_1px_#8D0D0D] color-primary font-bold">
        <<span class="italic">Tin</span>dev/>🌹
      </h1>
    </div>
    <div class="p-12 gap-4">
      <Question />
      <Welcome />
    </div>
    <Suspense>
      <Match />
    </Suspense>

    <Footer />
  </div>
</template>./components/Matching/Match.vue