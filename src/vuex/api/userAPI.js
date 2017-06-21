import http from 'assets/lib/https'

/**
 * 用户登录
 * @param { username: this.userName.trim(),//用户名
            password: this.password.trim(),//密码
            code: this.code.trim(),//验证码
            service: `${reqURL}/sso`//回调地址
}*/
export const _login = ({username,password,code}) => {
  return http.post('loginService/login.action',{username,password,code})
}
