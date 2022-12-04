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
      <h3>DO YOU NEED FUNDING FOR YOUR PROJECT</h3>
      <h5>EXPLORE TO GET FUNDED</h5>
      <Link to="/campaign">
        <Button btnText="EXPLORE" color="white" backgroundColor="brown" />
      </Link>
    </div>
  )
}

export default Hero
