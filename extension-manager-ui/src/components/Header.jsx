import "./Header.css";
import Logo from "../assets/images/logo.svg";
import IconMoon from "../assets/images/icon-moon.svg";
import IconSun from "../assets/images/icon-sun.svg";

const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={Logo} alt="logo" className="logo" />
        <button type="button" onClick={toggleDarkMode}>
          <img
            src={isDarkMode ? IconSun : IconMoon}
            alt={isDarkMode ? "sun" : "moon"}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
