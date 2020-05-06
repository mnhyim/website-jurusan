<template>
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="require(`@/assets/${jurusan.image}`)" :alt="jurusan.name">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <h2 class="title is-5 has-text-centered has-text-link">{{ jurusan.abbr }}</h2>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: [
    'jurusan'
  ],
  methods:{
    chgRoute:function(){
      this.$router.push(this.link)
    },
  }
}
</script>
