<template lang="pug">
  .hello-admin
    .container
      h1.title {{title}}
</template>

<script>
import titleAdmin from './title'

export default {
  props: {
    title: String
  },
  data() {
    return {
    }
  }
 };
</script>

<style lang="postcss" scoped>

  .hello-admin {
    height: 140px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #f8f9fe;
    position: relative;
  }

  .title {
    font-size: 21px;
    font-weight: 700;
    color: $font-color;
    margin-right: 50px;
  }
</style>