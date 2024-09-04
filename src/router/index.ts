import { createRouter, createWebHashHistory } from 'vue-router';

/** router used by the app */
export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component() {
                return import(/* webpackChunkName: "HomeView" */ '../views/HomeView.vue');
            },
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component() {
                return import(/* webpackChunkName: "AboutView" */ '../views/AboutView.vue');
            },
        },
    ],
});
