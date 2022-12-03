import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import AllCampaigns from './components/Campaign/AllCampaigns/AllCampaigns'
import Campaign from './components/Campaign/Campaign'
import CreateCampaign from './components/Campaign/CreateCampaign/CreateCampaign'
import Homepage from './components/Homepage/Homepage'
import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'
 
const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
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
