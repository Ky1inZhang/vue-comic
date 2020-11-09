import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/s/:keywords',
    component: () => import('@/views/Main.vue'),
    props: true
  },
  {
    path: '/k/:rankName',
    component: () => import('@/views/Main.vue'),
    props: true
  },
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
    path: '/v',
    component: () => import('@/views/Mp4.vue')
  },
  {
    path: '/gf',
    component: () => import('@/views/GF.vue')
  },
  {
    path: '/zujienvyou',
    component: () => import('@/views/zujienvyou.vue')
  },
  {
    path: '*',
    redirect: {
      name: 'Home'
    }
  }
]
