<template>

<div class="container mb-2">
        <div class="grid grid-cols-5 gap-4 py-4">
          <div class="col-start-1 col-end-2 font-bold text-white">Video</div>
          <div class="flex flex-col items-start col-start-2 col-end-6">
            <div v-for="sesion in sesions" :key="sesion._id">
            <router-link   :to="sesion.url" class="flex items-center gap-2">
              <span class="text-xs text-red-500"
                ><i class="fas fa-circle"></i
              ></span>
              {{sesion.title}}
            </router-link>
            <div class="w-1 h-6 ml-1 border-r"></div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>

export default {
    name: 'SessionsList',
    props:['sesions']
}

</script>