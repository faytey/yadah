import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import AllCampaigns from './components/Campaign/AllCampaigns/AllCampaigns'
import Campaign from './components/Campaign/Campaign'
import CreateCampaign from './components/Campaign/CreateCampaign/CreateCampaign'
import Homepage from './components/Homepage/Homepage'
import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
} from 'wagmi'
 
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
 
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
 
// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  alchemyProvider({ apiKey: 'yourAlchemyApiKey' }),
  publicProvider(),
])
 
// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})
 

function App() {
  return (
    <div className="App">
      <WagmiConfig client={client}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/campaign">
            <Campaign />
          </Route>

          <Route exact path="/createcampaign">
            <CreateCampaign />
          </Route>

          <Route exact path="/allcampaign">
            <AllCampaigns />
          </Route>
        </Switch>
        </Router>
        </WagmiConfig>
    </div>
  )
}

export default App
