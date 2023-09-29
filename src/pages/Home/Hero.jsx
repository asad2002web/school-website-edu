import { headSir, demoParson, eEducation, timeNotify, checkList, teacher, Slide1, Slide2, Slide3, Slide4, leftQuote, right } from "../../assets";
const Hero = () => {
  return (
    <section>
    {/* <!-- main  --> */}
    <div className="flex gap-1 hero-layout">
      {/* <!-- 1st  --> */}
      <div className="left-side">
        <div className="shadow quate-card">
          <div>
            <img
              width="150px"
              src={headSir}
              alt="person photo"
            />
          </div>
          <div className="academic-details fs-3">
            <h2 className="fs-1">মোঃ আব্দুল কাদির</h2>
            <h3 className="fs-3">প্রধান শিক্ষক (ভারপ্রাপ্ত)</h3>
          </div>
        </div>
        <div className="eiin-main">
          <div className="eiin-card text-center fs-2">
            <div style={{backgroundColor:"#020085"}}>
              <p>ইআইআইএন</p>
              <p className="fs-3">১১০৬২২</p>
            </div>
            <div style={{backgroundColor:"#ff9a00"}}>
              <p>শিক্ষা প্রতিষ্ঠান কোড</p>
              <p className="fs-3">৮০৭৯</p>
            </div>
            <div style={{backgroundColor:"#020085"}}>
              <p>সেন্টার কোড</p>
              <p className="fs-3">৩৮৩</p>
            </div>
            <div style={{backgroundColor:"#ff9a00"}}>
              <p>প্রতিষ্ঠাকাল</p>
              <p className="fs-3">১৯৪৫</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- 2st  --> */}
      <div className="banner-content">

        <div className="slider banner">
          <div className="slide">
            <img src={Slide1} alt="Photo1" />
          </div>
          <div className="slide">
            <img src={Slide2} />
          </div>
          <div className="slide">
            <img src={Slide3} alt="Photo1" />
          </div>
          <div className="slide">
            <img src={Slide4} alt="Photo3" />
          </div>
          <button className="btn-slide prev">Next</button>
          <button className="btn-slide next">Prev</button>
        </div>
        <div className="grid feature-cards">
          <div className="feature-card">
            <div>
              <p className="feature-icon shadow">
                <img src={eEducation} alt="teachers" />
              </p>
              <p>আমাদের ছাত্র-ছাত্রী</p>
            </div>
          </div>
          <div className="feature-card">
            <div>
              <p className="feature-icon shadow">
                <img src={teacher} alt="teachers" />
              </p>
              <p>শিক্ষকমন্ডলী</p>
            </div>
          </div>
          <div className="feature-card">
            <div>
              <p className="feature-icon shadow">
                <img src={checkList} alt="teachers" />
              </p>
              <p>ফালাফল</p>
            </div>
          </div>
          <div className="feature-card">
            <div>
              <p className="feature-icon shadow">
                <img src={timeNotify} alt="teachers" />
              </p>
              <p>পরিক্ষার সময়সূচী</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- 3st  --> */}
      <div className="right-side">
        <div className="shadow quate-card">
          <div>
            <img width="150px" src={demoParson} alt="person photo" />
          </div>
          <div className="academic-details fs-3">
            <h2 className="fs-1">আল মামুন</h2>
            <h3 className="fs-3">উপজেলা নির্বাহী অফিসার</h3>
            <span>তাড়াইল উপজেলা, কিশোরগঞ্জ</span>
          </div>
        </div>
        <div className="notice">
          <div className="card-heading flex items-center">
            <img src={leftQuote} alt="quote" />
            <p className="fs-3">নোটিশ বোর্ড</p>
          </div>
          <div className="fs-3 notice-board">
            <marquee direction="up" scrollamount="3">
              <p><a className="fs-3" href="notice/notice1.pdf" target="_blank">শ্রেণি কার্যক্রম সম্পর্কে বিজ্ঞপ্তি</a></p>
            <span>০৩ সেপ্টেম্বর, ২০২৩</span>
            <hr />
            <p><a className="fs-3" href="notice/notice2.pdf" target="_blank">নির্বাচনী পরীক্ষার রুটিন ২০২৩</a></p>
            <span>২৮ আগষ্ট, ২০২৩</span>
            <hr />
            <p><a className="fs-3" href="#">৮ম শ্রেণীর শিক্ষার্থীদের জন্য বিজ্ঞপ্তি</a></p>
            <span>৩১ আগষ্ট, ২০২৩</span>
            <hr />
            <p><a className="fs-3" href="#">শ্রেণি কার্যক্রম চলমান সম্পর্কে বিজ্ঞপ্তি</a></p>
            <span>২৩ আগষ্ট, ২০২৩</span>
            <hr />
            <p><a className="fs-3" href="#">ভর্তি সম্পর্কে বিজ্ঞপ্তি</a></p>
            <span>২২ জানুয়ারি, ২০২৩</span>
            <hr />
            </marquee>
          </div>
          <p className="next-btn">
            <a className="flex items-center" href="#">
              <span>আরও </span
              ><img src={right} alt="right arrow" />
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero