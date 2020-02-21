<template lang="pug">
  .hello-admin
    .container
      h1.title {{title}}
      addCategory
</template>

<script>
import titleAdmin from './title'
import addCategory from './addCategory'

export default {
  props: {
    title: String
  },
  components: {
    addCategory
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