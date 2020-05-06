<template>
  <router-link :to='link'>
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="require(`@/assets/${image}`)" :alt="name">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <h2 class="title is-5 has-text-centered has-text-link">{{ abbr }}</h2>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: [
    'id',
    'abbr',
    'image',
    'link'
  ],
  methods:{
    chgRoute:function(){
      this.$router.push(this.link)
    },
  }
}
</script>
