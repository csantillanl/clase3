<template>
  <div class="bg-white" id="content-header">
    <div class="grid-cols-4 gap-8 sm:py-4 sm:container sm:grid">
      <div class="col-start-1 col-end-4 font-bold ">
        <div class="overflow-hidden aspect-w-16 aspect-h-9 sm: sm:rounded-xl ">
          <iframe
            :src="video"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="p-4 text-left sm:p-0">
        <h1 class="mb-4 font-sans text-2xl font-bold tracking-tight">
          {{ title }}
        </h1>
        <p class="mb-0 text-xs">
          <span class="font-bold">128</span> vistas |
          <span class="font-bold">11</span> videos
        </p>
        <div class="flex flex-row items-center gap-2 py-4">
          <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
          <h3 class="font-bold tracking-tight text-md">{{teacher}}</h3>
        </div>
         <a v-bind:href="zoom" class="flex flex-row items-center justify-center gap-3 p-2 px-2 text-xs font-bold text-white transition transform bg-blue-600 rounded-lg w-52 hover:shadow-primary hover:text-white hover:-translate-y-1">
            <i class="fas fa-video"></i> Ir a Zoom Meeting
          </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseHeader',
  props: [
     'title',
     'teacher','video','zoom'],
};
</script>