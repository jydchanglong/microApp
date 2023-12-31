import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const findJob = (r) =>
  require.ensure([], () => r(require("@/views/findJob")), "findJob");

const jobDetail = (r) =>
  require.ensure([], () => r(require("@/views/jobDetail")), "jobDetail");

export default new Router({
  mode: "history",
  base: window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL,
  routes: [
    {
      name: "findJob",
      path: "/",
      component: findJob,
    },
    {
      name: "jobDetail",
      path: "/jobDetail",
      component: jobDetail,
    },
  ],
});
