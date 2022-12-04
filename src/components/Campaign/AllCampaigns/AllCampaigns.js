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
  } = useContext(CampaignContext);

  console.log(allCampaigns);

  return (
    <div>
      <Header />
      <div className="allCampaigns">
        <h1>List of All Campaigns</h1>
        <div id="allCampaign">
          <table>
            <thead>
              <tr>
                <td>Projects</td>
                <td>Target Amount</td>
                <td colSpan={3}>Wallet Address</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gova</td>
                <td>1000 MATIC</td>
                <td>0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266</td>
                <td>
                  <Button
                    btnText="View"
                    color="white"
                    backgroundColor="brown"
                  />
                </td>
                <td>
                  <Button
                    btnText="Fund"
                    color="white"
                    backgroundColor="brown"
                  />
                </td>
              </tr>
              <tr>
                <td>Fitama</td>
                <td>500 MATIC</td>
                <td>0x70997970C51812dc3A010C7d01b50e0d17dc79C8</td>
                <td>
                  <Button
                    btnText="View"
                    color="white"
                    backgroundColor="brown"
                  />
                </td>
                <td>
                  <Button
                    btnText="Fund"
                    color="white"
                    backgroundColor="brown"
                  />
                </td>
              </tr>
              <tr>
                <td>Colab Trust Fund</td>
                <td>10000 MATIC</td>
                <td>0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC</td>
                <td>
                  <Button
                    btnText="View"
                    color="white"
                    backgroundColor="brown"
                  />
                </td>
                <td>
                  <Button
                    btnText="Fund"
                    color="white"
                    backgroundColor="brown"
                  />
                </td>
              </tr>
              <tr>
                <td>Hi-Tech</td>
                <td>5000 MATIC</td>
                <td>0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65</td>
                <td>
                  <Button
                    btnText="View"
                    color="white"
                    backgroundColor="brown"
                  />
                </td>
                <td>
                  <Button
                    btnText="Fund"
                    color="white"
                    backgroundColor="brown"
                  />
                </td>
              </tr>
            </tbody>
          </table>
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
