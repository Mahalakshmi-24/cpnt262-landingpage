<template>

<div v-for="section in section1" :key="section.id" :style="{ backgroundImage: `url(${section.image})`}" class="bg-cover h-96 ">

  <h1 class="text-yellow-400 hover:text-rose-600 font-extrabold text-4xl pt-32 text-center">{{section.heading}}</h1>
  
  <p class="text-yellow-400 hover:text-rose-600 font-extrabold text-2xl pt-4 text-center">{{section.description}}</p>
  

</div>

</template>

<script setup>

const section1 = [
  {
    heading : "We are going green now!",
    description : "90% of the fiber we are used in our cloths will more substanable by 2025",
    image : "https://images.pexels.com/photos/131634/pexels-photo-131634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    
  },

];
</script>
