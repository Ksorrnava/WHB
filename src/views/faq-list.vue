<template>
  <div>
    <h1>FAQ</h1>
    <template v-if="$route.name == 'Faq'">
    <mdb-row class="columns" v-for="(chunk, index) in faqChunks" :key="index">
      <mdb-col md="4"  class="mb-5" v-for="(item, index) in chunk" :key="index">
         <item :faqData="item"/>
      </mdb-col>
    </mdb-row>
   </template>
   <template v-else>
     <mdb-row>
    <mdb-col md="4"  class="mb-5" v-for="(item, index) in faqRandom" :key="index">
       <item :faqData="item" />
    </mdb-col>
  </mdb-row>
  </template>

</div>
</template>

<script>
import _ from 'lodash'
import item from "@/components/faq-card.vue";

export default {
  name: "Faq",
  props: {
  },
  components: {
    item
  },
  data() {
    return {
      entity: this.$store.state.mainList.faq,
    }
  },
  metaInfo() {
       return {
           title: `WoodHouseBali - FAQ`,
           meta: [
               { name: 'description', content: 'FAQ on WoodHouseBali'},
               { property: 'og:title', content: 'FAQ - WoodHouseBali'},
               { property: 'og:site_name', content: 'WoodHouseBali'},
               { property: 'og:description', content: 'FAQ on WoodHouseBali - '},
               {property: 'og:type', content: 'FAQ list page'},
               // {property: 'og:url', content: 'https://epiloge.com/@' + this.userData.username},
               // {property: 'og:image', content: this.aws_url + '/users/' + this.userData.profileurl + '-main.jpg' }
           ]
       }
   },
  computed: {
      faqChunks(){
        return _.chunk(Object.values(this.entity), 3);
      },
      faqRandom() {
        return _.sampleSize(this.entity, 3)
      }
    },
    created() {

    },
    methods: {


    },
};
</script>
