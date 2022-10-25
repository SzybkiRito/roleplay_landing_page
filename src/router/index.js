import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "../components/LandingPage.vue";

const routes = [
	{
		path: "/",
		name: "LandingPage",
		component: LandingPage,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
