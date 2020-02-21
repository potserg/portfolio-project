<template lang="pug">
  section.section.works
    header-admin
    pages
    hello(title="Блок «Работы»")
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