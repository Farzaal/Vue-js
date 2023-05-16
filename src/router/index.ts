import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import VueComp from '../views/VueComp.vue'
import CssProperties from '../views/CssProperties.vue'
import Lottie from '../views/Lottie.vue'
import CssModules from '../views/CssModules.vue'
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
    meta: { title: 'Home Page' }
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
    path: "/lottie",
    name: "Lottie",
    component: Lottie,
  },
  {
    path: "/css-modules",
    name: "CssModules",
    component: CssModules
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  const documentTitle = toRoute?.meta && toRoute?.meta?.title ? toRoute?.meta?.title : 'SITE_NAME'
  window.document.title = documentTitle;
  addMetaTag('name="description"', "Site built using locofy")
  next();
})

const addMetaTag = (queryProperty, value) => {
  // Get an element if it exists already
  let element = document.querySelector(`meta[${queryProperty}]`);

  // Check if the element exists
  if (element) {
    // If it does just change the content of the element
    element.setAttribute("content", value);
  } else {
    // It doesn't exist so lets make a HTML element string with the info we want
    element = `<meta ${queryProperty} content="${value}" />`;

    // And insert it into the head
    document.head.insertAdjacentHTML("beforeend", element);
  }
};

export default router;
