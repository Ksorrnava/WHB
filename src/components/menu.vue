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
      <router-link to="/"  tag="mdb-nav-item">
        Home
      </router-link>
      <mdb-nav-item href="#">Pricing</mdb-nav-item>
      <router-link :to="{ name: 'Faq', params: { path: '' } }" tag="mdb-nav-item">
        FAQ
      </router-link>
      <mdb-dropdown tag="li" class="nav-item dropdown">
        <mdb-dropdown-toggle tag="a" navLink color="" slot="toggle" waves-fixed>About</mdb-dropdown-toggle>
        <mdb-dropdown-menu>
          <mdb-dropdown-item>Action</mdb-dropdown-item>
          <mdb-dropdown-item>Another action</mdb-dropdown-item>
          <mdb-dropdown-item>Something else here</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
    </mdb-navbar-nav>
  </mdb-navbar-toggler>
</mdb-navbar>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
  }
};
</script>
