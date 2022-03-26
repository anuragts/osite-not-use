<template>
  <div class="heading">Hi !,I'm Anurag</div>
  <div class="tagline">
    Creative Developer who brings <br />
    <span class="cd"> ideas to life. </span>
  </div>
  <div class="stack">
    <img class="stk" src="../assets/stack.png" alt="" />
  </div>
  <button class="explr" onclick="location.href = '/';">explore</button>
  <button class="resme" onclick="location.href = '/';">resume</button>
</template>
<style scoped>
.heading {
  margin-top: 10rem;
  font-family: "Maven Pro", sans-serif;
  font-size: 2.2rem;
}
.tagline {
  font-family: "Ubuntu", sans-serif;
  font-size: 3rem;
  margin-top: 1rem;
  font-weight: 900;
}
.cd {
  text-shadow: 0px 2px 20px rgb(0, 183, 255);
}

.stk {
  width: 35rem;
  z-index: -1;
  float: right;
  margin-top: -15rem;
}
.explr {
  color: var(--primary);
  background-color: var(--l);
  margin: 2rem 2rem;
  margin-left: 0;
  padding: 10px 20px;
  font-size: 2.2rem;
  border: 2px solid black;
  border-color: var(--l);
  cursor: pointer;
  font-family: "Courier Prime", monospace;
}
.explr:hover {
    background-color: var(--primary);
    color: var(--l);
}
.resme {
  color: var(--l);
  background-color: var(--primary);
  margin: 2rem 2rem;
  margin-left: 0;
  padding: 10px 20px;
  font-size: 2.2rem;
  border: 2px solid black;
  border-color: var(--l);
  cursor: pointer;
  font-family: "Courier Prime", monospace;
}
.resme:hover {
    background-color: var(--l);
    color: var(--primary);
}
</style>
