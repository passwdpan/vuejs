import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '../components/home/AppIndex'
import Login from '../components/Login'
import Home from '../components/Home'
import LibraryIndex from '../components/library/LibraryIndex'
import AdminIndex from '../components/admin/AdminIndex'

import JotterIndex from '../components/jotter/JotterIndex'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
          meta: {
            requireAuth: true
          }
        },
		{
		  path: '/admin',
		  name: 'Admin',
		  component: AdminIndex,
		  meta: {
		    requireAuth: true
		  }
		},
		{
		  path: '/jotter',
		  name: 'Jotter',
		  component: JotterIndex,
		  meta: {
		    requireAuth: true
		  }
		}
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

