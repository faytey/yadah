import React from 'react'
import './Campaign.css'
import Campaigns from './Campaigns/Campaigns'
import Header from '../Header/Header'
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi'

const Campaign = () => {
  const { address, connector, isConnected } = useAccount()
  const { data: ensAvatar } = useEnsAvatar({ address })
  const { data: ensName } = useEnsName({ address })
  const {
    connect,
    connectors,
    error,
    isLoading,
    pendingConnector,
  } = useConnect()
  const { disconnect } = useDisconnect()

  if (isConnected) {
    return (
      <div>
        <Header />
        <div className="connected">
          <img src={ensAvatar} alt="ENS Avatar" />
          <div>{ensName ? `${ensName} (${address})` : address}</div>
          <div>Connected to {connector.name}</div>
          <button onClick={disconnect}>Disconnect</button>
        </div>
        <div className="campaign">
          <Campaigns
            url="/createcampaign"
            text="DO YOU HAVE A PROJECT THAT NEEDS FUNDING"
            btnText="Create Crowd Funding"
            backgroundColor="brown"
            color="white"
          />
          <Campaigns
            url="/allcampaign"
            text="CHECK OUR LIST OF CAMPAIGNS TO FUND"
            btnText="View available Crowd Funding"
            backgroundColor="brown"
            color="white"
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <div className="connectors">
        <h6>Choose your preferred wallet connector</h6>
        {connectors.map((connector) => (
          <button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            {connector.name}
            {!connector.ready && ' (unsupported)'}
            {isLoading &&
              connector.id === pendingConnector?.id &&
              ' (connecting)'}
          </button>
        ))}

        {error && <div>{error.message}</div>}
      </div>
    </div>
  )
}
export default Campaign
