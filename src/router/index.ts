import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import VueComp from '../views/VueComp.vue'
import CssProperties from '../views/CssProperties.vue'
import FrameComponent from '../views/FrameComponent.vue'
interface Route {
  path: string;
  name: string;
  component: any;
}

const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/component-vue",
    name: "VueComp",
    component: VueComp,
  },
  {
    path: "/css-properties",
    name: "CssProperties",
    component: CssProperties,
  },
  {
    path: "/portal-drawer",
    name: "FrameComponent",
    component: FrameComponent,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
