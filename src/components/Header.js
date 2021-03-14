
import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'
import Button from './Button'



const Header = ({title,something, onAdd, valueOfShowAdd}) => {

    const onClick = () => {
        console.log('CLick')
    }


    //For removing add in the footer
    //Current path
    const location  = useLocation()
    return (
        <header>
            
            <h1 style = {headingStyle}>{title + something}</h1>
            {location.pathname  === '/'  && (
            <Button color = {valueOfShowAdd ?  'Green'  : 'Black'} text = {valueOfShowAdd ?  'Close'  : 'Add'} onClick = {onAdd}  />
            )}

        </header>

    )
}
Header.defaultProps = {
    title :  "Default Title if nothing is passed to it",
    something :  "Something Default , second paramente"
}


Header.propTypes =  {
    title :  PropTypes.string.isRequired,
    something : PropTypes.string
}

const headingStyle  = {
    color: 'red', 
    backgroundColor :  'blue'
}









export default Header
