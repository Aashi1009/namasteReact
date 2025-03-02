import { HEADER_IMAGE } from "../utils/constant";

// Header 
export const Header = () => {
    return (
        <div className="header-container">
          <div className="header-logo">
            <img src={HEADER_IMAGE} alt="Food Logo" />
          </div>
          <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
    )
}
export default Header;