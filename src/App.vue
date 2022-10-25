<template>
  <LandingPage />
</template>

<script>
import LandingPage from './components/LandingPage.vue'

export default {
  name: 'App',
  components: {
    LandingPage
  }
}
</script>

<style>
@font-face {
  font-family: Montserrat-Bold;
  src: url("./assets/Montserrat-Bold.ttf");
}

@font-face {
  font-family: Montserrat-Regular;
  src: url("./assets/Montserrat-Regular.ttf");
}

body {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}
</style>
