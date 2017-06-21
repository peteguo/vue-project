import * as UserAPI from './api/userAPI'
import {
  SET_USER_NAME,
  SET_USER_INFO,
  SET_LOGIN_STATE
}
from './mutations/mutation-type'

export default {
  login: ({commit},params) => {
    return UserAPI._login(params).then((data) => {
      const {login, msg_code, success} = data;
      if(success) {
        localStorage.setItem('login',JSON.stringify(login))
        commit(SET_LOGIN_STATE, true)
        commit('SET_LOGIN_VALUE', login)
      }
      return Promise.resolve(data)
    })
  }
}
