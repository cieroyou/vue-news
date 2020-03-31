import VueRouter from 'vue-router';
import Vue from 'vue';
import AskView from '../views/AskView'
import JobsView from '../views/JobsView'
import NewsView from '../views/NewsView'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes:[
        {
            path: '/ask',
            component: AskView
        },
        {
            path: '/jobs',
            component: JobsView
        },
        {
            path: '/news',
            component: NewsView
        },
    ]
})


