<template>
 
 <div class="bg-black">
      <div class="container flex flex-row gap-3">
        <div class="flex flex-row gap-1 py-4 text-xs">
          <router-link class="text-red-500 transition" to="/">Home <i class="fas fa-angle-right"></i></router-link>
          <router-link class="text-red-500 transition" to="/curso">Cursos <i class="fas fa-angle-right"></i></router-link>
          <p class="font-bold text-white">{{title}}</p>
        </div>
        <div class="flex-grow"></div>
      </div>
    </div>
    
</template>

<script>
export default {
  name: 'Breadcrumb',
  props:['title']
};
</script>