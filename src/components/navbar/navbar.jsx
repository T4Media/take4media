import logo from "../../images/logo/t4m_logo.png";
import { NavLink } from "react-router-dom";
// import Slide from "react-reveal/Slide";
import { TiArrowSortedUp } from "react-icons/ti";
import React from "react";
import "./navbar.scss";

const Navbar = () => {
  const [click, setClick] = React.useState(false);

  const [dynamicClass, setDynamicClass] = React.useState(
    "not-services-dropdown"
  );

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  const handleMouseEnter = () => {
    setDynamicClass("services-dropdown");
  };

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav
        className="navbar"
        style={{ zIndex: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img style={{ width: 280 }} src={logo} alt="logo" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                style={{ paddingBottom: 14 }}
                exact
                activeClassName="active"
                className="nav-links"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={() => setDynamicClass("not-services-dropdown")}
              >
                Services
              </a>

              <ul
                className={dynamicClass}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={() => setDynamicClass("not-services-dropdown")}
              >
                <TiArrowSortedUp />
                <NavLink to="/digital-media-marketing">
                  Digital Media Marketing
                </NavLink>
                <hr />
                <NavLink to="/videography">Videography</NavLink>
                <hr />
                <NavLink to="/amazon-creative-services">
                  Amazon Creatives
                </NavLink>
                <hr />
                <NavLink to="/amazon-ams-services">Amazon AMS Services</NavLink>
                <hr />
                <NavLink to="/product-listing">Product Listing</NavLink>
                <hr />
                <NavLink to="/amazon-research">Amazon Research</NavLink>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/work/photography"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Work
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about-us"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item no-hover">
              <NavLink
                exact
                to="/contact-us"
                activeClassName="active"
                className="nav-links contact-link"
                onClick={click ? handleClick : null}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
