<template>
  <div class="nodeFaq">
    <h1>{{entity.title.$t | capitalize }}</h1>
    <template v-for="(item, index) in entity" >
      <template v-if="index.startsWith('gsx$') && index != 'gsx$id' && index != 'gsx$morefaqtopics' && index != 'gsx$readmore' && index != 'gsx$hashtags' && index != 'gsx$active'">
        <h2 v-if="index.includes('main') && index.includes('title')" :key="index">{{item.$t}}</h2>
        <p class="subtitle" v-if="index.includes('subtitle')" v-html="item.$t" :key="index"></p>
        <img v-if="index.includes('image')" :src="item.$t" :key="index" :alt="index"/>
        <p v-if="index.includes('text')" v-html="item.$t" :key="index"></p>

      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: "nodeFaq",
  props: {
    path: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      entity: this.getData(this.path),
    }
  },
  methods: {
    getData(val) {
      let result = this.$store.state.mainList.faq.filter(obj => {
        return obj.gsx$readmore.$t === val
      })
      return result[0]
    }
  },
};
</script>
