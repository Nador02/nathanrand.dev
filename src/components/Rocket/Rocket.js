import { RocketIcon } from "./styleRocket"
import rocketImageStationary from "../../img/Duck-In-Rocket.png"
import rocketImageThrusting from "../../img/Duck-In-Rocket-With-Thrust.png"
import { gsap, Linear } from "gsap"
import { useEffect, useRef, useState } from "react"
import { useMediaQuery } from "@mui/material"

export const Rocket = () => {

  //Sets up support variables for switching between images for the engine's being on and off, as well as it's current direction (1 is down, -1 is up)
  let rocketImage = rocketImageStationary;
  let [currentWidth] = useState('14vmin');
  let rocketDirection = -1;
  let timeline = useRef(null);
  //Determines path for regular view and mobile
  let path = [{x:'8vw', y:'40vh'}, {x:'0', y:'80vh'}, {x:'-8vw', y:'120vh'}, {x:'0', y:'160vh'}, {x:'8vw', y:'210vh'}, {x:'0', y:'255vh'}, {x:'-8vw', y:'300vh'}, {x:'0', y:'345vh'}, {x:'8vw', y:'390vh'}, {x:'0', y:'435vh'}, {x:'-8vw', y:'480vh'}, {x:'0', y:'525vh'}, {x:'8vw', y:'570vh'}, {x:'-70vw', y:'600vh'}];
  //Define our font size for MUI components based on screen width
  const smallResolution = useMediaQuery('(max-width:500px)');
  if(smallResolution){
    path = [{x:'6vw', y:'30vh'}, {x:'-8vw', y:'70vh'}, {x:'-8vw', y:'100vh'}, {x:'6vw', y:'140vh'}, {x:'6vw', y:'150vh'}, {x:'-8vw', y:'190vh'}, {x:'-8vw', y:'220vh'}, {x:'6vw', y:'250vh'}, {x:'6vw', y:'280vh'}, {x:'-10vw', y:'320vh'}, {x:'-10vw', y:'350vh'}, {x:'8vw', y:'380vh'}, {x:'-70vw', y:'390vh'}]
  }
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
  let timeOutResize = useRef(null);
  useEffect(() => {
    createTimeline();

    let resize = () => {
      console.log((window.innerWidth/window.innerHeight));
      clearTimeout(timeOutResize.current);
      timeOutResize.current = setTimeout(resized, 1000);
    }

    let resized = () => {
      let progress = timeline.current.scrollTrigger.progress;
      timeline.current.kill();
      createTimeline();
      timeline.current.progress(progress);
    }

    window.addEventListener("resize", resize);
  });

  let createTimeline = () => {
          //Animation for landing on the footer
          let timelinePercentage = 0.8;
          if(window.innerWidth < 1200){
            timelinePercentage = 0.75;
          }
          else if(smallResolution){
            timelinePercentage = 0.7;
          }
          timeline.current = gsap.timeline({
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
              end: () => window.document.body.offsetHeight*timelinePercentage + ' top',
            },
          });
          //Animation for flying up and down throughout the page
          timeline.current.to(rocketRef.current, {
            motionPath: {
              path: path,
              autoRotate: true
            },
            ease:Linear.easeNone,
            duration:0.95,
          });
    
  }
  return (
    <RocketIcon src={rocketImage} ref={rocketRef} style={{width: currentWidth}}></RocketIcon>
  )
}
