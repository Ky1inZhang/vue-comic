import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  // },
  // {
  //   path: '/argu/:name',
  //   component: () => import('@/views/argu.vue'),
  //   props: true
  // },
  {
    path: '/p/:comicId',
    component: () => import('@/views/Comic.vue'),
    props: true
  },
  {
    // path: '/p/:comicId/:detailId',
    path: '/p/:comicId/:detailId/:index',
    component: () => import('@/views/Detail.vue'),
    props: true
  },
  {
    path: '*',
    redirect: {
      name: 'Home'
    }
  }
]
