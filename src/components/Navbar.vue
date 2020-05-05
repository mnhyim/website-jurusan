<template>
  <b-navbar fixed-top 	>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="@/assets/logo.png" alt="Institut Teknologi Kalimantan">
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="router-link" :to="{ path: '/about' }">About</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/berita' }">Berita</b-navbar-item>
      <b-navbar-dropdown label="Jurusan" collapsible>
        <b-navbar-item tag="router-link" :to="{ path: '/jurusan/jmti' }">JMTI</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/jurusan/jtip' }">JTIP</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/jurusan/jtsp' }">JTSP</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/jurusan/jikl' }">JIKL</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/jurusan/jstpk' }">JSTPK</b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>