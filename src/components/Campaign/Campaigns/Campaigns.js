import './Campaigns.css'
import Button from '../../Button/Button'
import { Link } from 'react-router-dom'

const Campaigns = ({ url, text, btnText, backgroundColor, color }) => {
  return (
    <div className="campaigns">
      <h2>{text}</h2>
      <br />
      <Link to={url}>
        <Button
          btnText={btnText}
          backgroundColor={backgroundColor}
          color={color}
        />
      </Link>
    </div>
  )
}

export default Campaigns
