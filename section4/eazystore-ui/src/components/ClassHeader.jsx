import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faTags } from "@fortawesome/free-solid-svg-icons";

class ClassHeader extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <a href="/" className="link">
            <FontAwesomeIcon icon={faTags} className="fa-icon" />
            <span className="brand-title">Eazy Stickers</span>
          </a>
          <nav className="nav">
            <ul>
              <li>
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="nav-link">
                  Contact
                </a>
              </li>
              <li>
                <a href="/login" className="nav-link">
                  Login
                </a>
              </li>
              <li>
                <a href="/cart" className="nav-link">
                  <FontAwesomeIcon icon={faShoppingBasket} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default ClassHeader;
