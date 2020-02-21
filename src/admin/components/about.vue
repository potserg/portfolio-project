<template lang="pug">
  section.section.about
    header-admin
    pages
    hello-about(title="Блок «Обо мне»")
    .about__content
      .container.about__container
        form(@submit.prevent="addNewCategory").categories-form
          input(type="text" placeholder="Название новой группы" v-model="title")
          input(type="submit" value="Добавить")
        ul.skill__list
          li.skill__item(v-for="category in categories" :key="category.id")
            skills-group(
              :category="category"
            )
</template>

<script>
  import headerAdmin from "./header";
  import pages from "./pages";
  import helloAbout from "./helloAbout";
  import skillsGroup from "./skills-group";
  
  import { mapActions, mapState } from "vuex";
  export default {
    components: {
      headerAdmin, pages, helloAbout, skillsGroup
    },
    data: () => ({
      title: ""
    }),
    computed: {
      ...mapState("categories", {
        categories: state => state.categories
      })
    },
    created() {
      this.fetchCategories();
    },
    methods: {
      ...mapActions("categories", ["addCategory", "fetchCategories"]),
      async addNewCategory() {
        try {
          await this.addCategory(this.title);
        } catch (error) {
          alert(error.message);
        }
      }
    }
  };
</script>

<style lang="postcss" scoped>

  .about__content {
    height: 840px;
    position: relative;
  }

  .about__container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  .categories-form {
    width: 47.5%;
    height: 47.5%;
    box-shadow: 0 0 10px 0 rgba($font-color, 0.5);
  }

  .skill__list {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 47.5%;
    position: relative;
}

  .skill__item {
    width: 47.5%;
    height: 100%;
    box-shadow: 0 0 10px 0 rgba($font-color, 0.5);
    font-size: 14px;
    font-weight: 600;
    color: $font-color;
  }
</style>