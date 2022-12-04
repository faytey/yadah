import './Button.css'

const Button = ({ btnText, color }) => {
  return (
    <button className="button" style={{ color }}>
      {btnText}
    </button>
  )
}

export default Button
