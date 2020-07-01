<template>
  <div class="main-menu">
    <mdb-navbar color="info-color-dark" dark position="top">
  <mdb-navbar-brand><router-link
        to="/" >
        <img src="../assets/logo.svg" height="30" alt="WoodHouseBali">
      </router-link>
  </mdb-navbar-brand>
  <mdb-navbar-toggler>
    <mdb-navbar-nav>
      <router-link :to="{ name: 'Villas', params: { path: '' } }" tag="mdb-nav-item">
        All villas
      </router-link>
      <mdb-nav-item href="#"></mdb-nav-item>
      <router-link :to="{ name: 'Faq', params: { path: '' } }" tag="mdb-nav-item">
        FAQ
      </router-link>
      <mdb-dropdown tag="li" class="nav-item dropdown">
        <mdb-dropdown-toggle tag="a" navLink color="" slot="toggle" waves-fixed>About</mdb-dropdown-toggle>
        <mdb-dropdown-menu>
          <router-link :to="{ name: 'Home' }" tag="mdb-dropdown-item">
            Contacts
          </router-link>
          <router-link :to="{ name: 'Home' }" tag="mdb-dropdown-item">
            About
          </router-link>
          <router-link :to="{ name: 'Home' }" tag="mdb-dropdown-item">
            Whatever else it could be
          </router-link>
        </mdb-dropdown-menu>
      </mdb-dropdown>
    </mdb-navbar-nav>
    <mdb-navbar-nav right>
          <mdb-form-inline class="ml-auto">
            <input  v-model="searchWord" class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              <mdb-btn size="sm" @click="rerouteSearch()" class="mr-auto" outline="white">Search</mdb-btn>

          </mdb-form-inline>
        </mdb-navbar-nav>
  </mdb-navbar-toggler>
</mdb-navbar>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
  },
  data() {
    return {
      searchWord: '',
    }
  },
  methods: {
    rerouteSearch() {
    this.$router.push({ name: 'Search', query: { key: this.searchWord}, params: {searchWord: this.searchWord} });
    }
  }
};
</script>
