<template>
  <div class="home">

    <!-- <img alt="Vue logo" src="../assets/logo.svg" /> -->
<AllVillas />
<FAQ />
  </div>
</template>

<script>
import FAQ from "@/views/faq-list.vue";
import AllVillas from "@/views/villa-list.vue";

export default {
  name: "Home",
  components: {
    FAQ,
    AllVillas
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
