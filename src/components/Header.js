
import PropTypes from 'prop-types'
const Header = (props) => {
  return (
    <header>
    <h1>Hello {props.name} </h1>
    </header>
  )
}
Header.propTypes={
    name: PropTypes.string,
}
export default Header;
