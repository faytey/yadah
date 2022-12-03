import React, { useContext } from 'react'
import './AllCampaigns.css'
import Button from '../../Button/Button'
import CreateCampaign from '../CreateCampaign/CreateCampaign'
import { CampaignContext } from '../../contexts/CampaignContext'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { Link } from 'react-router-dom'

const AllCampaigns = ({ backgroundColor, color, btnText }) => {
  const {
    campaign,
    reasons,
    funding,
    allCampaigns,
    submitted,
    error,
    setCampaign,
    setReasons,
    setFunding,
    setSubmitted,
    setError,
    handleCampaign,
    handleReasons,
    handleFunding,
    handleSubmit,
    errorMessage,
    successMessage,
  } = useContext(CampaignContext)

  // let allCampaigns = []

  const campaignsObj = { campaign, reasons, funding }

  // allCampaigns = [campaignsObj, ...allCampaigns]

  console.log(allCampaigns)

  return (
    <div>
      <Header />
      <div className="allCampaigns">
        <h1>List of All Campaigns</h1>
        <div id="allCampaign">
          {/* {allCampaigns.map((campaign, key) => { */}
          {/* return ( */}
          <p>
            {/* {campaign.campaign} {campaign.reasons} {campaign.funding} */}
            <Button btnText="View" color="white" backgroundColor="brown" />
            <Button btnText="Fund" color="white" backgroundColor="brown" />
          </p>
          {/* )})} */}
        </div>
        <Link to="/createcampaign">
          <Button
            btnText="Create Crowd Funding"
            backgroundColor="brown"
            color="white"
          />
        </Link>
      </div>
    </div>
  )
}

export default AllCampaigns
