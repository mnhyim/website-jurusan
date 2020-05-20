<template>
  <section>
    <table class="table is-fullwidth is-hoverable is-striped">
      <thead>
        <tr v-bind:class="x">
          <th class="has-text-white">No.</th>
          <th class="has-text-white">Nama Acara</th>
          <th class="has-text-white">Tanggal</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in jadwal" v-bind:key="row.id">
          <td v-for="col in row" v-bind:key="col.id">{{col}}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  props:[
    'jadwal',
    'x'
  ],
  data() {
    return {
    };
  }
};
</script>

<style scoped>

</style>