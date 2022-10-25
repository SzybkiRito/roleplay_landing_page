# Roleplay Server Landing Page

## About

Simple landing page created by using VUE 3.

## Editing

Every component is used in **LandingPage.vue** component. New resource slider you can add here to beacuse it is based on props.

## LandingPage.vue

You can add new resource slider in this file.
**backgroundColor** - The background color of section
**formatStyle** - False = image on the right, True = image on the left

```
  <section style="margin-top: 0px">
    <ResourceSlider title="ROZWINIĘTA MAPA"
      description="Rozgrywka na naszym serwerze diametralnie różni się od innych serwerów. Centralizujemy obszar City of Davis, próbując przy tym w jak najlepszy sposób odzwierciedlić realia Kalifornii!"
      backgroundColor="#333333" formatStyle="true" textColor="#d9d9d9" />
  </section>
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```
