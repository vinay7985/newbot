import React from 'react'

const DeepDrive = () => {
  return (
    <div className="deep-tour">
       
      <a href="breadcrumb-player.html"> <img src="images/icons/minimise.png" className="minimize-icon"/></a>
       <a href="handson.html"><img src="images/icons/cross.png" className="cross-icon"/></a>
      <ul className="modules-list">
        <li>
          <div className="count">1</div> Module 1
          <div className="module-select">
            <img src="images/icons/double-arrow.png"/>
          </div>
        </li>
        <li><div className="count">2</div> Module 2</li>
        <li><div className="count">3</div> Module 3</li>
        <li><div className="count">4</div> Module 4</li>
        <li><div className="count">5</div> Module 5</li>
        <li><div className="count">6</div> Module 3</li>
        <li><div className="count">7</div> Module 4</li>
        <li><div className="count">8</div> Module 5</li>
      </ul>
      <ul className="modules-options">
        <li><div className="count">1</div> Key Workflows</li>
        <li><div className="count">2</div> Key features</li>
        <li><div className="count">3</div> Key Benefits</li>
        <li><div className="count">4</div> Use cases</li>
        <li><div className="count">5</div> Key Workflows</li>
        <li><div className="count">6</div> Key features</li>
        <li><div className="count">7</div> Key Benefits</li>
        <li><div className="count">8</div> Use cases</li>
      </ul>

    </div>
  )
}

export default DeepDrive