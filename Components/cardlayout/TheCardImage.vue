<template>
<div class="flex justify-center rounded-lg">
  <img
    :src="props.url"
    :alt="props.alt"
    class="w-64 h-48"
  />
</div>
</template>
<script setup>
  const props = defineProps({
    url: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
    },
  });
</script>