import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"
import VueResource from "vue-resource"
import Goods from "../src/components/goods/goods.vue"
import Evaluate from "../src/components/evaluate/evaluate.vue"
/* eslint-disable no-new */

const C={
	template:"<span>C</span>"
}
Vue.use(VueRouter);
Vue.use(VueResource);
const router = new VueRouter({
	routes: [
		{path:'/goods',component:Goods},
		{path:'/',component:Goods},
		{path:'/evaluate',component:Evaluate},
		{path:'/c',component:C}
	]
})
var app=new Vue({
	router,
	el: '#app',
	components: { App,Goods,Evaluate }
}).$mount("#app")
