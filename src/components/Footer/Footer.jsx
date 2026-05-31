import './Footer.css';

import footerImg from '../../assets/Browse-buttom.png';

function Footer() {
  return(
    <footer className="footer">
      <img src={footerImg} alt="Woman wearing Zyro earbuds" className="footer__img" />
    </footer>
  );
}

export default Footer;