import VueRouter from 'vue-router';
import Vue from 'vue';
import AskView from '../views/AskView'
import JobsView from '../views/JobsView'
import NewsView from '../views/NewsView'
import UserView from '../views/UserView'
import ItemView from '../views/ItemView'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
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
        {
            path: '/user',
            component: UserView
        },
        {
            path: '/item',
            component: ItemView
        },
    ]
})


