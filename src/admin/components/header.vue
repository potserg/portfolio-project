<template lang="pug">
  header.header-admin
    .container.header-container
      .header__content
        .header__user-foto
          img.user-foto__img(src="../../images/content/my-photo.jpg")
        .header__user-name Сергей Потолицын
        .header__user-title Панель администрирования
      button.header__btn(@click="logoutUser") Выйти
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("user", ["logout"]),
    logoutUser() {
      this.logout();
      this.$router.replace('/login');
    }
  }  
}
</script>

<style lang="pcss" scoped>

  .header-admin {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-self: center;
    background-color: $font-color;
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .header__user-foto {
    width: 50px;
    height: 50px;
    position: relative;
    margin-right: 20px;
  }

  .user-foto__img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  .header__user-name {
    font-size: 18px;
    font-weight: 600;
    color: $text-color;
    margin-right: 20px;
  }

  .header__user-title {
    font-style: 14px;
    font-weight: 500;
    color: rgba($text-color, 0.5);
  }

  .header__btn {
    height: max-content;
    font-family: 'Open Sans', Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: rgba($text-color, 0.5);
    border-bottom: 1px solid rgba($text-color, 0.5);
    transition: color $speed, border-color $speed;

    &:hover {
      color: $text-color;
      border-color: $text-color;
    }
  }
</style>