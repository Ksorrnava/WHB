<template>
  <mdb-card>
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg" alt="Card image cap"></mdb-card-image>
            <mdb-card-body>
              <mdb-card-title>{{faqData.gsx$morefaqtopics.$t}}</mdb-card-title>
              <mdb-card-text>  {{faqData.gsx$intromaintext.$t| truncate(150, '...')}}</mdb-card-text>
              <router-link :to="{name: 'nodeFaq', params: { path: faqData.gsx$readmore.$t} }">
                <mdb-btn color="primary">Read more</mdb-btn>
              </router-link>
            </mdb-card-body>
          </mdb-card>
</template>

<script>
export default {
  name: "faqItem",
  props: {
    faqData: {
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
};
</script>
