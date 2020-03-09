import Vue from 'vue'
import App from './jia_app.vue'
import router from './router'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
Vue.use(ElementUI) //使用elementUI

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
