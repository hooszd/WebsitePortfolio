import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue"

const routes = [{
    path: "/",
    component: Home,
    namw: "Home",
}]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "active",
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth'
            };
        }
        return { x: 0, y: 0};
    },
    routes,
});

export default router;