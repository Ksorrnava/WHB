import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import("../views/Home.vue")
  },
  {
    path: "faq/:path",
    name: "Faq",
    props: true,
    component: () =>
      import("../views/faq.vue")
  },
  // {
  //   path: "/contacts",
  //   name: "Contacts",
  //   component: () =>
  //     import("../views/Node.vue")
  // },
  // {
  //   path: "/release/:path",
  //   name: "Article",
  //   props: true,
  //   component: () => import("../views/Node.vue")
  // },
  // {
  //   path: "/results",
  //   name: "Results",
  //   props: true,
  //   component: () => import( "../views/Results.vue")
  // },
  // {
  //   path: "/tags/:tagId",
  //   name: "Tags",
  //   props: true,
  //   component: () => import( "../views/Tags.vue")
  // }

];

const router = new VueRouter({
  routes,
  mode: 'history'
});


export default router;
