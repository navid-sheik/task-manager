import PropTypes from 'prop-types'

const Button =  ({color, text, onClick}) => {
    return(
        <button 
            style = { {backgroundColor : color, color : 'white'}}
            onClick =  {onClick}
            className = 'btn'
        >
            {text}


        </button>
    )
}



Button.defaultProps =  {
    color :  "white"
}
Button.propTypes = {
    text : PropTypes.string,
    onClick : PropTypes.func,
    color : PropTypes.string,

}

export default Button