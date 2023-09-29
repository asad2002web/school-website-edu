import { useEffect } from "react";
import { Logo, menu } from "../../assets"
import { Link } from "react-router-dom";
const Navbar = () => {

  useEffect(() => {
    const collapsBtn = document.querySelector(".button-collaps");
    const menu = document.querySelector('.menu');

    const toggleMenu = () => {
      if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
      } else {
        menu.style.display = 'none';
      }
    };

    collapsBtn.addEventListener("click", toggleMenu);

    // Cleanup event listener on component unmount
    return () => {
      collapsBtn.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <header>
    <nav className="flex items-center">
      <div className="logo-name flex items-center">
        <div className="logo">
          <Link to="/"
            ><img src={Logo} alt="header-logo"
          /></Link>
        </div>
        <div className="name">
          <h1 className="fs-1">তাড়াইল সরকারি পাইলট মডেল উচ্চ বিদ্যালয়</h1>
          <p>তাড়াইল, কিশোরগঞ্জ।</p>
        </div>
      </div>
      <div className="eiin-number">
        <p>স্থাপিতঃ ১৯৪৫</p>
        <p>ইআইআইএন: ১১০৬২২</p>
      </div>
    </nav>
    <section className="latest-bg">
      <div className="latest flex items-center fs-3">
        <p className="latest-news">ঘোষণা</p>
        <marquee behavior="" direction=""
          >প্রিয় শিক্ষার্থীগণ, স্বাগতম আপনাদের স্কুল ওয়েবসাইটে। আমরা
          সংগঠিতভাবে শিক্ষার্থীদের জন্য একটি শিক্ষামূলক পরিবেশ সৃষ্টি করতে
          প্রতিশ্রুতি দিয়েছি। ধন্যবাদ।</marquee
        >
      </div>
    </section>
    <div className="toggle-btn">
      <button className="button-collaps">
        <img src={menu} alt="menu" />
      </button>
      <div className="eiin-number-mobile">
        <p>স্থাপিতঃ ১৯৪৫</p>
        <p>ইআইআইএন: ১১০৬২২</p>
      </div>
      <div className="logo">
        <a href="#"><img src={Logo} alt="header-logo" /></a>
      </div>
    </div>
    <div className="menu-item menu">
      <div>
        <ul>
          <li><Link className="active" to="/">মূলপাতা</Link></li>
          <li><Link to="about">আমাদের সম্পর্কে</Link></li>
          <li><Link to="academic">একাডেমিক</Link></li>
          <li><Link to="admission">ভর্তি তথ্য</Link></li>
          <li><Link to="students">ছাত্র-ছাত্রী</Link></li>
          <li><Link to="opportunities">সুযোগ সুবিধা</Link></li>
          <li><Link to="results">ফলাফল</Link></li>
          <li><Link to="others">অন্যান্য</Link></li>
          <li><Link to="contact">যোগাযোগ</Link></li>
        </ul>
      </div>
    </div>
  </header>
  )
}

export default Navbar