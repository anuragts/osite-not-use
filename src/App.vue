<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
<Navbar/>
  <RouterView />

</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime&family=Maven+Pro&family=Mulish:wght@300&family=Open+Sans&family=Roboto:wght@300&family=Ubuntu:wght@300&display=swap");
:root {
  --primary: #bee2f1;
  --secondary: rgb(71, 85, 105);
  --third: rgb(203, 213, 225);
  --white: rgb(255, 255, 255);
  --l: rgb(28, 181, 241);
}
</style>
