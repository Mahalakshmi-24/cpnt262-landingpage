<template>

<div v-for="sections in section" :key="sections.id" :style="{ backgroundImage: `url(${sections.image})`}" class="bg-auto h-96">

  <h1 class="font-extrabold text-white text-4xl pl-24 pt-40">{{sections.heading}}</h1>
  
  <p class="font-extrabold text-white text-xl pl-24 pt-3">{{sections.description}}</p>
  <Button class="pl-24 pt-3"> View More </Button>

</div>

</template>

<script setup>

const section = [
  {
    heading : "Welcome to our page",
    description : "Style your own way",
    image : "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cta: "view"
  },

];
</script>
