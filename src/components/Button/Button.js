import './Button.css';

const Button = ({backgroundColor,btnText,color}) => {
return(
    <button className="button" style={{backgroundColor, color}}>
        {btnText}
    </button>
)
}

export default Button;