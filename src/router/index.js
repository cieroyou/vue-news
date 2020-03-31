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
            components: AskView
        },
        {
            path: '/jobs',
            components: JobsView
        },
        {
            path: 'news',
            components: NewsView
        },
    ]
})


