<template>
  <div class="search">
    <h1>Search results</h1>
    <template v-if="Object.keys(entity).length">
      <div v-for="(section, index) in entity" :key="index">
      <div v-for="(item, index) in section" :key="index">
        <h4>{{item.gsx$morefaqtopics.$t}}</h4>
        <p>{{item.gsx$intromaintext.$t| truncate(50, '...')}}</p>
      </div>
    </div>
    </template>
    <template v-else>
      <p>No results</p>
    </template>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: "search",
  props: {
    query: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      entity: [],
    }
  },
  created() {
    if (this.query != '') {
      this.entity = this.getData(this.query)
    }
  },
  methods: {
    getData(val) {
        let keysForSearch = ['faq', 'villa']
        return _.without( _.map( this.$store.state.mainList, ( arr, key) => {
          if( keysForSearch.includes(key)) {
            arr = arr.filter(o => {
              return Object.keys(o).some(k => {
                if(o[k].$t && typeof o[k].$t === 'string') return o[k].$t.toLowerCase().includes(val.toLowerCase());
              });
            })
            if(arr.length)  return arr
          }
        } ), undefined);
    }
  },
  watch: {
  'query': function (newValue) {
      this.entity = this.getData(newValue)
  },
}
}
</script>
