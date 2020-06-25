<template>
  <div class="nodeVilla">
    <h1>{{entity.gsx$morefaqtopics.$t | capitalize }}</h1>
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
import _ from 'lodash'
import Utils from './../utils'

export default {
  name: "nodeVilla",
  props: {
    path: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      entity: this.getData(this.path),
      thumbnailCarousel: [],
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
   computed: {

   },
   mounted() {
     this.thumbnailCarousel = this.getImagesforSlider();
   },
  methods: {
    resizeImageforSlider: function (val) {
      return Utils.setImageSize(val,'450', '450')
    },
    resizeImageforThumb: function (val) {
      return Utils.setImageSize(val,'100', '100')
    },
    getImagesforSlider() {
      let self = this;
      let result = _.without(_.map(this.entity, function(value, key) {
        if(!key.includes('image') || value.$t == '') return
        return {
           img: true,
           src: self.resizeImageforSlider(value.$t),
           thumbnail: self.resizeImageforThumb(value.$t)
       }
     }), undefined);
      console.log(result)
      return result
    },
    getData(val) {
      let result = this.$store.state.mainList.villa.filter(obj => {
        return obj.gsx$readmore.$t === val
      })
      return result[0]
    }
  },
};
</script>
