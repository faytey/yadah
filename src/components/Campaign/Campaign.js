import React from 'react'
import './Campaign.css'
import Campaigns from './Campaigns/Campaigns'
import AllCampaigns from './AllCampaigns/AllCampaigns'
import Header from '../Header/Header'
// import { CampaignContext } from '../contexts/CampaignContext'

const Campaign = () => {
  return (
    <div>
      <Header />
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
        {/* <AllCampaigns /> */}
      </div>
    </div>
  )
}
export default Campaign
