import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const originalPush = Router.prototype.push;

Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

export const routes = [];

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/Home')
        }
    ],
    //   to, from, savedPosition
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        };
    }
});
