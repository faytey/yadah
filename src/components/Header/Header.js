import { Link } from 'react-router-dom'
import './Header.css'
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi'

const Header = () => {
  const { isConnected } = useAccount()
  const { disconnect } = useDisconnect()

  if (isConnected) {
    return (
      <div className="header">
        <div className="nav">
          <Link to="/">
            <div className="logo">YADAH</div>
          </Link>
          <div className="navItems">
            <Link to="/campaign">
              <div id="connect" onClick={disconnect}>
                DISCONNECT
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }

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
