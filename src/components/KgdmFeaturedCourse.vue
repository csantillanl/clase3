<template>
  <section class="container mt-16">
    <h2 class="text-2xl font-bold text-left text-white">Destacados para ti</h2>
    <article
      class="grid items-center grid-rows-2 gap-0 transform gap-y-0 sm:grid-rows-1 sm:grid-cols-3 hover:shadow-primary"
    >
      <div
        class="h-full col-start-1 col-end-3 bg-center bg-no-repeat bg-cover rounded-l-xl"
        style="background-image: url('/img/Group 10.png')"
      ></div>
      <div class="">
        <div
          class="h-full p-12 text-left bg-purple-800 rounded shadow-inner sm:rounded-r-xl"
        >
          <h3 class="text-4xl font-bold text-white">Acuarelas</h3>
          <p class="text-sm text-white">
            Aprende con Roma Veliz los principios de la ilustración con
            acuarelas.
          </p>
          <div class="mt-8">
            <p class="font-bold text-white">13 sesiones</p>
            <p class="font-bold text-white">3hr 40 min Duración</p>
            <p class="font-bold text-white">Romina Veliz</p>
          </div>
          <button
            class="px-6 py-2 mt-16 mb-0 text-lg font-bold text-white transition transform bg-red-600 rounded-full hover:shadow-primary hover:-translate-y-1 hover:bg-red-500"
          >
            Registrate Gratis
          </button>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'kgdm-featured-course',
};
</script>
