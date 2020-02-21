<template lang="pug">
  .pages-admin
    .container
      ul.pages__list
        li.pages__item(v-for="page in pages")
          router-link(
            :data-text="page.title"
            :to="page.href"
          ).pages__link
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          title: "Обо мне",
          href: "/"
        },
        {
          title: "Работы",
          href: "/works"
        },
        {
          title: "Отзывы",
          href: "/reviews"
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>

  .pages-admin {
    height: 75px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
  }

  .pages__list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .pages__item {
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }

  .pages__link {
    font-size: 16px;
    font-weight: 600;
    color: rgba($font-color, 0.5);
    border-bottom: 2px solid transparent;
    transition: border-bottom $speed, padding-bottom $speed, color $speed;

    &:before {
      content: attr(data-text);
    }

    &:hover {
      border-bottom: 2px solid $font-color;
      padding-bottom: 25px;
      color: $font-color;
    }
  }
</style>