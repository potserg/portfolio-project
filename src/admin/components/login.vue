<template lang="pug">
  .login
    .login__content
      form(@submit.prevent="login").login__form
        .login__form-title Авторизация
        .login__row
          app-input(
            title="Логин"
            icon="user"
            v-model="user.name"
          )
        .login__row
          app-input(
            title="Пароль"
            icon="key"
            type="password"
            v-model="user.password"
          )
        .login__btn
          button(
            type="submit"
          ).login__send-data Отправить
</template>

<script>
import $axios from "../requests";
export default {
  components: {
    appInput: () => import("./input")
  },
  data: () => ({
    user: {
      name: "",
      password: ""
    }
  }),
  methods: {
    async login() {
      try {
        const response = await $axios.post("/login",  this.user); 
        const token = response.data.token;
        
        localStorage.setItem("token", token);
        $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        this.$router.replace("/");
        
      } catch (error) {
        
      }
    }
  }
};
</script>

<style lang="postcss">
@import url("../../styles/mixins.pcss");
.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("~images/content/admin.png") center center / cover no-repeat;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
    background: $text-color;
  }
}
.login__form-title {
  font-size: 36px;
  text-align: center;
  font-weight: 600;
}
.login__content {
  position: relative;
  @include phones {
    height: 100%;
    width: 100%;
  }
}
.login__row {
  margin-bottom: 35px;
}
.login__btn {
  display: flex;
  width: 100%;
  padding: 0 8%;
  justify-content: center;
}
.login__send-data {
  width: 100%;
  padding: 30px;
  background-image: linear-gradient(to right, #ad00ed, #5500f2);
  border-radius: 40px 0 40px;
  color: $text-color;
  text-transform: uppercase;
  font-weight: 600; 
  font-size: 18px;
  &[disabled] {
    opacity: 0.5;
    filter: grayscale(100%);
  }
}
.login__form {
  width: 563px;
  padding: 50px 77px 60px;
  background: $text-color;
  @include phones {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 7%;
    padding-left: 7%;
  }
}
</style>