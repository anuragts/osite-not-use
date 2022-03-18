<script lang="ts">
import Navbar from './Navbar.vue';
import Main from './Main.vue';
import About from './About.vue';
import Skills from './Skills.vue';
import Footer from './Footer.vue';
export default {
  components: {
    Navbar,
    Main,
    About,
    Skills,
    Footer
  }
}
</script>
<template>
<section class="home">
 <Navbar/>
 <Main/>
 <About/>
 <Skills/>
  <Footer/>
</section>
</template>
<style scoped>
</style>