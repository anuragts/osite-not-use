<template>
  <div class="navbar">
    <ul>
      <li class="start">
        <router-link class="active" to="/">anuragdev</router-link>
      </li>
      <li><router-link to="/" class="r-link">contact</router-link></li>
      <li><router-link to="/projects" class="r-link">projects</router-link></li>
      <li><a href="#skills" class="r-link">skills</a></li>
      <li><a href="#about" class="r-link">about</a></li>
    </ul>
  </div>
</template>
<style scoped>
/* .navbar{
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
  } */
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: right;
}
/* .end{
  margin-right:5rem ;
} */
.start {
  float: left;
}
.active {
  padding-left: 0;
}
li .active {
  display: block;
  color: var(--secondary);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-family: "Mulish", sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
}
.active:hover {
  display: block;
  color: var(--secondary);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-family: "Mulish", sans-serif;
  font-size: 1.4rem;
  text-shadow: none;

  font-weight: 600;
}
li .r-link {
  display: block;
  color: var(--secondary);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-family: "Mulish", sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
}
.r-link:hover {
  text-shadow: 0px 2px 10px rgb(0, 183, 255);
}
</style>
