import React from 'react';
import { Link } from 'gatsby';
import Logo from "./Home/Logo/Logo";
import './Navbar.scss';
const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
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
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {

    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <Link to="/" title="Logo" className="link__logo">
            <Logo logo={this.props.logo.frontmatter.logo} />
          </Link>
          <div className={`navbar-brand ${this.state.navBarActiveClass}`}>

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
            <div className="navbar-end  has-text-centered">
              <Link activeClassName="active" className="navbar-item" to="/">
                HOME
              </Link>
              <Link activeClassName="active" className="navbar-item" to="/product">
                PRODUCTOS
              </Link>
              <Link activeClassName="active" className="navbar-item" to="/services">
                SERVICIOS
              </Link>
              {/* <Link className="navbar-item" to="/contact">
                Contact
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
