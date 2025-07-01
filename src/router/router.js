import { createRouter, createWebHistory } from 'vue-router'
import Monitoring from '@/pages/Monitoring.vue'
import Carousel from '@/pages/Carousel.vue'
import Composition from '@/pages/Composition.vue'

const routes = [
	{
		path: '/:facultyId',
		component: Monitoring,
	},

	{
		path: '/',
		component: Composition,
	},


	{
		path: '/test/:facultyId',
		component: Carousel,
	},

]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
