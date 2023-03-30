import cookie from 'react-cookies'
import { useRouter } from 'next/router'

function Page()
{
  const router = useRouter()
  
  const login = () =>
  {
    cookie.save('user', "已经登录", {path: '/'})

    // 登录成功跳转
    router.push('/user')
  }


  return (
    <>
      <h1>登录界面</h1>

      <button onClick={login}>请登录</button>
    </>
  )
}

export async function getStaticProps()
{
  return {
    props: {
      UnAuth:true
    }
  }
}

export default Page