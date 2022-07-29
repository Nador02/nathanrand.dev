import { PlanetRowContainer, Content, Graphics, TopText, MiddleText, BottomText, Planet } from "./planetRowStyles"
import PropTypes from 'prop-types'

export const PlanetRow = ({ topTextContent, middleTextContent, bottomTextContent, buttonContent, planet, mirrored }) => {
  return (
    <PlanetRowContainer>
      <Content mirrored={mirrored}>
        { topTextContent !== "" ? <TopText>{topTextContent}</TopText> : null}
        { middleTextContent !== "" ? <MiddleText>{middleTextContent}</MiddleText> : null}
        { bottomTextContent !== "" ? <BottomText>{bottomTextContent}</BottomText> : null}
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
  mirrored: false,
}

PlanetRow.propTypes = {
  topTextContent: PropTypes.string,
  middleTextContent: PropTypes.string,
  bottomTextContent: PropTypes.string,
  buttonContent: PropTypes.string,
  planetPath: PropTypes.string,
  mirrored: PropTypes.bool,
}
