<template>
  <div id="app">
    <mdb-container fluid class="mt-5">
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
import _ from 'lodash'
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
    this.$store.commit('setList', this.rewriteEntity(this.entity));
},
  methods: {
    getByValue(arr, val){
      let result;
      result = _.filter(arr, function(o) {
        if (o.gsx$hashtags.$t.includes(val)) return o;
      });
      return result

    },
    rewriteEntity(ent){
      let self = this;
      let hashes = ['page', 'faq', 'extras', 'system']
      let result = {};
      hashes.forEach(function (name) {
          result[name] = self.getByValue(ent, name);
      })
      return result
    },
  }
};
</script>
