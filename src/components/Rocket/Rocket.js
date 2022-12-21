import { RocketIcon } from "./styleRocket"
import rocketImageStationary from "../../img/Duck-In-Rocket.png"
import rocketImageThrusting from "../../img/Duck-In-Rocket-With-Thrust.png"
import { gsap, Linear } from "gsap"
import { useEffect, useRef, useState } from "react"

export const Rocket = () => {

  //Sets up support variables for switching between images for the engine's being on and off, as well as it's current direction (1 is down, -1 is up)
  let rocketImage = rocketImageStationary;
  let [currentWidth] = useState('14vmin');
  let rocketDirection = -1;
  let timeline = useRef(null);
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
          let landingMarker = 640; //in vh units
          let timelinePercentage = 0.85;
          if(window.innerWidth < 1200){
            landingMarker = 585;
            timelinePercentage = 0.75;
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
          //Animation for landing on the footer
          timeline.current.to(rocketRef.current, {
            y: () => '0vh',
            x: () => '0vw',
            ease:Linear.easeNone,
            duration:0.001,
          });
          //Animation for flying up and down throughout the page
          timeline.current.to(rocketRef.current, {
            motionPath: {
              path: [{x:'8vw', y:'40vh'}, {x:'0', y:'80vh'}, {x:'-8vw', y:'120vh'}, {x:'0', y:'160vh'}, {x:'8vw', y:'210vh'}, {x:'0', y:'255vh'}, {x:'-8vw', y:'300vh'}, {x:'0', y:'345vh'}, {x:'8vw', y:'390vh'}, {x:'0', y:'435vh'}, {x:'-8vw', y:'480vh'}, {x:'0', y:'525vh'}, {x:'8vw', y:'570vh'}, {x:'0', y:'615vh'}],
              autoRotate: true
            },
            ease:Linear.easeNone,
            duration:0.95,
          });
          let landingY = (landingMarker - (6)*((window.innerWidth/window.innerHeight)**(1.2))).toString() + 'vh';
          if((window.innerWidth/window.innerHeight) <= 0.675){
            landingY = "640vh";
          }
          else if(window.innerWidth/window.innerHeight < 1){
            landingY = (landingMarker - (4.5)*((window.innerWidth/window.innerHeight)**(1.5))).toString() + 'vh';
          }
          timeline.current.to(rocketRef.current, {
            rotate: -90,
            y: () => landingY,
            x: () => rocketRef.current.getBoundingClientRect().width*0.35,
            ease:Linear.easeNone,
            onComplete: () => {
              toggleEngines(true);
            },
            duration:0.05,
          })
    
  }
  return (
    <RocketIcon src={rocketImage} ref={rocketRef} style={{width: currentWidth}}></RocketIcon>
  )
}
