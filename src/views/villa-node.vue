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
     <mdb-col col="6" class="villa right-column for-scroll">
       <mdb-card v-if="prices">
         <template v-if="!calculated">
           <mdb-card-header color="primary-color" tag="h3" v-if="priceCalc.basic != null ">Basic price for this villa:
             {{priceCalc.basic | toCurrency }}
           </mdb-card-header>
          </template>
          <template v-else>
            <mdb-card-header color="orange darken-2" tag="h3" v-if="priceCalc.basic != null ">Custom price for this villa: {{calculatedPrice}}</mdb-card-header>
          </template>
         <mdb-card-body>
           <template v-if="!calculated">
             <mdb-btn color="primary" @click="scrollTo('options')">Calculate custom price</mdb-btn>
           </template>
           <template v-else>
             <div v-for="(item, index) in priceCalc" :key="index">
               <span class="label">{{index}}:</span><span class="data">{{item | toCurrency}}</span>
             </div>
             <mdb-btn color="primary" @click="scrollTo('options')">Recalculate custom price</mdb-btn>
           </template>
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
    <mdb-btn color="primary" block @click.native="modalFaq = true">All frequently asked questions</mdb-btn>
  </mdb-col>
</mdb-row>

<!-- Modal -->
<mdb-modal side position="right" fullHeight scrollable direction="right" :show="modalFaq" @close="modalFaq = false">
  <mdb-modal-header>
    All FAQ
  </mdb-modal-header>
  <FAQmodal />
</mdb-modal>

<mdb-modal position="bottom" fullHeight direction="bottom" :show="modalOptions" @close="modalOptions = false">
        <mdb-modal-header>
            <mdb-modal-title>Your {{ifBasic}} price is {{calculatedPrice | toCurrency}}</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          <div class="icon-buttons text-center">
            <mdb-btn :outline="chosenTab == '1' ? 'success' : 'info'" size="lg" @click.native="modalTabHandler('1')" darkWaves ><img  class="button-img" src="./../assets/logo.svg" /></mdb-btn>
            <mdb-btn :outline="chosenTab == '2' ? 'success' : 'info'"  size="lg" @click.native="modalTabHandler('2')" darkWaves ><img  class="button-img" src="./../assets/logo.svg" /></mdb-btn>
            <mdb-btn :outline="chosenTab == '3' ? 'success' : 'info'"  size="lg" @click.native="modalTabHandler('3')" darkWaves ><img  class="button-img" src="./../assets/logo.svg" /></mdb-btn>
            <mdb-btn :outline="chosenTab == '4' ? 'success' : 'info'"  size="lg" @click.native="modalTabHandler('4')" darkWaves ><img  class="button-img" src="./../assets/logo.svg" /></mdb-btn>
            <mdb-btn :outline="chosenTab == '5' ? 'success' : 'info'"  size="lg" @click.native="modalTabHandler('5')" darkWaves ><img  class="button-img" src="./../assets/logo.svg" /></mdb-btn>
            <mdb-btn :outline="chosenTab == '6' ? 'success' : 'info'"  size="lg" @click.native="modalTabHandler('6')" darkWaves ><img  class="button-img" src="./../assets/logo.svg" /></mdb-btn>
          </div>
          <mdb-card class="card-body mt-4 ml-4 mr-4">
            <template v-if="chosenTab == '1'">
              <select class="browser-default custom-select" v-model="size" >
                <option v-for="(option, index) in $store.state.sizeList" :value="option.value" :key="index">{{option.text}}</option>
              </select>
            </template>
            <template v-if="chosenTab == '2'">
              <div class="mt-2 mb-2">
                <h5>Centerpiece wood</h5>
                <mdb-input type="radio"  id="center-1" name="groupCenterPiece" radioValue="gsx$centerpiecewoodcarving" @input="changePrice($event, 'center')" label="With carving" />
                <mdb-input type="radio" id="center-2" name="groupCenterPiece" radioValue="gsx$centerpiecenocarving" @input="changePrice($event, 'center')" label="Without carving" />
                <mdb-input type="radio" id="center-3" name="groupCenterPiece" radioValue="gsx$centerpieceheadpiecenowoodatallopenviewofroof" @input="changePrice($event, 'center')" label="No centerpiece - open view of roof" />
              </div>
              <div class="mt-2 mb-2">
                <h5>Center pillars carving</h5>
                <mdb-input type="radio"  id="pillars-1" name="groupPillars" radioValue="gsx$centerpillarscarving" @input="changePrice($event, 'pillars')" label="With carving" />
                <mdb-input type="radio" id="pillars-2" name="groupPillars" radioValue="gsx$centerpillarswithoutcarving" @input="changePrice($event, 'pillars')" label="Without carving" />
              </div>
              <div class="mt-2 mb-2">
                <h5>Center pillars base</h5>
                <mdb-input type="radio"  id="base-1" name="groupBase" radioValue="gsx$centerpillarsconcretepillarbase" @input="changePrice($event, 'base')" label="Concrete pillar base" />
                <mdb-input type="radio" id="base-2" name="groupBase" radioValue="gsx$centerpillarswithoutpillarbase" @input="changePrice($event, 'base')" label="Without pillar base" />
              </div>
            </template>
            <template v-if="chosenTab == '3'">
              <ul>Roofs
              <li>Inside roofs<ul>
                <li>Nothing</li>
              <li>Bamboo</li>
              <li>Triplex<ul>
              <li>Thick</li>
              <li>Thin</li>
              <li>Colors</li>
            </ul>
              <li>With or without foil</li>
            </ul>
            </li>
          </ul>
            <h5>Roof tiles</h5>
            <mdb-input type="radio"  id="roofTile-1" name="groupRoofTile" radioValue="gsx$roofceramictile" @input="changePrice($event, 'roofTiles')" label="Ceramic roof tiles" />
            <mdb-input type="radio" id="roofTile-2" name="groupRoofTile" radioValue="gsx$roofpasiratap" @input="changePrice($event, 'roofTiles')" label="Pasir Atap" />

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
          </mdb-card>
        </mdb-modal-body>

        <mdb-modal-footer class="d-flex justify-content-between">
          <mdb-btn outline="info" @click.native="changeModalTab('prev')" v-if="chosenTab != '1'"><mdb-icon icon="angle-double-left"/></mdb-btn>
            <mdb-btn color="secondary" @click.native="modalOptions = false">Close</mdb-btn>
            <mdb-btn color="primary"  @click.native="applyPrice()">Save changes</mdb-btn>
            <mdb-btn outline="info" @click.native="changeModalTab('next')" v-if="chosenTab != '6'"><mdb-icon icon="angle-double-right"/></mdb-btn>
        </mdb-modal-footer>
</mdb-modal>



  </div>
</template>

<script>
import Vue from "vue";
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
      calculated: false,
      modalFaq: false,
      modalOptions: false,
      chosenTab: '',
      priceCalc: {
        basic: null,
      },
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
    ifBasic() {
      let val = ''
      if(this.calculatedPrice  == Number(this.getPrices().gsx$villa.$t.replace(/,/g,""))) {
        val = 'basic'
      } else {
        val = 'custom'
      }
      return val
    },
    calculatedPrice() {
      return _.sum(_.values(this.priceCalc))
    }
  },
   mounted() {
     this.slides = this.getImagesforSlider();
     this.prices = this.getPrices()
     this.priceCalc.basic = Number(this.getPrices().gsx$villa.$t.replace(/,/g,""));
     this.size = this.entity.gsx$readmore.$t;
   },
  methods: {
    getPrices() {
      let price = _.find(this.$store.state.priceList, ['gsx$id.$t', this.entity.gsx$id.$t])
      return price
    },
    resizeImageforSlider: function (val) {
      return Utils.setImageSize(val,'700', '350')
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
    scrollTo(name) {
      var el = this.$el.getElementsByClassName(name)[0];
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
    changePrice(val, name) {
      if(val) {
        Vue.set(this.priceCalc, name, Number(this.prices[val].$t))
      }
    },
    applyPrice() {
      this.modalOptions = false;
      this.calculated = true;
      this.scrollTo('villa')
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
    'modalFaq': function() {
      if(this.modalFaq){
        document.documentElement.style.overflow = 'hidden'
        return
      }
      document.documentElement.style.overflow = 'auto'
    }
},
};
</script>
