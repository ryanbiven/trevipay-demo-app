const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/counter',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/NumberCounter.vue') }],
  },
  {
    path: '/todo',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ToDo.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
