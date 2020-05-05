<template>
  <div class="jurusan">
    <h1>Ini halaman jurusan {{$route.params.jurusan}}</h1>
  </div>
</template>

<script>
export default {
  props:[
    'title'
  ],
}
</script>