//functions 


function introhover(e) {
  e.childNodes[1].classList.remove("hide");
  e.childNodes[3].classList.remove("hide");
  console.log();
  
  
}
function introout(e) {
  e.childNodes[1].classList.add("hide");
  e.childNodes[3].classList.add("hide");
  console.log();
  
  
}               

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

//CallBack Function
function handleData(params) {
  let configData = [];
  console.log(params.fundamentals);
  params.fundamentals.forEach(e => {
    let id = e.id;
    let title= e.title;
    let obj = {id:id, title: title};
    configData.push(obj);
  });
  return configData;
  //console.log(configData);
}

async function fetchData() {
  try {
    const response = await fetch('http://localhost:5000/api/v1/fundamentals/config');
    const data = await response.json();
     return handleData(data);
     //callb=(handleData(data));
  } catch (error) {
    console.error(error);
  }
}

async function getData() {
  const data = await fetchData(); 
  var real_intro = '';
  
  
  
  data.forEach(function (element, index) {

    //dummy.forEach(function (element, index) {
    
    
                        let ulBenifits = `   <li>
                        <div class="count">${index+1}</div> ${element.title}
                        <div class="module-select">
                          <img src="http://localhost/newbot/images/icons/double-arrow.png">
                        </div>
                        <ul class="modules-list step-2">
    
                          </ul>
                      </li>`;
    
                      real_intro += ulBenifits;
    
                 }
                
                 );
                 //console.log(real_intro);
  return real_intro;
}


//var intro = '';
 //let realData=fetchData().then(data => console.log(data));
// console.log(realData);
// const intro = getData();
// console.log(getData());
var intro;
(async function() {
  intro = await getData();
  console.log(intro);
})();




  
  

// Select the body element
var body = document.body;

// Create a new div element
var mainSection = document.createElement('section');

// Set the ID and text content of the new div
mainSection.classList = 'main-screen';
mainSection.id = 'wiyse';
body.appendChild(mainSection);

//start floating bot component
var sectionEle = document.getElementById("wiyse");

var floating_div = document.createElement('div');
floating_div.classList = 'floating-bot';
floating_div.id = 'floating-bot';

var floating_bot_html = ` 
                <div class="mic">
                    <img src="http://localhost/newbot/images/bot-icon.png" class="bot-icon"/>
                    <img src="http://localhost/newbot/images/mic-icon.png" class="mic-icon"/>
                </div>
                <div class="bot-popup">
                    <input class="chat-input" type="text" id="textchat" placeholder="Enter your question or task"/>
                    <img src="http://localhost/newbot/images/icons/back-arrow.png" class="back-arrow"/>
                </div>
             `;
floating_div.innerHTML = floating_bot_html;
     sectionEle.appendChild(floating_div);

//end floating bot component

var chatbox_div = document.createElement('div');
chatbox_div.classList = 'chat-box';
chatbox_div.id = 'chat-box';
chatbox_div.style.display='none';

  var chatbox_html =`
                <div class="chat-bubble" id="chatbubble">
                    What is the meaning of invoice? Also show me how to create one.
                </div>
                <div class="chat-input">
                    <input placeholder="Enter your question or task"  />
                </div>
                <img src="http://localhost/newbot/images/icons/back-arrow.png" class="back-arrow"/>
                <img src="http://localhost/newbot/images/icons/sync-icon.png" class="sync-icon"/>
           `;

           chatbox_div.innerHTML = chatbox_html;
           sectionEle.appendChild(chatbox_div);

  var techat = document.getElementById("textchat");
  console.log(techat);
  
  techat.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      let inputValue= techat.value;
      event.preventDefault();
      document.getElementById("chatbubble").innerHTML = inputValue;
      document.getElementById("chat-box").style.display='block';
      techat.value='';
    }
  });
 
  //href = window.location.href;
  fetch('http://localhost:5000/api/v1/fundamentals/tab_step')
    .then(response => response.json())
    .then(data => data.forEach(function (element, index) {
    //console.log(element.xpath);
    
    let ele=getElementByXpath(element.xpath);

    if (ele!=null) {
      //console.log(ele);
      var rect = ele.getBoundingClientRect();

      var tour_div = document.createElement('div');
          tour_div.classList = 'tour-markers';
          tour_div.id = 'tour-markers';
       tour_html = `
      <div class="tour-marker" style=" position: absolute; bottom: ${rect.bottom}px;
      height: ${rect.height}px;
      left: ${rect.left}px;
      right: ${rect.right}px;
      top: ${rect.top}px;
      width: ${rect.width}px;" onmouseover= "introhover(this);" onmouseout= "introout(this);" >
        <div class="marker-dot hide"><img src="http://localhost/newbot/images/dot.png"/></div>
        <div class="arrow hide"><img src="http://localhost/newbot/images/icons/double-arrow.png"/>
          <div class="tour-intro">
            <h3>Intro</h3>
            <img src="http://localhost/newbot/images/Intro-heading.png"/>
            <ul class="modules-list step-1">
            ${intro}
            </ul>
          </div>
        </div>
      </div>
      `; 
      
      
      tour_div.innerHTML = tour_html;
           sectionEle.appendChild(tour_div);
      
    }
    
  }))
  .catch(error => console.error(error));

  (async function() {
  intro = await getData();
  var box_div = document.createElement('div');
  box_div.classList = 'tour-markers';
  box_div.id = 'marker';
  console.log(intro);
try {
  var box_html = `<div class="tour-marker">
<div class="hightlight-box"><img src="http://localhost/newbot/images/highlight-box.png"/></div>
<div class="arrow"><img src="http://localhost/newbot/images/icons/double-arrow.png"/>
    <div class="tour-intro">
      <h3>Intro</h3>
      <img src="http://localhost/newbot/images/Intro-heading.png"/>
      <ul class="modules-list step-1">
      ${intro}
      </ul>
    </div>
  </div>
  </div>
`;
box_div.innerHTML = box_html;
     sectionEle.appendChild(box_div);
} catch (error) {
  
}
  })();




  //
  







//

  




