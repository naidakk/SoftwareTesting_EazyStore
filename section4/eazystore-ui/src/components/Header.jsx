import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faTags } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="link">
          <FontAwesomeIcon icon={faTags} className="fa-icon" />
          <span className="brand-title">Eazy Stickers</span>
        </a>
        <nav className="eazynav">
          <ul>
            <li>
              <a href="/" className="navLink">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="navLink">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="navLink">
                Contact
              </a>
            </li>
            <li>
              <a href="/login" className="navLink">
                Login
              </a>
            </li>
            <li>
              <a href="/cart" className="navLink">
                <FontAwesomeIcon icon={faShoppingBasket} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// export default Header;
