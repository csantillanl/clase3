<template>
  <section class="z-10 w-full text-left ">
    <div class="container">
      <h3 class="px-0 mb-4 text-2xl font-bold text-white">
        También podria interesarte
      </h3>
    </div>
    <div>
      <div
        class="container grid grid-cols-2 gap-6 py-2 sm:grid-cols-3 lg:grid-cols-5"
      >
        <KgdmComponentCrossCard
          v-for="related in relateds"
          :key="related._id"
          :title="related.title"
          :url="related.url"
          :image="related.image"
        />
      </div>
    </div>
  </section>
</template>

<script>
import KgdmComponentCrossCard from '@/components/KgdmComponentCourseCard.vue';

export default {
  components: {
    KgdmComponentCrossCard,
  },
  props: ['relateds'],
};
</script>