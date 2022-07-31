import { RocketIcon } from "./styleRocket"
import rocketImageStationary from "../../img/Duck-In-Rocket.png"
import rocketImageThrusting from "../../img/Duck-In-Rocket-With-Thrust.png"
import { gsap, Linear} from "gsap"
import { useEffect, useRef } from "react"

export const Rocket = () => {
  //Sets up support variables for switching between images for the engine's being on and off, as well as it's current direction (1 is down, -1 is up)
  let rocketImage = rocketImageStationary;
  let rocketDirection = -1;
  //Support function that "toggles the engines" for the rocket by switching the image paths
  let toggleEngines = (enginesOff) => {
    if(enginesOff){
      gsap.set(rocketRef.current, { attr: { src: rocketImageStationary } });
    }
    else{
      gsap.set(rocketRef.current, { attr: { src: rocketImageThrusting } });
    }
  }
  //Support function for turning the rocket around
  let turn = (direction) => {
    //Set the rotation value based on scroll direction
    let rotation = 0;
    if(direction === 1){
      rotation = 180;
    }
    //Animate the rotation
    gsap.to(rocketRef.current, {
      rotation:rotation,
      ease:Linear.easeNone,
      duration:0.25,
    });
    //Update directional field
    rocketDirection = direction;
  }
  //Timeline for the rocket animations
  let rocketRef = useRef(null);
 useEffect(() => {
    let timeline = gsap.timeline({
      scrollTrigger:{
        scrub:1,
        onLeaveBack: () => {toggleEngines(true)},
        onUpdate: (self) => {
          if(rocketDirection !== self.direction){
            turn(self.direction);
          }
        }
      },
    });
    //Animation for rotating at the start of the page to face the correct direction
    timeline.to(rocketRef.current, {
      y:'5vh',
      duration:0.1,
      onComplete: toggleEngines,
      onCompleteParams: [false],
    })
    //Animation for flying up and down throughout the page
    timeline.to(rocketRef.current, {
      y: '157.5vh',
      ease:Linear.easeNone,
      duration:0.95,
    });
 });
  return (
    <RocketIcon src={rocketImage} ref={rocketRef}></RocketIcon>
  )
}
