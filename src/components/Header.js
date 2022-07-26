import PropTypes from 'prop-types'

export const Header = (props) => {
  return (
    <div>Header</div>
  )
}

Header.defaultProps = {
    color: 'dark',
}

Header.propTypes = {
    color: PropTypes.string,
}