import "./Footer.scss";
import Newsletter from './Newsletter/Newsletter'
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <div><Newsletter/>

    <footer className="footer">
      <div className="footer-content">
        {/* HeadColumn1 */}
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            nisi, dignissimos tempora, molestias eaque fugiat nesciunt quis
            maiores laudantium reiciendis placeat voluptatem ab, minima itaque
            possimus cum distinctio ipsam repellendus.
          </div>
        </div>
        {/* HeadColumn2 */}
        <div className="col">
          <div className="title">Contact</div>
          {/* Column1 */}
          <div className="contact-item">
            <FaLocationArrow />
            <div className="text">
              Kayaloram Rd, Punnamada, Kottankulangara, Alappuzha, Kerala,
              688006
            </div>
          </div>

          {/* Column2 */}
          <div className="contact-item">
            <FaMobileAlt />
            <div className="text">Phone: 70XXXXXX30</div>
          </div>

          {/* Column3 */}
          <div className="contact-item">
            <FaEnvelope />
            <div className="text">Email: contactshreyansh19@gmail.com</div>
          </div>
        </div>
        {/* HeadColumn3 */}
        <div className="col">
          <div className="title">Categories</div>

          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatres</span>
          <span className="text">Projectors</span>
        </div>
        {/* HeadColumn4 */}
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">ONE9 2023 CREATED BY SHREYANSH TRIPATHY</div>
        <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
