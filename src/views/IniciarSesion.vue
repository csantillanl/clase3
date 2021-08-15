<template>
  <div>
    <KgdmNavigation />
    <div
      class="flex flex-row h-screen bg-no-repeat bg-auto md:bg-cover lg:bg-cover lg:bg-right"
      style="background-image: url('img/art3.jpg')"
    >
      <div class="container bg-white md:bg-transparent">
        <div class="h-screen ml-0 md:w-2/5 pt-60">
          <h1 class="text-5xl font-black text-gray-800">Iniciar Sesión</h1>

          <!-- Formulario-->
          <div class="px-6 py-8 mt-4 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="">
                <div class="flex flex-col gap-4">
                  <div >
                    <div
                      class="text-sm font-bold tracking-wide text-left text-gray-700 "
                    >
                      Usuario
                    </div>
                    <input
                      class="w-full px-4 py-3 text-lg border-b rounded-xl -gray-300 border-round focus:outline-none focus:border-gray-500"
                      type=""
                      placeholder="kingdom@gmail.com"
                    />
                  </div>
                  <div class="mt-4">
                    <div class="flex items-center justify-between">
                      <div
                        class="text-sm font-bold tracking-wide text-gray-700"
                      >
                        Contraseña
                      </div>
                      <div>
                        <a
                          class="text-xs font-semibold text-gray-600 cursor-pointer font-display hover:text-indigo-800"
                        >
                          ¿olvidaste tu contraseña?
                        </a>
                      </div>
                    </div>
                    <input
                      class="w-full px-4 py-3 text-lg border-b border-gray-300 rounded-xl focus:outline-none focus:border-gray-500"
                      type=""
                      placeholder="Ingresa tu contraseña"
                    />
                  </div>
                </div>
              </div>
              <div class="flex flex-row gap-4 mt-10 ">
                <router-link to="#">
                  <button
                    class="px-12 py-3 text-base font-semibold tracking-wide text-gray-100 bg-gray-800 shadow-lg rounded-xl font-display focus:outline-none focus:shadow-outline hover:bg-red-500"
                  >
                    Iniciar sesión
                  </button>
                </router-link>
                <router-link to="#">
                  <button
                    class="px-16 py-3 text-base font-semibold tracking-wide text-gray-800 border-2 border-gray-800 shadow-lg rounded-xl font-display focus:outline-none focus:shadow-outline hover:bg-red-500 hover:text-white"
                  >
                    Registrarse
                  </button>
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KgdmNavigation from '@/components/KgdmNavigation.vue';
export default {
  name: 'Home',
  components: {
    KgdmNavigation,
  },
};
</script>

<style>
</style>