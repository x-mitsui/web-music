import Discover from '../pages/discover'
import Mine from '../pages/mine'
import Friends from '../pages/friends'

const routes = [
  {
    path: '/discover',
    component: Discover,
    exact: true
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/friends',
    component: Friends
  },
  {
    path: '/',
    exact: true,
    component: Discover
  }
  // {
  //   path: '/B',
  //   component: B,
  //   routes: [
  //     {
  //       path: '/B', //代表次级根，注意和前一节一样，这里依然要用"/B"
  //       exact: true,
  //       component: B_basic
  //     },
  //     {
  //       path: '/B/x',
  //       component: X
  //     },
  //     {
  //       path: '/B/y',
  //       component: Y
  //     }
  //   ]
  // },
]
export { routes }
