import React from 'react'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

// antdUI框架样式引入
import 'antd/dist/reset.css';

// 引入cookie插件
import cookie from 'react-cookies'

//加载封装的API
import '@/services/utils'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()

  // 判断每个路由是否需要登录
  // React.useEffect(() => {
  //   // 需要登录 页面中如果没有UnAuth或者等于false都是需要登录，如果为true就不需要登录
  //   if(!pageProps.UnAuth)
  //   {
  //     let user = cookie.load('user')

  //     if(!user)
  //     {
  //       router.push('/user/login')
  //     }
  //   }
  // })

  return (
    <>
      <Component {...pageProps} />

      <div style={{marginTop:'100px'}}>
        <Link href={'/'}>默认首页</Link><br />
        <Link href={'/demo/antd'}>Antd UI框架</Link><br />
        <Link href={{pathname: '/demo/router', query: {name: 'hello'}}}>路由跳转带参数的</Link><br />
        <Link href={'/demo/api'}>接口请求</Link><br />
        <Link href={'/demo/home'}>页面素材加载</Link><br />

        <h3>逻辑登录</h3>
        <Link href={'/user'}>会员中心 - 判断是否需要登录</Link><br />
        <Link href={'/user/login'}>登录界面</Link><br />
      </div>

    </>
  )
}
