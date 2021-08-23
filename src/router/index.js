import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: "Home",
    component: () => import("@/views/home/Home"),
    meta: {
      footShow: true, // true显示，false隐藏
    }
  },
  {
    path: '/category',
    name: "Category",
    component: () => import("@/views/category/Category"),
    meta: {
      footShow: true, // true显示，false隐藏
    }
  },
  {
    path: '/cart',
    name: "Cart",
    component: () => import("@/views/cart/Cart"),
    meta: {
      footShow: true, // true显示，false隐藏
    }
  },
  {
    path: '/profile',
    name: "Profile",
    component: () => import("@/views/profile/Profile"),
    meta: {
      footShow: true, // true显示，false隐藏
    }
  },
  {
    path: '/detail',
    name:"Detail",
    component: () => import("@/views/detail/Detail"),
    meta: {
      footShow: false, // true显示，false隐藏
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
