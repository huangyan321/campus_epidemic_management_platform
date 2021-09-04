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
    redirect: '/user/student',
    name: 'user',
    meta: {
      title: '用户管理',
      icon: 'el-icon-s-help'
    },
    children: [{
      path: 'student',
      name: 'student',
      component: () => import('@/views/userManage/student/index'),
      meta: {
        title: '学生列表',
        icon: 'table'
      }
    },
  {
    path: 'teacher',
    name: 'teacher',
    component: () => import('@/views/userManage/teacher/index'),
    meta: {
      title: '教师列表',
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
      },
      {
        path: 'setLeave',
        name: 'setLeave',
        component: () => import('@/views/student/leave/index'),
        meta: {
          title: '请假申请',
          icon: 'form'
        }
      },
      {
        path: 'notice',
        name: 'notice',
        component: () => import('@/views/student/notice/index'),
        meta: {
          title: '我的通知',
          icon: 'form'
        }
      }
    ]
  },
  {
    path: '/admin',
    component: Layout,
    redirect: '/admin/getLeave',
    name: 'goodsManage',
    meta: {
      title: '教师管理',
      icon: 'el-icon-s-help'
    },
    children: [{
      path: 'getLeave',
      name: 'getLeave',
      component: () => import('@/views/teacher/leave/index'),
      meta: {
        title: '请假审批',
        icon: 'form'
      }
    },
    {
      path: 'release',
      name: 'release',
      component: () => import('@/views/teacher/notice/index'),
      meta: {
        title: '通知发布',
        icon: 'form'
      }
    }]
  },
  {
    path: '/classManage',
    component: Layout,
    redirect: '/classManage/addClass',
    name: 'report',
    meta: {
      title: '班级管理',
      icon: 'el-icon-s-help'
    },
    children: [{
      path: 'addClass',
      name: 'addClass',
      component: () => import('@/views/addClass'),
      meta: {
        title: '添加班级',
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
