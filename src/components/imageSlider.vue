<template>
    <div class="container">
        <img src="../assets/sliderImage.png" alt="sliderImage" class="container__image">
    </div>
</template>

<script>
export default {
    name: 'imageSlider',
}
</script>

<style scoped>
.container {
    height: 400px;
}

.container__image {
    width: 100%;
    height: 400px;
}

@media only screen and (max-width: 910px) {
    .container__image {
        display: none;
    }
}
</style>