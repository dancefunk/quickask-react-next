import cookie from 'react-cookies'
import { useRouter } from 'next/router'

function Page()
{
  const router = useRouter()

  const logout = () => 
  {
    cookie.remove('user')
    router.reload()
  }
  
  return (
    <>
      <h1>会员中心</h1>
      <button onClick={logout}>退出登录</button>
    </>
  )
}

export default Page