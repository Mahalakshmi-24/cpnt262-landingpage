<template>

<div v-for="sections in section" :key="sections.id" :style="{ backgroundImage: `url(${sections.image})`}" class="bg-auto h-96">

  <h1>{{sections.heading}}</h1>
  
  <p>{{sections.description}}</p>
  <button class="bg-white rounded-lg" >{{sections.cta}}</button>

</div>

</template>

<script setup>

const section = [
  {
    heading : "Welcome to our page",
    description : "hello",
    image : "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cta: "view"
  },

];
</script>
