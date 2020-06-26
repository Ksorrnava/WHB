<template>
  <div class="nodeVilla">
    <h1>{{entity.gsx$morefaqtopics.$t | capitalize }}</h1>
    <mdb-row>
     <mdb-col col="6">
       <agile v-if="slides.length" class="main" ref="main" :options="options1" :as-nav-for="asNavFor1">
         <div class="slide" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`"><img :src="slide" /></div>
       </agile>
       <agile v-if="slides.length" class="thumbnails" ref="thumbnails" :options="options2" :as-nav-for="asNavFor2">
         <div class="slide slide--thumbniail" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`" @click="$refs.thumbnails.goTo(index)">
           <img :src="slide" />
         </div>
         <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
         <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
       </agile>
     </mdb-col>
     <mdb-col col="6">
       <mdb-card>
         <mdb-card-header color="primary-color" tag="h3">Basic price for this villa: {{prices.gsx$villa.$t}}</mdb-card-header>
         <mdb-card-body>
           <mdb-btn color="primary">go somewhere</mdb-btn>
         </mdb-card-body>
       </mdb-card>
       <template v-for="(item, index) in entity" >
         <template v-if="index.startsWith('gsx$') && index != 'gsx$id' && index != 'gsx$morefaqtopics' && index != 'gsx$readmore' && index != 'gsx$hashtags' && index != 'gsx$active'">
           <p class="subtitle" v-if="index.includes('subtitle')" v-html="item.$t" :key="index"></p>
           <p v-if="index.includes('text')" v-html="item.$t" :key="index"></p>
         </template>
       </template>
     </mdb-col>
    </mdb-row>
<mdb-row>
  <mdb-col col="12">
    Here will be choices and whatever elso going to be here
  </mdb-col>
</mdb-row>

<mdb-row>
  <mdb-col col="12">
    <FAQ />
    <mdb-btn color="primary" block @click.native="modal = true">All frequently asked questions</mdb-btn>
  </mdb-col>
</mdb-row>

<!-- Modal -->
<mdb-modal side position="right" fullHeight scrollable direction="right" :show="modal" @close="modal = false">
  <mdb-modal-header>
    <mdb-modal-title>Modal title</mdb-modal-title>
  </mdb-modal-header>
  <FAQmodal />
</mdb-modal>



  </div>
</template>

<script>
import _ from 'lodash'
import Utils from './../utils'

import FAQ from "@/views/faq-list.vue";
import FAQmodal from "@/components/faq-modal.vue";

export default {
  name: "nodeVilla",
  components: {
    FAQmodal,
    FAQ
  },
  props: {
    path: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      modal: false,
      prices: {},
      entity: this.getData(this.path),
      slides: [],
      asNavFor1: [],
      asNavFor2: [],
      options1: {
        dots: false,
        fade: true,
        navButtons: false
      },
      options2: {
        autoplay: true,
        centerMode: true,
        dots: false,
        navButtons: false,
        slidesToShow: 3,
        responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 5
                    }
                },

                {
                    breakpoint: 1000,
                    settings: {
                        navButtons: true
                    }
                }
            ]

      },
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
     this.slides = this.getImagesforSlider();
     this.prices = this.getPrices()
   },
  methods: {
    getPrices() {
      let price = _.find(this.$store.state.priceList, ['gsx$id.$t', this.entity.gsx$id.$t])
      console.log(price)
      return price
    },
    resizeImageforSlider: function (val) {
      return Utils.setImageSize(val,'1108', '800')
    },
    getImagesforSlider() {
      let self = this;
      let result = _.without(_.map(this.entity, function(value, key) {
        if(!key.includes('image') || value.$t == '') return
        return self.resizeImageforSlider(value.$t)
     }), undefined);
      return result
    },
    getData(val) {
      let result = this.$store.state.mainList.villa.filter(obj => {
        return obj.gsx$readmore.$t === val
      })
      return result[0]
    }
  },
  watch: {
  slides: {
    deep: true,
    handler() {
     this.$nextTick(() => {
        this.asNavFor1 = [this.$refs.thumbnails];
        this.asNavFor2 = [this.$refs.main];
     });
    },
  },
},
};
</script>
