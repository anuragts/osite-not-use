<template>
  <section class="skills" id="skills">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/charts.css/dist/charts.min.css"
    />

    <h1 class="title">my skills ..</h1>
    <table
      id="animations-example-2"
      class="
        charts-css
        bar
        hide-data
        show-labels
        data-spacing-5
        show-primary-axis
      "
    >
      <body>
        <tr>
          <th scope="row" class="name">Python</th>
          <td style="--size: calc(100 / 100)">
            <span class="data"> 100 </span>
          </td>
        </tr>
        <tr>
          <th scope="row">Javascript</th>
          <td style="--size: calc(70 / 100)">
            <span class="data"> 70 </span>
          </td>
        </tr>
        <tr>
          <th scope="row">React</th>
          <td style="--size: calc(65 / 100)">
            <span class="data"> 70 </span>
          </td>
        </tr>
        <tr>
          <th scope="row">Vue</th>
          <td style="--size: calc(80 / 100)">
            <span class="data"> 80 </span>
          </td>
        </tr>
        <tr>
          <th scope="row">Express</th>
          <td style="--size: calc(60 / 100)">
            <span class="data"> 60 </span>
          </td>
        </tr>
        <tr>
          <th scope="row">MongoDB</th>
          <td style="--size: calc(50 / 100)">
            <span class="data"> 50 </span>
          </td>
        </tr>
        <tr>
          <th scope="row">MySQL</th>
          <td style="--size: calc(70 / 100)">
            <span class="data"> 70 </span>
          </td>
        </tr>
      </body>
    </table>
    <div class="kmore">
      <button class="more" onclick="location.href = '/skills';">
        and many more..
      </button>
    </div>
  </section>
</template>
<style scoped>
.skills {
  margin-top: 10rem;
  z-index: -3;
}
.title {
  font-family: "Maven Pro", sans-serif;
  font-size: 3rem;
  text-align: center;
}
.bar {
  position: absolute;
  margin: 0;
  float: left;
  font-size: 2rem;
  font-family: "Ubuntu", sans-serif;
}

#animations-example-2 {
  --labels-size: 160px;
  height: 500px;
  max-width: 80vw;
  margin: 0 auto;
}
#animations-example-2 td {
  line-height: 1;
}
#animations-example-2 th {
  animation: spin-labels 3s linear infinite;
}
#animations-example-2 td {
  background-image: linear-gradient(
    45deg,
    #956fd3,
    #e76ec2,
    #08d1d8,
    #0ea8b3,
    #91109c,
    #fd00fd
  );
  background-size: 600%;
  animation: gradient-animation 3s linear infinite alternate;
}
@keyframes gradient-animation {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 100%;
  }
}
.kmore {
  text-align: center;
}
.more {
  /* position: absolute; */
  margin-top: 35rem;
  /* text-align: center; */
  /* left: 50%;
  transform: translateX(-50%); */
  color: var(--l);
  background-color: var(--primary);
  margin-left: 0;
  padding: 10px 40px;
  font-size: 2.2rem;
  border: 2px solid black;
  border-color: var(--l);
  cursor: pointer;
  font-family: "Courier Prime", monospace;
  margin-bottom: 2rem;
}
.more:hover {
  background-color: var(--l);
  color: var(--primary);
}
</style>
