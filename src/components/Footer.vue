<template>
    <div class="container">
        <img src="../assets/logo.png" alt="logo" class="container__logo">
        <div class="container__information">
            <h5>Dodatkowe Informacje </h5>
            <span>Youtube: </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.container {
    width: 100%;
    min-height: 315px;
    background-color: var(--white-gray-color);
    font-family: Montserrat-Regular;

    display: flex;
}

.container__logo {
    width: 400px;
    grid-column-start: 1;
    user-select: none;
}

.container__information {
    margin-left: auto;
    margin-right: 100px;
    line-height: 10px
}

.container__information h5 {
    font-family: Montserrat-Bold;
    text-transform: uppercase;
}

@media only screen and (max-width: 910px) {
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .container__information {
        margin: 0;
        text-align: center;
    }

    .container__logo {
        margin: 0;
    }
}
</style>