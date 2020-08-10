import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="py-12"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className='flex items-center justify-between py-6'>
          <div className="navbar-start">
            <Link
              to="/"
              className="text-background-primary-color text-2xl"
              title="Logo"
            >
              Hotely
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="">
              <Link className="navbar-item" to="/about">
                Home
              </Link>
              <Link className="navbar-item" to="/products">
                Find Hotel
              </Link>
              <Link className="navbar-item" to="/about">
                About Us
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact Us
              </Link>
              <Link className="navbar-item login" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
