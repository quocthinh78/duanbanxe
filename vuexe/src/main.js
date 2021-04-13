import Vue from 'vue'
import App from './App.vue'
import { router } from './routes.js'
import "./assets/scss/main.scss"
// import "./assets/js/jquery.slicknav"
// import "./assets/js/bootstrap.min.js"

import "./assets/scss/nice-select.scss";
import "./assets/scss/elegant-icons.scss";
import "./assets/scss/bootstrapmin.scss";
// import "./assets/scss/jquery-ui.min.scss";
import "./assets/scss/font-awesome.min.scss";
import "./assets/scss/owl.carousel.min.scss";
import "./assets/scss/slicknav.min.scss";
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')