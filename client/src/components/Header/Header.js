import PropTypes from 'prop-types'
import { HeaderContainer, NavItem} from "./headerStyles"

export const Header = ({ color, navItems}) => {
  return (
    <HeaderContainer>
      {
        navItems.map((item) => <NavItem key={item.key}>{item.value}</NavItem>)
      }
    </HeaderContainer>
  )
}

Header.defaultProps = {
    color: 'dark',
    navItems: [],
}

Header.propTypes = {
    color: PropTypes.string,
    navItems: PropTypes.arrayOf(PropTypes.object),
}