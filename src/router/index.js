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
    path: "/faq",
    name: "Faq",
    props: true,
    component: () =>
      import("../views/faq-list.vue")
  },
  {
    path: "/faq/:path",
    name: "nodeFaq",
    props: true,
    component: () =>
      import("../views/faq-node.vue")
  },
  {
    path: "/villas",
    name: "Villas",
    props: true,
    component: () =>
      import("../views/villa-list.vue")
  },
  {
    path: "/villas/:path",
    name: "nodeVilla",
    props: true,
    component: () =>
      import("../views/villa-node.vue")
  },
  {
    path: "/search/:query",
    name: "Search",
    props: true,
    component: () =>
      import("../views/search.vue")
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});


export default router;
