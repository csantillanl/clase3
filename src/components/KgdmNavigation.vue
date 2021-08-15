<template>
  <div id="kgdm-navigation" class="container text-white bg-black" style="font-family: 'Oswald', sans-serif;">
    <div class="flex flex-row items-center ">
      <router-link to="/"><img class="h-12 mb-1" src="/img/logo.png" /></router-link>
      <div class="flex-grow"></div>
      <div class="flex gap-4 text-xs">
        <router-link to="/cursos">CURSOS</router-link>
        <router-link to="/login"> INICIAR SESIÓN</router-link>
        <router-link to="/registro"> REGISTRARSE</router-link>
        <router-link to="/cart"> <i class="fas fa-shopping-cart"></i></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>