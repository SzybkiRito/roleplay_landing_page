<template>
    <div class="container">
        <div class="card card__backgroundColorGreen" data-aos="flip-down" data-aos-duration="1000">
            <h3 class="card__title">ZAAWANSOWANE OPROGRAMOWANIE</h3>
            <p class="card__text">Nad kodem gry czuwa doświadczony zespół developerów, który każdego dnia ulepsza i
                usprawnia serwer technicznie. Posiadamy wiele rozbudowanych systemów, które pomogą Wam kreować swoją
                postać.</p>
        </div>
        <div class="card card__backgroundColorBlue" data-aos="flip-down" data-aos-duration="1000">
            <h3 class="card__title">O NAS</h3>
            <p class="card__text">Region Roleplay to serwer tworzony przez prawdziwych graczy
                dla prawdziwych graczy.
                Każdemu z nas brakowało miejsca do rozgrywki na poziomie w nieporównywalnym klimacie, stąd narodził się
                projekt. Wszyscy gracze naszego serwera mają realny wpływ na jego rozwój, jeśli posiadasz jakiś pomysł,
                podziel się, nim na naszym discordzie!</p>
        </div>
        <div class="card card__backgroundColorPink" data-aos="flip-down" data-aos-duration="1000">
            <h3 class="card__title">ROZGRYWKA SOUTH CENTRAL</h3>
            <p class="card__text">Nad kodem gry czuwa doświadczony zespół developerów, który każdego dnia ulepsza i
                usprawnia serwer technicznie. Posiadamy wiele rozbudowanych systemów, które pomogą Wam kreować swoją
                postać.</p>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import AOS from 'aos';

export default {
    name: 'InformationSlider',
    setup() {
        onMounted(() => {
            AOS.init();
        })
    }
}
</script>

<style scoped>
@import url('../variables.css');

.container {
    width: 100%;
    min-height: 400px;
    background: var(--gray-color);

    display: flex;
    align-content: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

.card {
    width: 400px;
    min-height: 150px;
    text-align: left;
    background-color: var(--white-gray-color);
    margin: 50px;
}

.card__title {
    font-family: Montserrat-Bold;
    font-size: 24px;
    margin: 15px;
}

.card__text {
    font-family: Montserrat-Regular;
    font-size: 18px;
    margin: 15px;
}

.card__backgroundColorGreen {
    background-color: var(--light-green-color);
}

.card__backgroundColorPink {
    background-color: var(--light-pink-color);
}

.card__backgroundColorBlue {
    background-color: var(--light-blue-color);
}
</style>