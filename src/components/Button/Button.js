import PropTypes from 'prop-types'
import { ButtonItem, ButtonContainer} from './styleButton'
import { useNavigate } from "react-router-dom";

export const Button = ({ textContent, width, color, path}) => {
  //Defines space to store button functionality if requested
  let buttonOnClick;
  //Defines functionality for the button if a buttonPath is passed for routing
  let navigate = useNavigate();
  if(path !== ""){
    buttonOnClick = () => {
        console.log("Test");
        navigate(path);
    }
  }
  //Defines the returned button
  return (
    <ButtonContainer>
        <ButtonItem color={color} width={width} onClick={buttonOnClick}>{textContent}</ButtonItem>
    </ButtonContainer>
  )
}

Button.defaultProps = {
    textContent: "Click Me!",
    width: '100%',
    color: '#FFFFFF',
    path: '',
}

Button.propTypes = {
    textContent: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string,
    path: PropTypes.string,
}
