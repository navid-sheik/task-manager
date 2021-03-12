
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title,something}) => {

    const onClick = () => {
        console.log('CLick')
    }
    return (
        <header>
            <h1 style = {headingStyle}>{title + something}</h1>
            <Button color = 'black'  text = 'Add' onClick = {onClick}  />
            <Button color = 'Green'  text = 'Destroy' onClick = {onClick}  />
            <Button color = 'blue'  text = 'Done' onClick = {onClick}  />
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
