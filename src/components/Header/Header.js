import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <Link to="/">
          <div className="logo">YADAH</div>
        </Link>
        <div className="navItems">
          <Link to="/campaign">
            <div id="connect">CONNECT</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
