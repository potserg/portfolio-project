import Vue from "vue";
import axios from "axios";

const baseUrl = "https://webdev-api.loftschool.com";
const token = localStorage.getItem('token') || "";

axios.defaults.baseURL = baseUrl;
axios.defaults.headers['Authorization'] = `Bearer ${token}`;

const login = {
  template: "#form-login",
  data: () => ({
    user: {
      name: "",
      password: ""
    }
  }),
  methods: {
    login() {
      axios.post('/login', this.user).then(response => {
        const token = response.data.token;
        axios.defaults.headers['Authorization'] = `Bearer ${token}`;
        localStorage.setItem('token', token);
      }).catch(error => {
        console.log(error.response.data);
      })
    }
  }
};

const skill = {
  template: "#form-skill",
  props: ["categoryId"],
  data() {
    return {
      skill: {
        title: "",
        percent: 0,
        category: this.categoryId
      }
    }
  },
  methods: {
    addNewSkill() {
      axios.post('/skills', this.skill).then(response => {
        this.$emit('skillAdded', response.data);
      })
    }
  }
};

const category = {
  template: "#form-category",
  components: {skill},

  data: () => ({
    title: "",
    categories: []
  }),
  created() {
    this.fetchCategories();
  },
  methods: {
    createCategory() {
      axios.post('/categories', {
        title: this.title
      }).then(response => {
        this.categories.unshift(response.data)
      })
    },
    fetchCategories() {
      axios.get('/categories/279').then(response => {
        this.categories = response.data
      })
    },
    addSkill(newSkill) {
      console.log(newSkill);
    }
  }
};

new Vue({
  el: "#app",
  template: "#form-root",
  components: { login, category }
});