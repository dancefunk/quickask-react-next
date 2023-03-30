function Page()
{
  return (
    <>
      <link rel="stylesheet" href="/assets/css/style.css" />

      <div className="footerBox">
        <div className="footer">
          <ul>
            <li className="on">
              <a href="#">
                <img src="/assets/images/f01.png" />
                <p>首页</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/assets/images/f2.png" />
                <p>分类</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/assets/images/f3.png" />
                <p>购物车</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/assets/images/f4.png" />
                <p>我的</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Page