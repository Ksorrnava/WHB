<template>
    <mdb-modal-body>
        <input v-model="searchWord" class="form-control" type="text" placeholder="Search in FAQ" aria-label="Search"/>
      <mdb-list-group>
        <mdb-list-group-item v-for="(item, index) in filteredFAQ" :key="index" :action="true" v-on:click.native="reroute(item.gsx$readmore.$t)">
          <div>
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-2 h5">{{item.gsx$morefaqtopics.$t}}</h5>
            </div>
            <p class="mb-2">
              {{item.gsx$intromaintext.$t| truncate(50, '...')}}
            </p>
          </div>
        </mdb-list-group-item>
      </mdb-list-group>
    </mdb-modal-body>
</template>

<script>

export default {
  name: "FAQModal",
  props: {
  },
  data() {
    return {
      entity: this.$store.state.mainList.faq,
      searchWord: ''
    }
  },
  computed: {
    filteredFAQ() {
    	 var self = this;
       return this.entity.filter(o => {
         return Object.keys(o).some(k => {
           if(o[k] != 'undefined' && o[k].$t && typeof o[k].$t === 'string') return o[k].$t.toLowerCase().includes(self.searchWord.toLowerCase());
         });
       });
    }
  },
  methods: {
    reroute(val) {
      let routeData = this.$router.resolve({name: 'nodeFaq', params: { path: val} });
      window.open(routeData.href, '_blank');
    },
  },
};
</script>
