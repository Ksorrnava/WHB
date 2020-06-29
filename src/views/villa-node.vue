<template>
  <div class="nodeVilla">
    <h1>{{entity.gsx$morefaqtopics.$t | capitalize }}</h1>
    <mdb-row>
     <mdb-col col="6">
       <agile v-if="slides.length" class="main" ref="main" :options="options1" :as-nav-for="asNavFor1">
         <div class="slide" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`"><img :src="slide" /></div>
         <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
         <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
       </agile>
       <agile v-if="slides.length" class="thumbnails" ref="thumbnails" :options="options2" :as-nav-for="asNavFor2">
         <div class="slide slide--thumbniail" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`" @click="$refs.thumbnails.goTo(index)">
           <img :src="slide" />
         </div>
         <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
         <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
       </agile>
     </mdb-col>
     <mdb-col col="6" class="villa right-column">
       <mdb-card v-if="prices">
         <mdb-card-header color="primary-color" tag="h3" v-if="prices.gsx$villa != 'undefined'">Basic price for this villa: {{prices.gsx$villa.$t}}</mdb-card-header>
         <mdb-card-body>
           <mdb-btn color="primary" @click="scrollTo()">go somewhere</mdb-btn>
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
  <mdb-col col="12" id="options" class="options mt-5 mb-5 for-scroll">
    <h2>Design  your own joglo and get a price </h2>
    <div class="icon-buttons text-center row">
      <mdb-col>
      <mdb-btn outline="info" @click.native="openOptions('1')" darkWaves class="btn--options"><img  class="button-img" src="./../assets/logo.svg" /></mdb-btn>
      </mdb-col>
      <mdb-col >
      <mdb-btn outline="info" @click.native="openOptions('2')" darkWaves class="btn--options"><img  class="button-img" src="./../assets/logo.svg" /></mdb-btn>
      </mdb-col>
      <mdb-col >
      <mdb-btn outline="info" @click.native="openOptions('3')" darkWaves class="btn--options"><img  class="button-img" src="./../assets/logo.svg" /></mdb-btn>
      </mdb-col>
      <mdb-col >
      <mdb-btn outline="info" @click.native="openOptions('4')" darkWaves class="btn--options"><img  class="button-img" src="./../assets/logo.svg" /></mdb-btn>
      </mdb-col>
      <mdb-col >
      <mdb-btn outline="info" @click.native="openOptions('5')" darkWaves class="btn--options"><img  class="button-img" src="./../assets/logo.svg" /></mdb-btn>
      </mdb-col>
      <mdb-col >
      <mdb-btn outline="info" @click.native="openOptions('6')" darkWaves class="btn--options"><img  class="button-img" src="./../assets/logo.svg" /></mdb-btn>
      </mdb-col>
    </div>
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
    All FAQ
  </mdb-modal-header>
  <FAQmodal />
</mdb-modal>

<mdb-modal position="bottom" fullHeight direction="bottom" :show="modalOptions" @close="modalOptions = false">
        <mdb-modal-header>
            <mdb-modal-title>Your {{priceType}} price is {{price}}</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          <div class="icon-buttons text-center">
            <mdb-btn outline="info" size="lg" :active="this.chosenTab == '1'" @click.native="modalTabHandler('1')" darkWaves><img  class="button-img" src="./../assets/logo.svg" /></mdb-btn>
            <mdb-btn outline="info" size="lg" :active="this.chosenTab == '2'" @click.native="modalTabHandler('2')" darkWaves><img  class="button-img" src="./../assets/logo.svg" /></mdb-btn>
            <mdb-btn outline="info" size="lg" :active="this.chosenTab == '3'" @click.native="modalTabHandler('3')" darkWaves><img  class="button-img" src="./../assets/logo.svg" /></mdb-btn>
            <mdb-btn outline="info" size="lg" :active="this.chosenTab == '4'" @click.native="modalTabHandler('4')" darkWaves><img  class="button-img" src="./../assets/logo.svg" /></mdb-btn>
            <mdb-btn outline="info" size="lg" :active="this.chosenTab == '5'" @click.native="modalTabHandler('5')" darkWaves><img  class="button-img" src="./../assets/logo.svg" /></mdb-btn>
            <mdb-btn outline="info" size="lg" :active="this.chosenTab == '6'" @click.native="modalTabHandler('6')" darkWaves><img  class="button-img" src="./../assets/logo.svg" /></mdb-btn>
          </div>
          <div class="tab-content">
            <template v-if="chosenTab == '1'">
              <select class="browser-default custom-select" v-model="size" >
                <option v-for="(option, index) in $store.state.sizeList" :value="option.value" :key="index">{{option.text}}</option>
              </select>
            </template>
            <template v-if="chosenTab == '2'">
              Centerpiece wood
              With or without carving
              Head piece no wood at all (open view of roof)
              Center pillars
              Carving
              Without carving
              Concrete pillar base
              Without pillar base
            </template>
            <template v-if="chosenTab == '3'">
              Roofs
Ceramic tile
Pasir Atap (don't know the english word for this)
Inside roofs
Nothing
Bamboo
Triplex
Thick
Thin
Colors
With or without foil

            </template>
            <template v-if="chosenTab == '4'">
              Porches or extensions
              Set porches can be selected
              What side and what size (Consultation needed) *There are so many sizes of joglos, but yeah what side doesn't matter. (it's more of thinking of for us designers how to make it)
              Only full lengths from the beginning
              Only set width to start with
            </template>
            <template v-if="chosenTab == '5'">
              Walls
              No Walls/Walls with doors included
              Wood walls
              Plain
              Pattern
              Triplex
              Thick
              Thin
              Close all gaps in roof
              Triplex
              Thick
              Thin
              Nothing
              Close all upper gaps before walls
              Triplex
              Thick
              Thin
              Wood
              Windows with frame
              Brick walls (Need to be consulted, location and what type, red brick, normal brick with plaster)
            </template>
            <template v-if="chosenTab == '6'">
            Foundations for wood houses
No foundation/Concrete foundation
</template>
          </div>
        </mdb-modal-body>

        <mdb-modal-footer class="d-flex justify-content-between">
          <mdb-btn outline="info" @click.native="changeModalTab('prev')" v-if="chosenTab != '1'"><mdb-icon icon="angle-double-left"/></mdb-btn>
            <mdb-btn color="secondary" @click.native="modalOptions = false">Close</mdb-btn>
            <mdb-btn color="primary">Save changes</mdb-btn>
            <mdb-btn outline="info" @click.native="changeModalTab('next')" v-if="chosenTab != '6'"><mdb-icon icon="angle-double-right"/></mdb-btn>
        </mdb-modal-footer>
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
      size: '',
      modal: false,
      modalOptions: false,
      priceType: 'basic',
      chosenTab: '',
      price: '',
      prices: {},
      entity: this.getData(this.path),
      slides: [],
      asNavFor1: [],
      asNavFor2: [],
      options1: {
        dots: false,
        fade: true,
        navButtons: true,
        infinite: true,
      },
      options2: {
        autoplay: true,
        centerMode: true,
        dots: false,
        navButtons: false,
        slidesToShow: 3,
        infinite: true,
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
     this.price = this.getPrices().gsx$villa.$t;
     this.size = this.entity.gsx$readmore.$t;
   },
  methods: {
    getPrices() {
      let price = _.find(this.$store.state.priceList, ['gsx$id.$t', this.entity.gsx$id.$t])
      return price
    },
    resizeImageforSlider: function (val) {
      return Utils.setImageSize(val,'1108', '800')
    },
    getImagesforSlider() {
      let self = this;
      let result = _.without(_.map(this.entity, function(value, key) {
        if(!key.includes('image') || value == 'undefined' || value.$t == '') return
        return self.resizeImageforSlider(value.$t)
     }), undefined);
      return result
    },
    getData(val) {
      let result = this.$store.state.mainList.villa.filter(obj => {
        if (obj.gsx$readmore != 'undefined') return obj.gsx$readmore.$t === val
      })
      return result[0]
    },
    scrollTo() {
      var el = this.$el.getElementsByClassName("options")[0];
        el.scrollIntoView({ behavior: 'smooth' });
    },
    changeModalTab(direction) {
      let count = parseInt(this.chosenTab);
      if(direction == 'next') {
           ++count === 5;
      } else if(direction == 'prev') {
         --count === 1;
      }
      this.chosenTab = count.toString()
    },
    modalTabHandler(val) {
      this.chosenTab = val;
    },
    openOptions(tab) {
      this.modalOptions = true;
      this.chosenTab = tab;
    },
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
    modal: function() {
      if(this.modal){
        document.documentElement.style.overflow = 'hidden'
        return
      }
      document.documentElement.style.overflow = 'auto'
    }
},
};
</script>
