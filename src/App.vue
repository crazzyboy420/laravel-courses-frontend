<script setup>
import Header from './components/Header.vue';
import Footer from  './components/Footer.vue';
import HomePage from  './views/Home.vue';
import Courses from  './views/Courses.vue';
import SinglePage from './views/Single.vue';
</script>

<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

