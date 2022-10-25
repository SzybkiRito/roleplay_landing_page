<template>
    <div :style="`background-color: ${backgroundColor}; color: ${textColor}`"
        :class="{'container__right': formatStyle, 'container': !formatStyle}" data-aos="fade">
        <div :class="{'container__leftSideText': !formatStyle, 'container__rightSideText': formatStyle,}">
            <h4>{{ title }}</h4>
            <span>{{ description }}</span>
        </div>
        <div :class="{'container__leftSideImage': !formatStyle, 'container__leftSideImage': formatStyle,}"
            data-aos="fade">
            <img src="../assets/graffiti.png" alt="graffiti"
                :class="{'container__rightSideImage__image': !formatStyle, 'container__leftSideImage__image': formatStyle,}">
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import AOS from 'aos';

export default {
    name: 'resourceSlider',
    props: {
        title: String,
        description: String,
        backgroundColor: String,
        textColor: String,
        formatStyle: Boolean
    },
    setup() {
        onMounted(() => {
            AOS.init();
        })
    }
}
</script>

<style scoped>
.container {
    margin-top: -25px;
    width: 100%;
    min-height: 315px;

    display: flex;
}

h4 {
    font-size: 36px;
    font-family: Montserrat-Bold;
    margin-bottom: 5px;
}

.container__leftSideText {
    margin: 50px;
}

span {
    font-family: Montserrat-Regular;
    font-size: 18px;
    width: 500px;
}

.container__rightSideImage__image {
    width: 100%;
    height: 320px;
}

.rightSideText {
    color: pink;
}

.container__right {
    width: 100%;
    min-height: 315px;
    margin-top: -25px;

    display: flex;
    flex-direction: row-reverse;
}

.container__rightSideText {
    font-family: Montserrat-Regular;
    font-size: 18px;
    margin-left: 50px;
}

.container__leftSideImage__image {
    width: 100%;
    height: 320px;
    margin-bottom: -3px;
}

@media only screen and (max-width: 910px) {
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: -400px;
    }

    .container__right {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .container__rightSideImage__image {
        margin-top: 15px;
    }

    .container__leftSideText {
        margin-top: -30px;
        margin-bottom: -10px;
    }

    .container__rightSideText {
        margin-top: -30px;
        margin-bottom: 15px;
    }

}
</style>