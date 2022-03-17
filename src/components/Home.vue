<script lang="ts">
import Navbar from './Navbar.vue';
import Main from './Main.vue';
import About from './About.vue';
export default {
  components: {
    Navbar,
    Main,
    About
  }
}
</script>
<template>
<section class="home">
 <Navbar/>
 <Main/>
 <About/>
</section>
</template>
<style scoped>
</style>