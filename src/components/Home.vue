<script lang="ts">
import Navbar from "./Navbar.vue";
import Main from "./Main.vue";
import About from "./About.vue";
import Skills from "./Skills.vue";
import Footer from "./Footer.vue";
import Contact from "./Contact.vue";
export default {
  components: {
    Navbar,
    Main,
    About,
    Skills,
    Contact,
    Footer,
  },
};
</script>
<template>
  <section class="home">
    <Navbar />
    <Main />
    <About />
    <Skills />
    <Contact />
    <Footer />
  </section>
</template>
<style scoped></style>
