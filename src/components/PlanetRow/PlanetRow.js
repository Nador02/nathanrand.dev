import { PlanetRowContainer, Content, Graphics, TopText, MiddleText, BottomText, Planet } from "./planetRowStyles"
import { Button } from '../Button/Button'
import PropTypes from 'prop-types'

export const PlanetRow = ({ topTextContent, middleTextContent, bottomTextContent, buttonContent, buttonPath, planet, mirrored }) => {
  return (
    <PlanetRowContainer>
      <Content mirrored={mirrored}>
        { topTextContent !== "" ? <TopText>{topTextContent}</TopText> : null}
        { middleTextContent !== "" ? <MiddleText>{middleTextContent}</MiddleText> : null}
        { bottomTextContent !== "" ? <BottomText>{bottomTextContent}</BottomText> : null}
        { buttonContent !== "" ? <Button textContent={buttonContent} path={buttonPath}></Button> : null}
      </Content>
      <Graphics mirrored={mirrored}>
        <Planet src={planet}></Planet>
      </Graphics>
    </PlanetRowContainer>
  )
}

PlanetRow.defaultProps = {
  topTextContent: "",
  middleTextContent: "",
  bottomTextContent: "",
  buttonContent: "",
  planetPath: "",
  buttonPath: "",
  mirrored: false,
}

PlanetRow.propTypes = {
  topTextContent: PropTypes.string,
  middleTextContent: PropTypes.string,
  bottomTextContent: PropTypes.string,
  buttonContent: PropTypes.string,
  planetPath: PropTypes.string,
  buttonPath: PropTypes.string,
  mirrored: PropTypes.bool,
}
