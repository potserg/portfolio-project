<template lang="pug">
  section.section.reviews
      header-admin
      pages
      hello(title="Блок «Отзывы»")
</template>

<script>
  import headerAdmin from "./header";
  import pages from "./pages";
  import hello from "./hello";
  
  export default {
    components: {
      headerAdmin, pages, hello
    }
  }
</script>

<style lang="postcss">
</style>