<template>
  <div id="app">
    <mdb-container fluid>
      <div id="nav">
        <Menu />
      </div>
      <router-view />
      <Footer />
  </mdb-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/menu.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "Home",
  components: {
    Menu,
    Footer
  },
  data() {
    return {
      entity: [],
    }
  },
  created: function () {
    this.entity = require("./assets/faq.json").feed.entry;
    this.$store.commit('setList', this.entity);
},
};
</script>
