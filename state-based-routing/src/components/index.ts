// lazy load route components
const Home = () => import('./Home.vue')
const Page = () => import('./Page.vue')
const NestedPage = () => import('./NestedPage.vue')

export {
	Home, Page, NestedPage
}