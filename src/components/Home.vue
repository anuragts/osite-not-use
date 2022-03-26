<script>
import Main from "./Main.vue";
import About from "./About.vue";
import Skills from "./Skills.vue";
import Footer from "./Footer.vue";
import Contact from "./Contact.vue";
export default {
  components: {
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
    <Main />
    <About />
    <Skills />
    <Contact />
    <Footer />
  </section>
</template>
<style scoped></style>
