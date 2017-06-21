import Main from './index'
import mall_index from './mall/index'
import map_list from './mall/map-list/index'
export default [
  {
    path: '/mall',
    component: mall_index,
    name: 'mall_index',
  },
  {
    path: '/mall/list/:id',
    component: map_list,
    name: 'map_list',
  },
]
