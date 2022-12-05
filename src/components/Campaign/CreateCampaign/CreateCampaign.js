import React, { useContext } from 'react'
import { CampaignContext } from '../../contexts/CampaignContext'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import './CreateCampaign.css'

const CreateCampaign = ({ btnText, backgroundColor, color }) => {
  const {
    campaign,
    reasons,
    funding,
    submitted,
    error,
    setCampaign,
    setReasons,
    setFunding,
    setSubmitted,
    setError,
    setCampaigns,
    // handleCampaign,
    // handleReasons,
    // handleFunding,
    // handleSubmit,
    // errorMessage,
    // successMessage,
  } = useContext(CampaignContext)

  const handleCampaign = (e) => {
    setCampaign(e.target.value)
    setSubmitted(false)
  }

  const handleReasons = (e) => {
    setReasons(e.target.value)
    setSubmitted(false)
  }

  const handleFunding = (e) => {
    setFunding(e.target.value)
    setSubmitted(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!campaign || !reasons || !funding) {
      setError(true)
    } else {
      setSubmitted(true)
      // setCampaigns({ campaign: '', reasons: '', amount: '' })
      setError(false)
    }
  }

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}
      >
        <h4>Please fill all fields</h4>
      </div>
    )
  }

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}
      >
        <h4>Congratulations!! {campaign} was successfully registered</h4>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <div className="createCampaign">
        <h2>Create Your Campaign</h2>

        <div className="message">
          {errorMessage()}
          {successMessage()}
        </div>
        <label htmlFor="campaign">
          Campaign Name: <br />
          <input
            type="text"
            id="campaign"
            placeholder="Enter the Campaign Name"
            onChange={handleCampaign}
            value={campaign}
          />
        </label>
        <label htmlFor="reasons">
          Reasons for Campaign: <br />
          <input
            type="text"
            id="reasons"
            onChange={handleReasons}
            value={reasons}
          />
        </label>
        <label htmlFor="amount">
          Total Funding Needed: <br />
          <input
            type="number"
            id="amount"
            placeholder="Enter Amount Needed"
            onChange={handleFunding}
            value={funding}
          />
        </label>

        <button type="submit" onClick={handleSubmit}>
          CREATE
        </button>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default CreateCampaign
