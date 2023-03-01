// Select the body element
var body = document.body;

// Create a new div element
var mainSection = document.createElement('section');

// Set the ID and text content of the new div
mainSection.classList = 'main-screen';
mainSection.id = 'wiyse';

//var divElement = document.evaluate('//*[@id="widget-top_stats"]/div[2]/div[2]/div', document, null, 0, null);
//const apiUrl = "https://localhost:5000/api/fundamentals"
// var configData = {};
// fetch('http://localhost:5000/api/v1/fundamentals/config')
//  .then(response => response.json())
//  .then(data => data.fundamentals.forEach(function (element, index) {
//   //configData.push(element.id);
//   console.log(element.id);
//   //console.log(element.title);
// }))
//   .catch(error => console.error(error));
//{'1':'here is question', "2":}
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
  return data;
}






// const dummy =
//     [{ id: 1, question: "What is Sales?" }, { id: 2, question: "Describe Sales?" }, { id: 3, question: "How is Sales used ?" },{ id: 4, question: "this is Sales?" }];

let intro = '';
 //let realData=fetchData().then(data => console.log(data));
// console.log(realData);
const realData = getData();
realData.then(data => data.forEach(function (element, index) {

//dummy.forEach(function (element, index) {


                    let ulBenifits = `   <li>
                    <div class="count">${index+1}</div> ${element.title}
                    <div class="module-select">
                      <img src="http://localhost/newbot/images/icons/double-arrow.png">
                    </div>
                    <ul class="modules-list step-2">

                      </ul>
                  </li>`;

                    intro += ulBenifits;

             }));
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
// let ele=getElementByXpath('//*[@id="widget-top_stats"]/div[2]/div[1]/div');

// console.log( ele.textContent );
// Get the rectangle of the div element
//var rect = ele.getBoundingClientRect();

// Log the coordinates of the rectangle
//console.log(rect);
let html='';
html += `  <div class="floating-bot">

  
  <div class="mic">
    <img src="http://localhost/newbot/images/bot-icon.png" class="bot-icon"/>
    <img src="http://localhost/newbot/images/mic-icon.png" class="mic-icon"/>
  </div>
  <div class="bot-popup">
    <input class="chat-input" type="text" placeholder="Enter your question or task"/>
    <img src="http://localhost/newbot/images/icons/back-arrow.png" class="back-arrow"/>
  </div>
  </div>`;

  html +=`<div class="chat-box">
  <div class="chat-bubble">
    What is the meaning of invoice? Also show me how to create one.
  </div>
  <div class="chat-input">
    <input placeholder="Enter your question or task"/>
  </div>
  <img src="http://localhost/newbot/images/icons/back-arrow.png" class="back-arrow"/>
  <img src="http://localhost/newbot/images/icons/sync-icon.png" class="sync-icon"/>
</div>`;
fetch('http://localhost:5000/api/v1/fundamentals/tab_step')
  .then(response => response.json())
  .then(data => data.forEach(function (element, index) {
  //console.log(element.xpath);
  let ele=getElementByXpath(element.xpath);
  
  if (ele!=null) {
    //console.log(ele);
    var rect = ele.getBoundingClientRect();
     html += `<div class="tour-markers">
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
    </div>`;
    //console.log(html);
    
  }
  

  // html += `<div class="demo-mode">

  // <img src="http://localhost/newbot/images/icons/minimise.png" class="minimize-icon"/>
  // <a href="index.html"><img src="http://localhost/newbot/images/icons/cross.png" class="cross-icon"/></a>
  
  // <div class="center slider">
  //  <div>
  //    <img src="http://localhost/newbot/images/icons/Quick tour_dull.png"/>
  //    <p>Quick Tour</p>
  //  </div>
  //  <a href="deep-dive.html">
  //    <div>
  //    <img src="http://localhost/newbot/images/icons/Deep dive_dull.png"/>
  //    <p>Deep Dive</p>
  //  </div>
  // </a>
  //  <div>
  //    <img src="http://localhost/newbot/images/icons/Quick tour_dull.png"/>
  //    <p>Quick Tour</p>
  //  </div>
  //  <div>
  //    <img src="http://localhost/newbot/images/icons/Deep dive_dull.png"/>
  //    <p>Deep Dive</p>
  //  </div>
  // </div>
  // <div class="platform"><img src="http://localhost/newbot/images/ring.png"/></div>
  // <div class="toggle-switch">
  //  <div class="off">Hands-on</div>
  //  <div class="toggle"><span></span></div>
  //  <div class="on">Guided</div>
  // </div>
  // <!-- slider-->
  // <div class="center mode slider">
  //  <div>
  //    <p>Demo Mode</p>
  //  </div>
  //  <div>
  //    <p>Training Mode</p>
  //  </div>
  //  <div>
  //    <p>Help Mode</p>
  //  </div>
  //  <div>
  //    <p>Help Mode</p>
  //  </div>
  // </div>
  // </div>`;

  mainSection.innerHTML = html;


  }))
  .catch(error => console.error(error));

  

body.appendChild(mainSection);



