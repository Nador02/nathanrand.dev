import PropTypes from 'prop-types'
import styled from 'styled-components';

export const Header = ({ color, navItems}) => {
  //Styling for the Header Component
  const HeaderContainer = styled.div`
    width:100%;
    height:10vh;
    max-height:10vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  `;

  const NavItem = styled.div`
    width:15%;
    height:100%;
    padding: 0 3%;
    box-sizing: border-box;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size:3vmin;
    font-weight:200;
    text-decoration:none;
    color:white;
    background-color:black;
    transition: font-size 150ms ease-in-out, font-weight 150ms ease-in-out;
    &:hover {
      font-size:3.25vmin;
      font-weight:300;
      cursor:pointer;
    }
  `;

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