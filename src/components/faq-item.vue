<template>
  <mdb-card>
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg" alt="Card image cap"></mdb-card-image>
            <mdb-card-body>
              <mdb-card-title>{{faqData.gsx$morefaqtopics.$t}}</mdb-card-title>
              <mdb-card-text>{{faqData.gsx$intromaintext.$t}}</mdb-card-text>
              <mdb-btn color="primary">{{faqData.gsx$readmore.$t}}</mdb-btn>
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
    }
  },
  data() {
    return {
      //entity: this.$store.state.mainList,
    }
  },
};
</script>
