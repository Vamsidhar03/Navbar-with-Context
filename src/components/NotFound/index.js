// Write your code here

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const background = isDarkTheme ? 'dark-bg' : 'light-bg'
        const text = isDarkTheme ? 'dark-text-not' : 'light-text-not'
        const textPara = isDarkTheme
          ? 'dark-text-not-para'
          : 'light-text-not-para'
        return (
          <div className={background}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found"
            />
            <h1 className={text}>Lost Your Way?</h1>
            <p className={textPara}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default NotFound
