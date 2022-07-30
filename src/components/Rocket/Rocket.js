import { RocketIcon } from "./styleRocket"
import rocketImage from "../../img/Duck-In-Rocket.png"
import { gsap, Linear} from "gsap"
import { useEffect, useRef } from "react"

export const Rocket = () => {
  //Animation for the rocket effects
  let rocketRef = useRef(null);
  useEffect(() => {
    gsap.to(rocketRef.current, {
      scrollTrigger: {
        scrub: 1,
      },
      y: '160vh',
      ease:Linear.easeNone,
    })
  })
  return (
    <RocketIcon src={rocketImage} ref={rocketRef}></RocketIcon>
  )
}
