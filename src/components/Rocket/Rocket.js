import { RocketIcon } from "./styleRocket"
import rocketImageStationary from "../../img/Duck-In-Rocket.png"
import rocketImageThrusting from "../../img/Duck-In-Rocket-With-Thrust.png"
import { gsap, Linear } from "gsap"
import { useEffect, useRef, useState } from "react"

export const Rocket = ({landingSurface}) => {
  //Sets up support variables for switching between images for the engine's being on and off, as well as it's current direction (1 is down, -1 is up)
  let rocketImage = rocketImageStationary;
  let [currentWidth] = useState('14vmin');
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
    //Waits for the home page to be rendered before generating our animation structure
    if(landingSurface == null){
      return;
    }
      let timeline = gsap.timeline({
        scrollTrigger:{
          scrub:0.75,
          onLeaveBack: () => {toggleEngines(true)},
          onEnter: () => {toggleEngines(false)},
          onEnterBack: (self) => {toggleEngines(false); turn(self.direction);},
          onUpdate: (self) => {
            if(rocketDirection !== self.direction){
              turn(self.direction);
            }
          },
          end: () => window.document.body.offsetHeight*0.85 + ' top',
        },
      });
      //Animation for flying up and down throughout the page
      timeline.to(rocketRef.current, {
        motionPath: {
          path: [{x:'8vw', y:'40vh'}, {x:'0', y:'80vh'}, {x:'-8vw', y:'120vh'}, {x:'0', y:'160vh'}, {x:'8vw', y:'210vh'}, {x:'0', y:'255vh'}, {x:'-8vw', y:'300vh'}, {x:'0', y:'345vh'}, {x:'8vw', y:'390vh'}, {x:'0', y:'435vh'}, {x:'-8vw', y:'480vh'}, {x:'0', y:'525vh'}, {x:'8vw', y:'570vh'}, {x:'0', y:'615vh'}],
          autoRotate: true
        },
        ease:Linear.easeNone,
        duration:0.95,
      });
      //Animation for landing on the footer
      timeline.to(rocketRef.current, {
        rotate: -90,
        y: () => landingSurface.top - 320,
        x: () => rocketRef.current.getBoundingClientRect().width*0.35,
        ease:Linear.easeNone,
        onComplete: () => {
          toggleEngines(true);
        },
        duration:0.05,
      })

  });
  return (
    <RocketIcon src={rocketImage} ref={rocketRef} style={{width: currentWidth}}></RocketIcon>
  )
}
