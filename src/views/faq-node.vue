<template>
  <div class="nodeFaq">
    <h1>{{entity.gsx$morefaqtopics.$t | capitalize }}</h1>
    <div class="text-center">
    <mdb-btn size="sm" color="primary" v-for="(item, index) in getSubtitles" :key="index" @click="scrollTo(item.key)" >{{item.value}}</mdb-btn>
  </div>
    <template v-for="(item, index) in entity" >
      <template v-if="index.startsWith('gsx$') && index != 'gsx$id' && index != 'gsx$morefaqtopics' && index != 'gsx$readmore' && index != 'gsx$hashtags' && index != 'gsx$active'">
        <h2 v-if="index.includes('main') && index.includes('title')" :class="[index, 'faq-subtitle']" :key="index">{{item.$t}}</h2>
        <p class="subtitle" v-if="index.includes('subtitle')" v-html="item.$t" :key="index"></p>
        <img v-if="index.includes('image')" :src="item.$t" :key="index" :alt="index"/>
        <p v-if="index.includes('text')" v-html="item.$t" :key="index"></p>
      </template>
    </template>
  </div>
</template>

<script>
import _ from 'lodash'

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
  metaInfo() {
       return {
           title: `WoodHouseBali - ${this.entity.gsx$morefaqtopics.$t}`,
           meta: [
               { name: 'description', content: 'Read about ' + this.entity.gsx$morefaqtopics.$t + ' on WoodHouseBali - '},
               { property: 'og:title', content: this.entity.gsx$morefaqtopics.$t + ' - WoodHouseBali'},
               { property: 'og:site_name', content: 'WoodHouseBali'},
               { property: 'og:description', content: 'Read about ' + this.entity.gsx$morefaqtopics.$t + ' on WoodHouseBali - '},
               {property: 'og:type', content: 'FAQ page'},
               // {property: 'og:url', content: 'https://epiloge.com/@' + this.userData.username},
               // {property: 'og:image', content: this.aws_url + '/users/' + this.userData.profileurl + '-main.jpg' }
           ]
       }
   },
  mounted: function ()  {
  },
  computed: {
    getSubtitles() {
    let subt = _.without(_.map(this.entity, function(value, key) {
        if((key.includes('title') && key.includes('gsx'))&& value.$t) {
          return {key: key, value: value.$t}
        }
     }), undefined)
      return subt
    },
  },
  methods: {
    getData(val) {
      let result = this.$store.state.mainList.faq.filter(obj => {
        return obj.gsx$readmore.$t === val
      })
      return result[0]
    },
    scrollTo(val) {
      var el = this.$el.getElementsByClassName(val)[0];
        el.scrollIntoView({ behavior: 'smooth'});
    },
  },
};
</script>
