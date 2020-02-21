<template lang="pug">
  h1.title {{title}}
</template>

<script>

export default {
  props: ["title"],
  data() {
    return {
    }
  }
}
</script>

<style lang="pcss" scoped>

  .title {
    font-size: 21px;
    font-weight: 700;
    color: $font-color;
    margin-right: 50px;
  }
</style>