import VueRouter from 'vue-router';
import Vue from 'vue';

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
            component: createListView('AskView')
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListView('JobsView')
        },
        {
            path: '/news',
            name: 'news',
            component: createListView('NewsView')
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


