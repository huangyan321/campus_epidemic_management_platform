import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: '仪表盘',
        icon: 'dashboard'
      }
    }]
  },

  {
    path: '/user',
    component: Layout,
    redirect: '/user/userlist',
    name: 'user',
    meta: {
      title: '用户管理',
      icon: 'el-icon-s-help'
    },
    children: [{
      path: 'userList',
      name: 'UserList',
      component: () => import('@/views/user/'),
      meta: {
        title: '用户列表',
        icon: 'table'
      }
    }, ]
  },

  {
    path: '/studentManage',
    component: Layout,
    redirect: '/studentManage/setHealth',
    name: 'studentManage',
    meta: {
      title: '学生管理',
      icon: 'el-icon-s-help'
    },
    children: [{
      path: 'setHealth',
      name: 'setHealth',
      component: () => import('@/views/student/healthTable/index'),
      meta: {
        title: '健康报表',
        icon: 'form'
      }
    }, ]
  },
  {
    path: '/goodsManage',
    component: Layout,
    redirect: '/goodsManage/goods',
    name: 'goodsManage',
    meta: {
      title: '商品管理',
      icon: 'el-icon-s-help'
    },
    children: [{
        path: 'goods',
        name: 'Goods',
        component: () => import('@/views/goodsManage/goods'),
        meta: {
          title: '商品列表',
          icon: 'form'
        }
      },
      {
        path: 'params',
        name: 'Params',
        component: () => import('@/views/goodsManage/params'),
        meta: {
          title: '分类参数',
          icon: 'form'
        }
      },
      {
        path: 'categories',
        name: 'Categories',
        component: () => import('@/views/goodsManage/categories'),
        meta: {
          title: '商品分类',
          icon: 'form'
        }
      }
    ]
  },
  {
    path: '/goods',
    component: Layout,
    redirect: '/goods/add',
    name: 'goods',
    children: [{
      path: 'add',
      name: 'add',
      component: () => import('@/views/goodsManage/goods/addGoods/Add'),
    }]
  },
  {
    path: '/orderManage',
    component: Layout,
    redirect: '/orderManage/orderList',
    name: 'goodsManage',
    meta: {
      title: '订单管理',
      icon: 'el-icon-s-help'
    },
    children: [{
      path: 'orderList',
      name: 'OrderList',
      component: () => import('@/views/orderManage/orderList'),
      meta: {
        title: '订单列表',
        icon: 'form'
      }
    }, ]
  },
  {
    path: '/reports',
    component: Layout,
    redirect: '/reports/report',
    name: 'report',
    meta: {
      title: '数据报表',
      icon: 'el-icon-s-help'
    },
    children: [{
      path: 'report',
      name: 'report',
      component: () => import('@/views/report'),
      meta: {
        title: '数据报表',
        icon: 'form'
      }
    }, ]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [{
      path: 'http://shop.hgyn23.cn/',
      meta: {
        title: '外部链接',
        icon: 'link'
      }
    }]
  },

  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
