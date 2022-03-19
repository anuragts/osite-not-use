<template>
<div class="navbar">
  <ul>
    <li class="start"><a  class="active" href="/">anuragdev</a></li>
    <li><a href="/" class="end">contact</a></li>
    <li><a href="/projects">projects</a></li>
    <li><a  href="#skills">skills</a></li>
    <li><a href="#about">about</a></li>
  </ul></div>
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
.active{
  padding-left: 0;
}

li a {
  display: block;
  color: var(--secondary);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-family: "Mulish", sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
}
a:hover{
  text-shadow: 0px 2px 10px rgb(0, 183, 255);                              

}
.active:hover{
  text-shadow: none;
}
</style>
