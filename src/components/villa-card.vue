<template>
        <mdb-card class="card-image" v-bind:style="{ 'background-image': 'url(' + resizeImage + ')' }" >
          <div class="text-white text-center d-flex align-items-center rgba-black-light py-5 px-4">
            <div>
              <mdb-card-title tag="h3" class="pt-2"><strong>{{villaData.gsx$morefaqtopics.$t}}</strong></mdb-card-title>
              <p>{{villaData.gsx$intromaintext.$t}}</p>
              <router-link :to="{name: 'nodeVilla', params: { path: villaData.gsx$readmore.$t} }">
                <mdb-btn color="success"><mdb-icon icon="clone left" /> View project</mdb-btn>
              </router-link>

            </div>
          </div>
        </mdb-card>
</template>

<script>
import Utils from './../utils'

export default {
  name: "villaItem",
  props: {
    villaData: {
      type: Object,
      default:  function () {
        return {}
      }
    },
  },
  data() {
    return {
    }
  },
  computed: {
    resizeImage: function () {
      return Utils.setImageSize(this.villaData.gsx$introimage.$t,'350', '245')
    }
  }
};
</script>
