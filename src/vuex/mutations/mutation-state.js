import {
  SET_USER_NAME,
  SET_LOGIN_STATE,
  SET_USER_INFO
} from './mutation-type'
export default {
  SET_USER_NAME(state, userName) {
    state.userName = userName
  },
  SET_LOGIN_VALUE(state,login){
    state.login = login = JSON.parse(localStorage.getItem('login'))
  },
  SET_LOGIN_STATE(state, loginFlag) {
    state.loginFlag = loginFlag
  },
}
