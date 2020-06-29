<template>
  <div id="app" class="mt-5 pt-5">
    <mdb-container >
      <div id="nav">
        <Menu />
      </div>
      <router-view />
  </mdb-container>
  <Footer />
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
    Footer,
  },
  metaInfo() {
    return {
        title: "WoodHouseBali - Joglo Gladak or other traditional wood house styles in Bali",
        meta: [
            { name: 'description', content:  "To start making your own traditional house in Bali have never been easier. We have pre built Joglo and Gladak's that are made in Jawa using teak (Jati) that are ready to be shipped and put on your land."},
            { property: 'og:title', content: "WoodHouseBali - Joglo Gladak or other traditional wood house styles in Bali"},
            { property: 'og:site_name', content: 'WoodHouseBali'},
            {property: 'og:type', content: 'website'},
            {name: 'robots', content: 'index,follow'}
        ]
    }
},
  data() {
    return {
    }
  },
  created: function () {
    let prices = require("./assets/villa_sizes.json").feed.entry;
    this.$store.commit('setList', this.rewriteEntity());
    this.$store.commit('setPriceList', prices);
    this.$store.commit('setSizeList', this.getSizes());
},
  methods: {
    getLinkByValue(key) {
      return this.$store.state.mainList.villa.find(x => x.gsx$id.$t === key).gsx$readmore.$t;
    },
    getSizes() {
      let res = []
        this.$store.state.priceList.forEach(obj => {
          res.push({text: obj.gsx$size.$t, value: this.getLinkByValue(obj.gsx$id.$t)  })
        });
       return res
    },
    getByValue(arr, val){
      let result;
      result = _.filter(arr, function(o) {
        if (o.gsx$hashtags.$t.includes(val)) return o;
      });
      return result
    },
    rewriteEntity(){
      let entity = require("./assets/faq.json").feed.entry;
      let self = this;
      let hashes = ['page', 'faq', 'extras', 'villa', 'system']
      let result = {};
      hashes.forEach(function (name) {
          result[name] = self.getByValue(entity, name);
      })
      return result
    },
  }
};
</script>
