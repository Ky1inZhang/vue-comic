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
    path: '*',
    redirect: {
      name: 'Home'
    }
  }
]
