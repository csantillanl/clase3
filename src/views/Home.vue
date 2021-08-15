<template>
  <div class="bg-black">
    <KgdmNavigation />
    <div class="">
      <header
        class="pt-20 bg-no-repeat bg-auto md:bg-cover lg:bg-cover lg:bg-right"
        style="background-image: url('img/art3.jpg')"
      >
        <div
          class="container grid grid-cols-1 gap-64 transition-all  lg:grid-cols-2"
        >
          <main class="">
            <div class="sm:text-center lg:text-left">
              <h1
                class="mt-32 text-3xl font-extrabold tracking-tight text-white  sm:text-4xl md:text-5xl"
              >
                <span class=""
                  >Lecciones honestas que permiten un aprendizaje
                  diferente e innovador.</span>
              </h1>
              <p class="mt-4 text-white opacity-80">
                Cursos honestos de comunicación y diseño.
              </p>
              <button
                class="px-6 py-2 mt-4 font-bold text-white transition transform bg-red-600 rounded-full  hover:bg-red-500 hover:shadow-primary hover:-translate-y-1"
              >
                Ir a registro
              </button>
            </div>
          </main>
        </div>
        <div class="h-56 bg-gradient-to-b from-transparent to-black"></div>
      </header>

      <div class="pt-24 bg-black">
        <kgdm-related-courses :relateds="relateds" class="-mt-52" />
      </div>

      <!-- secciones -->
      <KgdmFeaturedCourse />

      <!-- secciones -->
      <div class="container flex flex-col p-24 justify-items-center">
        <p class="text-xl font-bold text-white">
          Educación abierta para quienes creen que hay una mejor manera.
        </p>
        <div>
          <button
            class="px-6 py-3 mt-16 text-xl font-bold text-white transition transform bg-red-600 rounded-full  hover:bg-red-500 hover:shadow-primary hover:-translate-y-1"
          >
            Ser parte
          </button>
        </div>
      </div>
      <KgdmFooter />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import KgdmNavigation from '@/components/KgdmNavigation.vue';
import KgdmRelatedCourses from '../components/KgdmRelatedCourses.vue';
import KgdmFooter from '../components/KgdmFooter.vue';
import KgdmFeaturedCourse from '../components/KgdmFeaturedCourse.vue';

export default {
  name: 'Home',
  components: {
    KgdmNavigation,
    KgdmRelatedCourses,
    KgdmFooter,
    KgdmFeaturedCourse,
  },
  data() {
    return {
      title: 'Cocina para niños - Nivel 1',
      teacher: 'Daniela Aljovin',
      vistas: 123,
      linkedin: '#',
      video: 'https://www.youtube.com/embed/DysGVdbwoAI',
      videos: [
        {
          id: 0,
          title: 'video1',
        },
        {},
      ],
      relateds: [
        {
          _id: 10,
          title: 'Cocina para niños nivel 1',
          url: '/curso',
          image:
            'https://kgdm.live/wp-content/uploads/2021/02/thumbnail-cocina.png',
        },
        {
          _id: 1,

          title: 'Cocina para niños nivel 2',
          url: '/curso',
          image: 'https://kgdm.live/wp-content/uploads/2021/05/mistery2.jpg',
        },
        {
          _id: 2,
          title: 'Introducción a las acuarelas',
          url: '/curso',
          image: 'https://kgdm.live/wp-content/uploads/2020/12/Frame-10.jpg',
        },
        {
          _id: 3,
          title: 'Diseño de Interfases',
          url: '/curso',
          image:
            'https://kgdm.live/wp-content/uploads/2020/12/maxresdefault-14.jpg',
        },
        {
          _id: 4,
          title: 'Introducción a la programación',
          url: '/curso',
          image:
            'https://kgdm.live/wp-content/uploads/2020/12/maxresdefault-15.jpg ',
        },
      ],
    };
  },
};
</script>
