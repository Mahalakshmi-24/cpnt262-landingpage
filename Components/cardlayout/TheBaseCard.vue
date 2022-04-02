<template>
   <div class="flex flex-wrap justify-center mt-8 gap-10 bg-slate-200 drop-shadow-md p-5" >
     <section v-for="card in cards" :key="card.id">
          <TheCardImage :url="card.image" />
          <TheCardTitle>{{ card.title }}</TheCardTitle>
          <TheCardDescription>{{ card.info }}</TheCardDescription>
          <TheCardOffer>{{card.offer}}</TheCardOffer>
          <Button>view more </Button>  
     </section>
      
      </div>
  
</template>

<script setup>
  const cards = [
    {
      title: "Dresses",
      info: "Dresses for Spring",
      image : "https://images.pexels.com/photos/10150103/pexels-photo-10150103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      offer : "Under $35"
    },

    {
      title: "T-Shirts",
      info: "colourfull T-shirts for daily wear",
      image : "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      offer : "Under $35"
    },
    {
      title: "Pants",
      info: "Comfortable pants for your occations",
      image : "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      offer : "Under $35"
    },
  ];
</script>