<template>
  <div class="bg-black ">
      <KgdmNavigation />
        <header
        class="bg-no-repeat bg-auto md:bg-cover lg:bg-cover lg:bg-right"
        style="background-image: url('img/art3.jpg')"
      >
            <div
            class="container grid grid-cols-1 gap-64 transition-all lg:grid-cols-2 "
            >
            <main class="">
                <div class="sm:text-center lg:text-left">
                <h1
                    class="mt-24 text-5xl font-extrabold tracking-tight text-white sm:text-4xl md:text-8xl "
                >
                    <span class=""
                    >Cursos</span
                    >
                </h1>
                <p class="mt-4 text-2xl font-light text-white ">
                    Cursos honestos de comunicación y diseño.
                </p>
                
                </div>
            </main>
            </div>
                <div class="h-56 bg-gradient-to-b from-transparent to-black"></div>
        </header>
        <div class="-m-16">
            <div>
            <h2 class="container text-3xl font-bold text-left text-white">Ilustración</h2>
            <div class="container grid grid-cols-2 gap-6 py-2 sm:grid-cols-3 lg:grid-cols-5">
                <KgdmCursosLista />
                <KgdmCursosLista />
                <KgdmCursosLista />
                <KgdmCursosLista />
                <KgdmCursosLista />
            </div>
            </div>

            <!-- linea 2 -->
            <div class="mt-14 ">
            <h2 class="container text-3xl font-bold text-left text-white">Economía</h2>
            <div class="container grid grid-cols-2 gap-6 py-2 sm:grid-cols-3 lg:grid-cols-5">
                <KgdmCursosLista />
                <KgdmCursosLista />
                <KgdmCursosLista />
                <KgdmCursosLista />
                <KgdmCursosLista />
            </div>
            </div>
        </div>
  </div>
</template>

<script>
import KgdmNavigation from '@/components/KgdmNavigation.vue';
import KgdmCursosLista from '@/components/KgdmCursosLista.vue';

export default {
    name: 'Cursos',
    components: {
       KgdmNavigation, 
       KgdmCursosLista,
    }

}
</script>