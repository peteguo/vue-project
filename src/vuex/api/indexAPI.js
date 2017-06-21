import http from 'assets/lib/https'
/**
 * 首页地图
 * @param cityId 城市编号
 */
export const _cityMapList = (cityId) => {
  return http.get('/service/home/indexMap?'+cityId)
};
/**
 * 警告
 * @param username 城市编号
 */
export const _alarm = ({ username }) => {
  return http.post('service/alarm/AlarmInformation',{username})
}

