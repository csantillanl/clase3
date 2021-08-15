<template>
  <div class="about">
    <KgdmNavigation />
    <KgdmBreadcrumb :title="title" />
    <kgdm-course-header :video="video" :title="title" :teacher="teacher" :zoom="zoom" />

    <!-- vio -->
    <section class="text-left text-white bg-black py-12text-sm">
      <kgdm-clases-list :sesions="sesions" />

      <!-- vio -->
      <div class="container grid grid-cols-4 gap-4 py-4 mb-2">
        <div class="col-start-1 col-end-2 font-bold text-white start">
          Sobre el curso
        </div>
        <div class="flex flex-row items-start col-start-2 col-end-5 gap-4">
          <p class="text-white">
            Cocinera oficial en el estudio, cria hamster y cocina desde los 4
            años, al crecer een el estudio aprendió a compartir espacio con lso
            adultos y apoyar en las labores domesticas.
          </p>
        </div>
      </div>

      <!-- vio -->
      <div class="container grid grid-cols-4 gap-4 py-4 mb-2">
        <div class="col-start-1 col-end-2 font-bold text-white start">
          Sobre el docente
        </div>
        <div class="flex flex-col items-start col-start-2 col-end-5">
          <p class="mb-4 text-white">
            4 años colaborando en el estudio experiencia de trabajo con, Faber
            Castel, Wira, Coyote foodtruck.<br />
            Cocinera oficialen el estudio, cria hamster y cocina desde los 4
            años, al crecer een el estudio aprendió a compartir espacio con lso
            adultos y apoyar en las labores domesticas, ama los hamsters y
            cocina.
          </p>
          <button class="p-2 px-4 text-white bg-red-600 rounded-lg">
            ver Perfil en Linkedin
          </button>
        </div>
      </div>

      <!-- link -->
      <div class="container grid grid-cols-4 gap-4 py-4 mb-2">
        <div class="col-start-1 col-end-2 font-bold text-white">Specs</div>
        <div
          class="flex flex-col items-start col-start-2 col-end-5 p-4 bg-gray-900 rounded-xl"
        >
          <div class="w-full pb-2 mb-2 border-b border-white">titulo</div>
          <p>ninguno</p>
        </div>
      </div>

      <!-- link -->
      <div class="container grid grid-cols-4 gap-4 py-4 mb-2">
        <div class="col-start-1 col-end-2 font-bold text-white">
          Recomendado para
        </div>
        <div class="flex flex-col items-start col-start-2 col-end-5">
          <p>Diseñadores,, Jovenes estudiantes Profesionales Jovenes Niños</p>
        </div>
      </div>
    </section>
    <!-- recomendados -->
    <section class="py-20 text-left bg-gray-900">
      <div class="container">
        <h3 class="px-0 mb-4 text-2xl font-bold text-white">
          También podria interesarte
        </h3>
      </div>
      <div class="container flex flex-row gap-5 px-8 py-4 overflow-x-scroll">
        <KgdmComponentCrossCard
          v-for="related in relateds"
          :key="related._id"
          :title="related.title"
          :url="related.url"
          :image="related.image"
        />
      </div>
    </section>

    <!-- footer -->
    <KgdmFooter />
  </div>
</template>

<script>
import KgdmNavigation from '@/components/KgdmNavigation.vue';
import KgdmBreadcrumb from '@/components/KgdmBreadcrumb.vue';
import KgdmComponentCrossCard from '@/components/KgdmComponentCourseCard.vue';
import KgdmFooter from '../components/KgdmFooter.vue';
import KgdmCourseHeader from '../components/KgdmCourseHeader.vue';
import KgdmClasesList from '../components/KgdmSessionsList.vue';

export default {
  name: 'Home',
  components: {
    KgdmNavigation,
    KgdmBreadcrumb,
    KgdmComponentCrossCard,
    KgdmFooter,
    KgdmCourseHeader,
    KgdmClasesList,
  },
  data() {
    return {
      title: 'Cocina para niños - Nivel 1',
      teacher: 'Daniela Aljovin',
      zoom:'https://zoom.us',
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
      sesions: [
        {
          _id: 0,
          title: '01 Peperoni Pizza',
          url: '/',
        },
        {
          _id: 1,
          title: '02 Pie de Manzana',
          url: '/',
        },
        {
          _id: 2,
          title: '03 Quinua Wrapps',
          url: '/',
        },
        {
          _id: 3,
          title: '04 Cinammon Roll',
          url: '/',
        },
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
