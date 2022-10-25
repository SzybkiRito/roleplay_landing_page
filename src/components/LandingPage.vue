<template>
  <Navigation style="position: absolute;" />
  <main>
    <img src="../assets/wave.svg" alt="wave" class="wave">
    <div class="landingPageText">
      <h1 class="landingPageText__serverName">Region Roleplay</h1>
      <h2 class="landingPageText__serverDescription">Fivem Roleplay</h2>
      <button class="landingPageText__button button"><a href="">Discord</a></button>
    </div>
  </main>

  <section id="about_us">
    <InformationSlider />
  </section>

  <section>
    <ImageSlider />
  </section>

  <section>
    <ResourceSlider title="SYSTEM GRAFFITI"
      description="Stworzyliśmy rozbudowany system graffiti, który umożliwia Wam rysowanie swojej pracy, a następnie umieszczenie jej na dowolnej ścianie! Cały obraz wyświetla się w formie 3D!"
      backgroundColor="#d9d9d9" />
  </section>

  <section style="margin-top: 0px">
    <ResourceSlider title="ROZWINIĘTA MAPA"
      description="Rozgrywka na naszym serwerze diametralnie różni się od innych serwerów. Centralizujemy obszar City of Davis, próbując przy tym w jak najlepszy sposób odzwierciedlić realia Kalifornii!"
      backgroundColor="#333333" formatStyle="true" textColor="#d9d9d9" />
  </section>

  <footer>
    <Footer />
  </footer>

</template>

<script>
import Navigation from '../components/Navigation.vue';
import InformationSlider from '../components/InformationSlider.vue';
import ImageSlider from '../components/imageSlider.vue';
import ResourceSlider from '../components/resourceSlider.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'LandingPage',
  components: {
    Navigation,
    InformationSlider,
    ImageSlider,
    ResourceSlider,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../variables.css');

main {
  background-color: var(--white-gray);
  height: 100vh;
  overflow-x: hidden;
}

.wave {
  position: absolute;
  right: 0;
  height: calc(100vh);
  -webkit-user-select: none;
  user-select: none;
}

.landingPageText {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(10, 50px);
  grid-gap: 10px;
  font-family: Montserrat-Bold;
  text-transform: uppercase;
  line-height: 50px;
}

.landingPageText__serverName {
  grid-row-start: 7;
  grid-column-start: 2;
  font-size: 72px;
  white-space: nowrap;
}

.landingPageText__serverDescription {
  font-family: Montserrat-Regular;
  grid-row-start: 8;
  grid-column-start: 2;
  font-size: 36px;
  white-space: nowrap;
  margin-left: 2px;
}

.landingPageText__button {
  grid-row-start: 9;
  grid-column-start: 2;
  margin-top: 30px;
}

.button {
  width: 250px;
  height: 50px;
  outline: none;
  border: none;
  background-color: var(--purple-color);
  color: #D9D9D9;
  font-family: Montserrat-Regular;
  font-size: 32px;
  text-transform: uppercase;
  transition: 0.2s ease-in-out;
  display: block;
}

button a {
  color: #D9D9D9;
  text-decoration: none;
}

.button:hover {
  border: 1px solid gray;
  background-color: transparent;
  color: var(--purple-color);
  cursor: pointer;
}

@media only screen and (max-width: 910px) {
  .wave {
    display: none;
  }

  .landingPageText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    overflow: auto;
  }

  .landingPageText__serverName {
    white-space: normal;
    font-size: 36px;
    width: 100%;
    text-align: center;
  }

  .landingPageText__serverDescription {
    text-align: center;
    width: 100%;
    margin-top: -50px;
  }

  .landingPageText__button {
    margin-top: -40px;
  }
}
</style>
