import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <Link to="/">
          <div className="logo">CROWDFUNDZ</div>
        </Link>
        <div className="navItems">
          <div id="about">ABOUT US</div>
          <div id="contact">CONTACT US</div>
        </div>
      </div>
    </div>
  )
}

export default Header
