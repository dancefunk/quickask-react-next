let handle = async () =>
{
  var result = await $api.login()
  console.log(result)
}

function Page (data:any)
{
  return (
    <>
      <h1>API接口调用</h1>
      <button type="button" onClick={handle}>接口请求</button>
    </>
  )
}

export async function getStaticProps()
{
  return {
    props: {
      demo: 'hello'
    }
  }
}

export default Page