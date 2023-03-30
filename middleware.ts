import type { NextRequest } from 'next/server'

// 全局中间件
export function middleware(request: NextRequest) 
{
  //当访问到/user的路由的时候，就会进入到这个判断里面
  if (request.nextUrl.pathname.startsWith('/user')) 
  {
    console.log('中间件')
  }
}
