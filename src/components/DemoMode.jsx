import React from 'react'

const DemoMode = () => {
  return (
    <div className="demo-mode">
      
       <img src="images/icons/minimise.png" className="minimize-icon"/>
       <a href="index.html"><img src="images/icons/cross.png" className="cross-icon"/></a>
      
      <div className="center slider">
        <div>
          <img src="images/icons/Quick tour_dull.png"/>
          <p>Quick Tour</p>
        </div>
        <a href="deep-dive.html">
          <div>
          <img src="images/icons/Deep dive_dull.png"/>
          <p>Deep Dive</p>
        </div>
      </a>
        <div>
          <img src="images/icons/Quick tour_dull.png"/>
          <p>Quick Tour</p>
        </div>
        <div>
          <img src="images/icons/Deep dive_dull.png"/>
          <p>Deep Dive</p>
        </div>
      </div>
      <div className="platform"><img src="images/ring.png"/></div>
      <div className="toggle-switch">
        <div className="off">Hands-on</div>
        <div className="toggle"><span></span></div>
        <div className="on">Guided</div>
      </div>
     
      <div className="center mode slider">
        <div>
          <p>Demo Mode</p>
        </div>
        <div>
          <p>Training Mode</p>
        </div>
        <div>
          <p>Help Mode</p>
        </div>
        <div>
          <p>Help Mode</p>
        </div>
      </div>
    </div>
  )
}

export default DemoMode