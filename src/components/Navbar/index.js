// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NavBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickLightLogo = () => {
        toggleTheme()
      }
      const onClickDarkLogo = () => {
        toggleTheme()
      }

      return isDarkTheme ? (
        <nav className="nav-container-light">
          <div className="nav-bar-content">
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
              className="light-logo"
            />
            <ul className="tabs-container">
              <Link to="/" className="link-item ">
                <li className="light-item-text">Home</li>
              </Link>
              <Link to="/about" className="link-item ">
                <li className="light-item-text">About</li>
              </Link>
            </ul>

            <button
              data-testid="theme"
              type="button"
              className="light-btn"
              onClick={onClickLightLogo}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
                className="light-logo"
              />
            </button>
          </div>
        </nav>
      ) : (
        <nav className="nav-container">
          <div className="nav-bar-content">
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
              className="dark-logo"
            />
            <ul className="tabs-container">
              <Link to="/" className="link-item ">
                <li className="dark-item-text">Home</li>
              </Link>
              <Link to="/about" className="link-item ">
                <li className="dark-item-text">About</li>
              </Link>
            </ul>

            <button
              type="button"
              className="dark-btn"
              data-testid="theme"
              onClick={onClickDarkLogo}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
                className="dark-logo"
              />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)
export default NavBar
