import './Header.css';
import headerLogo from '../../assets/Logo.png';
import headerBurger from '../../assets/Icon-Burger-menu.png';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <img src={headerLogo} alt="Logo" />
          </div>
          <div className="header__burger">
            <img src={headerBurger} alt="Burger-menu" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;