<template>
    <nav class="navigation">
        <ul>
            <li><a href="#about_us">O NAS</a></li>
            <li><a href="https://rgrp.pl/wsparcie">WSPARCIE</a></li>
            <li><a href="https://rgrp.pl/rekrutacja">REKRUTACJA</a></li>
            <li><a href="https://rgrp.pl/whitelistLanding">WHITELIST</a></li>
            <li><a href="https://rgrp.pl/regulamin">REGULAMIN</a></li>
        </ul>
    </nav>
</template>
  
<script>
export default {
    name: 'Navigation'
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation {
    display: grid;
    grid-template-columns: repeat(5, 260px);
    grid-auto-flow: row;
    width: 100%;
    font-family: Montserrat-Regular;
    position: fixed;
}

a {
    text-decoration: none;
    color: #000
}

a {
    display: block;
    margin-right: 50px;
    white-space: nowrap;
}

a::after {
    display: block;
    content: '';
    border-bottom: 3px solid #6F1E81;
    transform: scaleX(0);
    transition: transform 300ms ease-in-out;
}

a:hover::after {
    transform: scaleX(1);
}

.navigation ul {
    grid-column-start: 2;

    display: flex;
    align-items: center;
    list-style: none;
}

@media only screen and (max-width: 910px) {
    .navigation {
        position: fixed;
        display: flex;
        flex-direction: column;
        font-family: Montserrat-Regular;
        width: 100%;
    }

    .navigation ul {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        list-style: none;
    }
}
</style>
  