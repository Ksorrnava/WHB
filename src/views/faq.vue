<template>
  <div>
    <mdb-row class="columns" v-for="(chunk, index) in faqChunks" :key="index">

    <mdb-col md="4"  class="mb-5" v-for="(item, index) in chunk" :key="index">
       <item :faqData="item" />
    </mdb-col>

  </mdb-row>

</div>
</template>

<script>
import _ from 'lodash'
import item from "@/components/faq-item.vue";

export default {
  name: "Faq",
  props: {
    path: {
      type: String,
      default: 'All'
    }
  },
  components: {
    item
  },
  data() {
    return {
      entity: this.$store.state.mainList,
    }
  },
  computed: {
      faqChunks(){
        return _.chunk(Object.values(this.entity), 3);
      }
    },
};
</script>
