<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="@/assets/logo.png" alt="Institut Teknologi Kalimantan">
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item href="/about">About</b-navbar-item>
      <b-navbar-item href="/berita">Berita</b-navbar-item>
      <b-navbar-dropdown label="Jurusan">
        <b-navbar-item href="#">JMTI</b-navbar-item>
        <b-navbar-item href="#">JTIP</b-navbar-item>
        <b-navbar-item href="#">JTSP</b-navbar-item>
        <b-navbar-item href="#">JIKL</b-navbar-item>
        <b-navbar-item href="#">JSTPK</b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>