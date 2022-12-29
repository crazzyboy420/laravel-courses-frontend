<script setup>
import Header from './components/HeaderSection.vue';
import Footer from './components/FooterSection.vue';
</script>

<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

