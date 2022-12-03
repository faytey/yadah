import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { CampaignContext } from '../contexts/CampaignContext'
import './Hero.css'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

const Hero = () => {
const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()
 

  return (
    <div className="hero">
      <h1>CROWD FUNDING</h1>
      <h3>FOR A JUST CAUSE</h3>
      <h5>JOIN THE TRAIN</h5>
      <Link to="/campaign">
        <Button btnText="EXPLORE" color="white" backgroundColor="brown" onClick={() => connect()} />
      </Link>
    </div>
  )
}

export default Hero
