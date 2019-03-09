<template>
  <h1>{{ msg }}</h1>
</template>

<style lang="scss" scoped>
  h1 {
    color: red;
  }
</style>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'my-component',
    data () {
      return { msg: 'Hello World' }
    }
  })
</script>
