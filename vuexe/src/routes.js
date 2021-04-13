import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"

Vue.use(VueRouter)
export const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '',
        name: '',
        components: {
            header: Header,
            footer: Footer
        }

    }]
})