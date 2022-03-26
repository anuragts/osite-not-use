<template>
  <section class="about" id="about">
    <h1 class="title">a bit about me ..</h1>
    <img class="lap" src="../assets/lap.png" alt="" />
    <p class="text">
      I am <span class="lg"> self taught developer </span> with a passion for
      creating <br />
      beautiful and functional websites. I have a keen eye for <br />
      detail and a strong desire to learn new technologies. <br />
      I am currently looking for a position as a
      <span class="lg"> full-stack developer.</span> <br>

      <!-- <button class="res"> 
          Resides in India
      </button> -->
    </p>
  </section>
</template>
<style scoped>
.about {
  margin-top: 20rem;
}
.title {
  font-family: "Maven Pro", sans-serif;
  font-size: 3rem;
  text-align: center;
}
.text {
  line-height: 4rem;
  font-family: "Ubuntu", sans-serif;
  font-size: 2rem;
  /* text-align: center; */
  float: right;
  margin-top: 5rem;

}
.lap {
  /* margin-top: 4rem; */
  width: 30rem;
}
.lg {
  color: var(--l);
  text-shadow: 0px 5px 20px rgb(5, 238, 255);
}

</style>
