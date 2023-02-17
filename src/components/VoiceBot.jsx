import React, {useState} from 'react'

const VoiceBot = () => {
  const [toggle, setToggle] = useState(false)

  const toggleClass =()=>{
    setToggle("open");
  }
  const toggleClass2 =()=>{
    setToggle(" ");
  }
  const toggleClass3 =()=>{
    setToggle("open active");
  }
  
  return (
    <div className="floating-bot">
     
      <div className="breadcrumb">
        <a href="index.html"><span>Demo Mode</span></a>
        <span className="arrow"> {`>>`} </span>
        <span>Hands-on</span>
        <span className="arrow">{`>>`}</span>
        <span>Quick Tour</span>
      </div>
      
      
      <div className= {toggle + " mic" } >
        <img src="images/bot-icon.png" className="bot-icon" onClick={toggleClass}/>
        <img src="images/mic-icon.png" className="mic-icon" onClick={toggleClass3}/>
      </div>
      
        <div className={toggle + " bot-popup"}>
        <input className="chat-input" type="text" placeholder="Enter your question or task"/>
        <img src="images/icons/back-arrow.png" className="back-arrow" onClick={toggleClass2}/>
      </div>
      
      
    </div>
  )
}

export default VoiceBot