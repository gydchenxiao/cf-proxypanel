const routes = [
  {
    name: 'login',
    path: '/login',
    meta: {
      isLogin: true
    },
    component: () => import('@/views/loginPage.vue')
  },
  {
    name: 'register',
    path: '/register',
    meta: {
      isLogin: true
    },
    component: () => import('@/views/loginPage.vue')
  },
  {
    name: 'forgetpassword',
    path: '/forgetpassword',
    meta: {
      isLogin: true
    },
    component: () => import('@/views/loginPage.vue')
  },
  {
    path: '/',
    component: () => import('@/views/homePage.vue'),
    redirect: 'dashboard',
    children: [
      {
        name: 'ticket',
        path: '/ticket',
        component: () => import('@/views/ticket.vue')
      },
      {
        name: 'profile',
        path: '/profile',
        component: () => import('@/views/profile.vue')
      },
      {
        name: 'node',
        path: '/node',
        component: () => import('@/views/node.vue')
      },
      {
        name: 'knowledge',
        path: '/knowledge',
        component: () => import('@/views/knowledge.vue')
      },
      {
        name: 'dashboard',
        path: '/dashboard',
        component: () => import('@/views/dashboard.vue')
      },
    ]
  }
]

export default routes