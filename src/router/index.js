import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Project from "../components/Project.vue";
import NotFound from "../components/NotFound.vue";
import MoreSkills from "../components/MoreSkills.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/projects",
      name: "projects",
      component: Project,
    },
    {
      path: "/skills",
      name: "skills",
      component: MoreSkills,
    },
    { path: "/:catchAll(.*)", 
      name: "NotFound", 
      component: NotFound 
    },
  ],
});

export default router;
