export default [
  {
    path: '/',
    component: () => import("../components/about.vue"),
    meta: {
      title: "Блок «Обо мне»"
    }
  },
  {
    path: '/works',
    component: () => import("../components/works.vue"),
    meta: {
      title: "Работы"
    }
  },
  {
    path: '/reviews',
    component: () => import("../components/reviews.vue"),
    meta: {
      title: "Отзывы"
    }
  },
  {
    path: '/login',
    component: () => import("../components/login.vue"),
    meta: {
      public: true
    }
  }
]