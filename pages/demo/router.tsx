import { useRouter } from 'next/router'


function Page()
{
  const router = useRouter()
  console.log(router)

  return (
    <>
      <h1>获取路由参数 - 控制台打印</h1>

      <button type="button" onClick={() => router.back()}>返回上一个路由</button>
      <button type="button" onClick={() => router.reload()}>重新加载</button>
      <button type="button" onClick={() => router.push('/demo/antd')}>跳转界面</button>
      <button type="button" onClick={() => router.push({pathname:'/demo/antd', query: {name:'hello'}})}>传参跳转</button>
    </>
  )
}

export default Page