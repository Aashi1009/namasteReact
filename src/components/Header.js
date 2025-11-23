import { HEADER_IMAGE } from "../utils/constant";
import { useEffect, useState } from "react";
// Header 
export const Header = () => {
  const [loginBtn, setLoginBtn] = useState('Login')
  const [theme, setTheme] = useState('Switch To Dark Mode')
  const [themeClass, setThemeClass] = useState('light-theme')

  useEffect(() => {
    document.body.className = themeClass;
  },[themeClass])

  const HandleClick = () => {
    loginBtn === "Logout" ? setLoginBtn("Login") : setLoginBtn("Logout");
  }
  const HandleTheme = () => {
    theme === "Switch To Dark Mode" ? setTheme("Switch To Light Mode") : setTheme("Switch To Dark Mode")
    setThemeClass(prev => prev === "light-theme" ? "dark-theme" : "light-theme")
  }
  console.log("Header")
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
              <button onClick={HandleClick}>{loginBtn}</button>
              <button onClick={HandleTheme}>{theme}</button>
            </ul>
          </div>
        </div>
    )
}
export default Header;