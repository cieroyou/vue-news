import VueRouter from 'vue-router';
import Vue from 'vue';

import NewsView from '../views/NewsView'
import AskView from '../views/AskView'
import JobsView from '../views/JobsView'

import UserView from '../views/UserView'
import ItemView from '../views/ItemView'

import createListView from '../views/CreateListView'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/ask',
            name: 'ask',
            component: AskView
            // component: createListView('AskView')
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView
            // component: createListView('JobsView')
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView
            // component: createListView('NewsView')
        },
        {
            path: '/user/:id',
            component: UserView
        },
        {
            path: '/item/:id',
            component: ItemView
        },
    ]
})


