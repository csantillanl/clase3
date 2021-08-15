<template>
  <div class="flex flex-col text-left card">
    <a :href="url"
      v-bind:style="{ backgroundImage: 'url(' + image + ')' }"
      class="w-full mb-2 transition transform bg-gray-300 bg-cover rounded aspect-w-16 aspect-h-9 opacity-80 hover:opacity-100 hover:scale-105"
    ></a>
    <h4 class="font-bold text-gray-100">{{ title }}</h4>
    <a :href="url" class="flex items-center gap-2 text-xs text-red-500 transition hover:border-b"
      >ver más <i class="fas fa-angle-right"></i
    ></a>
  </div>
</template>

<script>
export default {
  name: 'CrossCard',
  props: ['title', 'image', 'url'],
};
</script>