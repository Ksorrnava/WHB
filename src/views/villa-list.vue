<template>
  <div>
    <h1>All villas</h1>

    <template v-if="$route.name == 'Home'">
      <mdb-row  class="columns" >
        <mdb-col md="4"  class="mb-5" v-for="(item, index) in entity" :key="index" v-show="item.gsx$hashtags.$t.includes('homepage')">
           <item :villaData="item"/>
        </mdb-col>
      </mdb-row>
   </template>

   <template v-else>
     <mdb-row class="columns" v-for="(chunk, index) in chunks" :key="index">
       <mdb-col md="4"  class="mb-5" v-for="(item, index) in chunk" :key="index">
          <item :villaData="item"/>
       </mdb-col>
     </mdb-row>
  </template>
</div>
</template>

<script>
import _ from 'lodash'
import item from "@/components/villa-card.vue";

export default {
  name: "Villas",
  props: {
  },
  components: {
    item
  },
  data() {
    return {
      entity: this.$store.state.mainList.villa,
    }
  },
  metaInfo() {
       return {
           title: `WoodHouseBali - All villas`,
           meta: [
               { name: 'description', content: 'All villas on WoodHouseBali'},
               { property: 'og:title', content: 'All villas - WoodHouseBali'},
               { property: 'og:site_name', content: 'WoodHouseBali'},
               { property: 'og:description', content: 'All villas on WoodHouseBali - '},
               {property: 'og:type', content: 'All villas page'},
               // {property: 'og:url', content: 'https://epiloge.com/@' + this.userData.username},
               // {property: 'og:image', content: this.aws_url + '/users/' + this.userData.profileurl + '-main.jpg' }
           ]
       }
   },
  computed: {
      chunks(){
        return _.chunk(Object.values(this.entity), 3);
      },
    },
    created() {
    }
};
</script>
