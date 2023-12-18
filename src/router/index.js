import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/components/views/HomeView.vue';
import AboutView from '@/components/views/AboutView.vue';

const routes = [
	{
		path: '/',
		component: HomeView,
	},
	{
		path: '/about',
		component: AboutView,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
