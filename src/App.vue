<script setup lang="ts">

import Footer from './components/Footer.vue';
import Nav from './components/Nav.vue';
import Question from './components/Question.vue';
import Welcome from './components/Welcome.vue';
import Match from './components/matching/Match.vue';


</script>

<template>
  <Nav />

  <div class="flex justify-center">
    <h1 class="font-anonymous text-6xl text-primary drop-shadow-[0_0_1px_#8D0D0D]">
      <<span class="italic">Tin</span>dev/>🌹
    </h1>
  </div>
  <div class="p-12">
    <Question />
    <Welcome />
  </div>
  <Suspense>
    <Match />
  </Suspense>


  <Footer />
</template>./components/Matching/Match.vue