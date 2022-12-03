import About from '../About/About'
import Campaign from '../Campaign/Campaign'
import CreateCampaign from '../Campaign/CreateCampaign/CreateCampaign'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import './Homepage.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { CampaignContext } from '../contexts/CampaignContext'
import React from 'react'

function Homepage() {
  const [campaign, setCampaign] = React.useState('')
  const [reasons, setReasons] = React.useState('')
  const [funding, setFunding] = React.useState('')

  const [submitted, setSubmitted] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [allCampaigns, setCampaigns] = React.useState([])

  return (
    <CampaignContext.Provider
      value={{
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
        allCampaigns,
        setCampaigns,
      }}
    >
      <div className="homePage">
        <Header />
        <Hero />
        {/* <About /> */}
        {/* <Contact /> */}
        <Footer />
      </div>
    </CampaignContext.Provider>
  )
}

export default Homepage
