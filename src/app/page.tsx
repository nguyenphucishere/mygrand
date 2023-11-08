
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
            <div className="desc">
              Covid 19 positive or Pneumonitis patient will be treated at
              home as per doctor order by GNC certified nursing staff.
            </div>
            <div className="item"><div className="content">Facilities of blood sugar</div></div>
            <div className="item"><div className="content">B.P.  Measurement</div></div>
            <div className="item"><div className="content">Spo2 Measurement</div></div>
            <div className="item"><div className="content">Ryle's tube insertion</div></div>
            <div className="item"><div className="content">Dressing facilities are available 24*7</div></div>
          </div>
        </div>
        <div className="mid"></div>
        <div className="premium">
          <div className="title">
            Gói trả phí
          </div>
          <div className="hr"></div>
          <div className="content">
            <div className="desc">
              Covid 19 positive or Pneumonitis patient will be treated at
              home as per doctor order by GNC certified nursing staff.
            </div>
            <div className="item"><div className="content">Facilities of blood sugar</div></div>
            <div className="item"><div className="content">B.P.  Measurement</div></div>
            <div className="item"><div className="content">Spo2 Measurement</div></div>
            <div className="item"><div className="content">Ryle's tube insertion</div></div>
            <div className="item"><div className="content">Dressing facilities are available 24*7</div></div>
          </div>
          <div className="proceed-btn">
            <div className="content">
              Contact us
            </div>
          </div>
        </div>
      </div>

      <div className="community">
        <div className="title">Cộng đồng của chúng tôi</div>
        <div className="hr"></div>
        <div className="desc-title">
          Protect yourself and others around you by knowing the facts and taking appropriate precautions. Floow advice provided by your local health authority.
        </div>

        <div className="card-section">

          <div className="card">
            <div className="img">
              <img src="/amico_1.png" />
            </div>
            <div className="card-title">
              Facebook
            </div>
            <div className="desc">
              Masks can help prevent the spread of the virus from the person wearing the mask to others.
            </div>
          </div>

          <div className="card">
            <div className="img">
              <img src="/amico_2.png" />
            </div>
            <div className="card-title">
              Hội người già
            </div>
            <div className="desc">
              Clean your hands with soop and water, or alcohol-based hand sanitizer.
            </div>
          </div>

          <div className="card">
            <div className="img">
              <img src="/amico_3.png" />
            </div>
            <div className="card-title">
              Bệnh viện
            </div>
            <div className="desc">
              Maintain a safe distance especially from anyone who is coughinf or sneezing.
            </div>
          </div>

        </div>

      </div>


      <div className="contact-us">
        <div className="box">
          <div className="title">Để lại thông tin để chúng tôi liên hệ với bạn</div>
          <div className="hr"></div>
          <div className="desc-title">
            Protect yourself and others around you by knowing the facts and taking appropriate precautions. Floow advice provided by your local health authority.
          </div>
          <div className="img-cover">
            <div className="img"></div>
          </div>
        </div>
      </div>
    </main>
  )
}
