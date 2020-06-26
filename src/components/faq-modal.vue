<template>
    <mdb-modal-body>
      <mdb-list-group>
        <mdb-list-group-item v-for="(item, index) in entity" :key="index">
          <div>
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-2 h5">{{item.gsx$morefaqtopics.$t}}</h5>
            </div>
            <p class="mb-2">
              {{item.gsx$intromaintext.$t| truncate(50, '...')}}
            </p>
          </div>
        </mdb-list-group-item>
      </mdb-list-group>
    </mdb-modal-body>
</template>

<script>

export default {
  name: "FAQModal",
  props: {
  },
  data() {
    return {
      entity: this.$store.state.mainList.faq,
    }
  },
  computed: {

  }
};
</script>
