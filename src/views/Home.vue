<template>
  <div class="home">

    <img alt="Vue logo" src="../assets/logo.svg" />
<h2>FAQ</h2>
<FAQ />
  </div>
</template>

<script>
import FAQ from "@/views/faq.vue";

export default {
  name: "Home",
  components: {
    FAQ,
  },
  data() {
    return {
      //entity: this.$store.state.mainList,
    }
  },
  mounted() {
  },
};
</script>
