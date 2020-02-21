<template lang="pug">
  .wrapper.admin-wrapper
    router-view
</template>

<script>
import about from "./components/about";
import works from "./components/works";
import reviews from "./components/reviews";

export default {
  name: "app",
  components: {
    about, works, reviews
  }
}
</script>

<style lang="pcss" src="./styles/app.pcss">
 
</style>