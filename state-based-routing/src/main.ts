import { createOvermind } from 'overmind';
import { withOvermind } from 'overmind-vue/vue3';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router' // vue-router 4.x

import App from './App.vue';
import { config } from './overmind';

// these are lazy loaded
import { Home, Page, NestedPage } from './components/'

export const routes = [
	{
		path: '/',
		component: Home,
		props: true
	},
	{
		path: '/404',
		component: { template: '<h1>404</h1>' },
		props: true
	},
	{
		path: '/:page',
		component: Page,
		props: true
	},
	{
		path: '/:page/:id',
		component: NestedPage,
		props: true
	}
]

const router = createRouter({ history: createWebHistory(), routes })

const overmind = createOvermind(config);

createApp(
	withOvermind(overmind, App)
)
.use(router)
.mount("#app")
