import { teacher } from "../../assets"

const CopyRight = () => {
  return (
    <section class="copyright">
      <div class="flex justify-between items-center">
        <div class="social-link flex items-center">
          <ul>
            <li>
              <a href="https://facebook.com">
                <img src="images/icon/012-facebook.png" alt="facebook" />
              </a>
            </li>

            <li>
              <a href="https://instagram.com">
                <img
                  src="images/icon/013-social-media.png"
                  alt="instragram"
                />
              </a>
            </li>
            <li>
              <a href="https://youtube.com">
                <img src="images/icon/015-social.png" alt="youtube" />
              </a>
            </li>
          </ul>
        </div>
        <div class="copyright-company">
          <p>বাস্তবায়নে</p>
          <a href="https://reflexsoftbd.com/" target="_blank">
            <img
              src={teacher}
              alt="reflex soft ltd"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CopyRight