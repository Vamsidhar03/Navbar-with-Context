// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return isDarkTheme ? (
          <div className="home-container-dark">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              alt="about"
              className="home-dark"
            />
            <h1 className="dark-text">About</h1>
          </div>
        ) : (
          <div className="home-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              alt="about"
              className="home-light"
            />
            <h1 className="light-text">About</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default About
