import { Logo } from "../../assets"
const Navbar = () => {
  return (
    <header>
    <nav class="flex items-center">
      <div class="logo-name flex items-center">
        <div class="logo">
          <a href="/"
            ><img src={Logo} alt="header-logo"
          /></a>
        </div>
        <div class="name">
          <h1 class="fs-1">তাড়াইল সরকারি পাইলট মডেল উচ্চ বিদ্যালয়</h1>
          <p>তাড়াইল, কিশোরগঞ্জ।</p>
        </div>
      </div>
      <div class="eiin-number">
        <p>স্থাপিতঃ ১৯৪৫</p>
        <p>ইআইআইএন: ১১০৬২২</p>
      </div>
    </nav>
    <section class="latest-bg">
      <div class="latest flex items-center fs-3">
        <p class="latest-news">ঘোষণা</p>
        <marquee behavior="" direction=""
          >প্রিয় শিক্ষার্থীগণ, স্বাগতম আপনাদের স্কুল ওয়েবসাইটে। আমরা
          সংগঠিতভাবে শিক্ষার্থীদের জন্য একটি শিক্ষামূলক পরিবেশ সৃষ্টি করতে
          প্রতিশ্রুতি দিয়েছি। ধন্যবাদ।</marquee
        >
      </div>
    </section>
    <div class="toggle-btn">
      <button class="button-collaps">
        <img src="images/icon/menu.png" alt="" />
      </button>
      <div class="eiin-number-mobile">
        <p>স্থাপিতঃ ১৯৪৫</p>
        <p>ইআইআইএন: ১১০৬২২</p>
      </div>
      <div class="logo">
        <a href="#"><img src="images/logo/Logo.png" alt="header-logo" /></a>
      </div>
    </div>
    <div class="menu-item menu">
      <div class="">
        <ul>
          <li><a class="active" href="/">মূলপাতা</a></li>
          <li><a href="about.html">আমাদের সম্পর্কে</a></li>
          <li><a href="about.html">একাডেমিক</a></li>
          <li><a href="about.html">ভর্তি তথ্য</a></li>
          <li><a href="about.html">ছাত্র-ছাত্রী</a></li>
          <li><a href="about.html">সুযোগ সুবিধা</a></li>
          <li><a href="about.html">ফলাফল</a></li>
          <li><a href="about.html">অন্যান্য</a></li>
          <li><a href="about.html">যোগাযোগ</a></li>
        </ul>
      </div>
    </div>
  </header>
  )
}

export default Navbar