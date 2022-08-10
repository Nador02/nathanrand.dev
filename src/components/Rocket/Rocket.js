import { RocketIcon } from "./styleRocket"
import rocketImageStationary from "../../img/Duck-In-Rocket.png"
import rocketImageThrusting from "../../img/Duck-In-Rocket-With-Thrust.png"
import { gsap, Linear } from "gsap"
import { useEffect, useRef, useState } from "react"

export const Rocket = () => {
  //Sets up support variables for switching between images for the engine's being on and off, as well as it's current direction (1 is down, -1 is up)
  let rocketImage = rocketImageStationary;
  let [currentWidth, setWidth] = useState('10vmin');
  let rocketDirection = -1;
  //Support function that "toggles the engines" for the rocket by switching the image paths
  let toggleEngines = (enginesOff) => {
    if(enginesOff){
      gsap.set(rocketRef.current, { attr: { src: rocketImageStationary } });
      setWidth('10vmin');
    }
    else{
      gsap.set(rocketRef.current, { attr: { src: rocketImageThrusting } });
      setWidth('12.75vmin');
    }
  }
  //Support function for turning the rocket around
  let turn = (direction) => {
    //Animate the rotation
    gsap.to(rocketRef.current, {
      scaleX: direction,
      ease:Linear.easeNone,
      duration:0.2,
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
          onEnter: () => {toggleEngines(false)},
          onUpdate: (self) => {
            if(rocketDirection !== self.direction){
              turn(self.direction);
            }
          }
        },
      });
      //Animation for flying up and down throughout the page
      timeline.to(rocketRef.current, {
        motionPath: {
          path: [{x:'8vw', y:'40vh'}, {x:'0', y:'80vh'}, {x:'-8vw', y:'120vh'}, {x:'0', y:'160vh'}, {x:'8vw', y:'210vh'}, {x:'0', y:'255vh'}, {x:'-8vw', y:'300vh'}, {x:'0', y:'345vh'}, {x:'8vw', y:'390vh'}, {x:'0', y:'435vh'}, {x:'-8vw', y:'480vh'}, {x:'0', y:'525vh'}],
          autoRotate: true
        },
        ease:Linear.easeNone,
        duration:1,
      });
  });
  return (
    <RocketIcon src={rocketImage} ref={rocketRef} style={{width: currentWidth}}></RocketIcon>
  )
}
