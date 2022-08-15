import { PlanetRowContainer, Content, Graphics, TopText, MiddleText, BottomText, Planet } from "./planetRowStyles"
import { Button } from '../Button/Button'
import PropTypes from 'prop-types'
import { gsap, Linear } from "gsap"
import { useEffect, useRef } from "react"

export const PlanetRow = ({ topTextContent, middleTextContent, bottomTextContent, buttonContent, buttonPath, planet, mirrored, isProject }) => {
  //Animation for the planet rotating effect
  const planetRef = useRef(null);
  useEffect(() => {
    gsap.to(planetRef.current, {
      rotation:360,
      repeat:-1,
      duration:60,
      ease:Linear.easeNone
    })
  })

  //Title font-size determination
  let middleFontSize = '11vmin';
  if(isProject){
    middleFontSize = '8.5vmin';
  }


  return (
    <PlanetRowContainer>
      <Content mirrored={mirrored}>
        { topTextContent !== "" ? <TopText>{topTextContent}</TopText> : null}
        { middleTextContent !== "" ? <MiddleText fontSize={middleFontSize}>{middleTextContent}</MiddleText> : null}
        { bottomTextContent !== "" ? <BottomText>{bottomTextContent}</BottomText> : null}
        { buttonContent !== "" ? <Button textContent={buttonContent} path={buttonPath}></Button> : null}
      </Content>
      <Graphics mirrored={mirrored}>
        <Planet src={planet} ref={planetRef}></Planet>
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
  isProject: false,
}

PlanetRow.propTypes = {
  topTextContent: PropTypes.string,
  middleTextContent: PropTypes.string,
  bottomTextContent: PropTypes.string,
  buttonContent: PropTypes.string,
  planetPath: PropTypes.string,
  buttonPath: PropTypes.string,
  mirrored: PropTypes.bool,
  isProject: PropTypes.bool,
}
