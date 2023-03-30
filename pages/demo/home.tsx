import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('@/components/footer'))

function Page()
{
  return (
    <>
      <link rel="stylesheet" href="/assets/css/style.css" />

      <div className="lqgwBox">
        <div className="titbox">先领券/再购物</div>
        <div className="img"><img src="/assets/images/1.jpg" /></div>
        <ul>
          <li><a href="list.html"><img src="/assets/images/icon_1.png" /><p>桌子</p></a></li>
          <li><a href="list.html"><img src="/assets/images/icon_2.png" /><p>椅子</p></a></li>
          <li><a href="list.html"><img src="/assets/images/icon_3.png" /><p>抽屉</p></a></li>
          <li><a href="list.html"><img src="/assets/images/icon_4.png" /><p>沙发</p></a></li>
          <li><a href="list.html"><img src="/assets/images/icon_5.png" /><p>灯饰</p></a></li>
          <li><a href="list.html"><img src="/assets/images/icon_6.png" /><p>柜子</p></a></li>
          <li><a href="list.html"><img src="/assets/images/icon_7.png" /><p>电视柜</p></a></li>
          <li><a href="list.html"><img src="/assets/images/icon_8.png" /><p>床</p></a></li>
        </ul>
      </div>

      <Footer />
    </>
  )
}

export default Page