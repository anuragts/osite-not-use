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
  margin-top: 2rem;
  float: right;
  margin-top: 5rem;
  z-index: 1;
}
.lap {
  position: absolute;
  z-index: -1;
  margin-top: -8rem;
}
.lg {
  color: var(--l);
  text-shadow: 0px 5px 20px rgb(5, 238, 255);
}
.res {
  color: var(--primary);
  background-color: var(--l);
  margin: 2rem 2rem;
  margin-left: 0;
  padding: 10px 20px;
  font-size: 1.5rem;
  border: 2px solid black;
  border-color: var(--l);
  cursor: pointer;
  font-family: "Courier Prime", monospace;
}
</style>
