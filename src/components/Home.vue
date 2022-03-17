<script lang="ts">
import Navbar from './Navbar.vue';
import Main from './Main.vue';
export default {
  components: {
    Navbar,
    Main
  }
}
</script>
<template>
<section class="home">
 <Navbar/>
 <Main/>
</section>
</template>
<style scoped>
</style>