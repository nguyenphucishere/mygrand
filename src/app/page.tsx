
export default function Home() {
  return (
    <main className="home">
      <div className="landing-section">
        <div className="text-container">
          <div className="brand-name">
            My Grand
          </div>
          <div className="title">
            Luôn đồng hành cùng gia đình bạn
          </div>
          <div className="desc">
            Chúng tôi mang đến một trải nghiệm tiện lợi cho bạn và người thân của bạn thông qua ứng dụng điều khiển điện thoại bằng giọng nói, cùng với nhiều tính năng mới lạ.
          </div>

          <div className="action-buttons">
            <button className="btn bg-[#198754] text-white hover:bg-[#157347] px-6 py-3 rounded-full uppercase">
              Trải nghiệm ngay
            </button>
          </div>

        </div>
        <div className="image">

        </div>
      </div>
      <div className="premium-banner">
        <div className="content">
          Gói Premium với nhiều <br /> tính năng mới <br />
          <pre className="ms-[70%]">#banner</pre>

        </div>
      </div>

      <div className="premium-detail">
        <div className="non-premium">
          <div className="title">
            Gói miễn phí
          </div>
          <div className="hr"></div>
          <div className="content">

          </div>
        </div>
        <div className="mid"></div>
        <div className="premium">
          <div className="title">
            Gói trả phí
          </div>
          <div className="hr"></div>
          <div className="content">

          </div>
        </div>
      </div>
    </main>
  )
}
