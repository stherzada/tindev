<script setup lang="ts">
import Nav from './components/Nav.vue';
import Question from './components/Question.vue';
import Welcome from './components/Welcome.vue';


</script>

<template>
  <Nav />

  <div class="title">
    <h1>
      <<span class="text-italic">Tin</span>dev/>🌹
    </h1>
  </div>

  <Question />
  <Welcome />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

h1 {
  font-family: "Anonymous Pro", monospace;
  font-size: 60px;
  color: #8D0D0D;
  filter: drop-shadow(0px 0px 1px #8D0D0D);
}

.text-italic {
  font-style: italic;
}

.title {
  display: flex;
  justify-content: center;
}
</style>