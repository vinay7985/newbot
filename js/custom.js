//functions


// function introhover(e) {
//   e.childNodes[1].classList.remove("wiyse-hide");
//   e.childNodes[3].classList.remove("wiyse-hide");
//   console.log();
// }
// function introout(e) {
//   e.childNodes[1].classList.add("wiyse-hide");
//   e.childNodes[3].classList.add("wiyse-hide");
//   console.log();
// }

//

function introhover(e) {
  e.childNodes[1].classList.add("circle");
  
  console.log();
}


//

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

//CallBack Function
function handleData(params) {
  let configData = [];

  params.forEach(e => {
    let id = e.id;
    let title= e.title;
    let obj = {id:id, title: title};
    configData.push(obj);
  });
  console.log(configData);
  return configData;
  //console.log(configData);
}

async function fetchData() {
  try {
    const response = await fetch('https://www.wiyse.com/rajesh/api/fundamentals/configure');
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
                          <img src="https://www.wiyse.com/kushagra/newbot/images/icons/double-arrow.png">
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
  //console.log(intro);
})();

window.addEventListener('hashchange', function () {
  intro = getData();
});







// Select the body element
var body = document.body;

// Create a new div element
var mainSection = document.createElement('section');

// Set the ID and text content of the new div
mainSection.classList = 'wiyse-main-screen';
mainSection.id = 'wiyse';
body.appendChild(mainSection);

//start floating bot component
var sectionEle = document.getElementById("wiyse");

var floating_div = document.createElement('div');
floating_div.classList = 'floating-bot';
floating_div.id = 'floating-bot';

var floating_bot_html = `
                <div class="mic">
                    <img src="https://www.wiyse.com/kushagra/newbot/images/bot-icon.png" class="bot-icon"/>
                    <img src="https://www.wiyse.com/kushagra/newbot/images/mic-icon.png" class="mic-icon"/>
                </div>
                <div class="bot-popup" id="botPopup">
                    <input class="chat-input" type="text" id="textchat" placeholder="Enter your question or task"/>
                    <img src="https://www.wiyse.com/kushagra/newbot/images/icons/back-arrow.png" class="back-arrow"/>
                </div>
             `;
floating_div.innerHTML = floating_bot_html;
     sectionEle.appendChild(floating_div);

//end floating bot component


// Navigation Box

var navbox_div = document.createElement('div');
navbox_div.classList = 'player';
navbox_div.id = 'player';

var navbox_html =`<div class="breadcrumb">
<h5><span id="response">Lets check Out The Basic Steps for creating a new invoice</span></h5>

</div>
<div class="player-control">
        <img src="https://www.wiyse.com/kushagra/newbot/images/icons/back-arrow.png">
        <div class="play-btn">
          <img src="https://www.wiyse.com/kushagra/newbot/images/icons/play.png" class="play"/>
          <img src="https://www.wiyse.com/kushagra/newbot/images/icons/pause.png" class="pause"/>
        </div>
        <img src="https://www.wiyse.com/kushagra/newbot/images/icons/double-arrow.png">
      </div>`;
navbox_div.innerHTML = navbox_html;
           
sectionEle.appendChild(navbox_div);

//

// Deep Tour

var tour_div = document.createElement('div');
tour_div.classList = 'deep-tour';
tour_div.id = 'tour';

var tour_html =`<ul class="modules-options">
<li><div class="count">1</div> Proposals</li>
<li><div class="count">2</div> Estimates</li>
<li class="green-highlite"><div class="count">3</div> Invoice</li>
<li><div class="count">4</div> Payments</li>
<li><div class="count">5</div> Credit Notes</li>
<li><div class="count">6</div> Items</li>
<li><div class="count">7</div> Key Benefits</li>
<li><div class="count">8</div> Use cases</li>
</ul>`;
tour_div.innerHTML = tour_html;
           
sectionEle.appendChild(tour_div);

//


var chatbox_div = document.createElement('div');
chatbox_div.classList = 'chat-box';
chatbox_div.id = 'chat-box';
chatbox_div.style.display='none';

  var chatbox_html =`
                <div class="chat-bubble" id="chatbubble">
                    What is the meaning of invoice? Also show me how to create one.
                </div>
                <div class="chat-input" >
                    <input placeholder="Enter your question or task    "  id="texchat2" type="text"/>
                    
                </div>
                <img src="https://www.wiyse.com/kushagra/newbot/images/icons/back-arrow.png" class="back-arrow"/>
                <img src="https://www.wiyse.com/kushagra/newbot/images/icons/sync-icon.png" class="sync-icon"/>
           `;


           chatbox_div.innerHTML = chatbox_html;
           
           sectionEle.appendChild(chatbox_div);

  //var techat = document.getElementById("textchat");
  //console.log(techat);

  // techat.addEventListener("keypress", function(event) {
  //   if (event.key === "Enter") {
  //     let inputValue= techat.value;
  //     event.preventDefault();
  //     document.getElementById("chatbubble").innerHTML = inputValue;
  //     document.getElementById("chat-box").style.display='block';
  //     techat.value='';
  //   }
  // });

  // $('#texchat2').keypress(function (e) {
  //   var key = e.which;
  //   if(key == 13)  // the enter key code
  //    {
  //      alert('hi');
  //      return false;  
  //    }
  //  });   

  const fetchquery = (str) =>{
  //   const formData = new FormData();
  // formData.append('href', href9);
  
  fetch('https://www.wiyse.com/kushagra/newbot/test.json')
    .then(response => response.json())
    .then(data => data.forEach(function (element, index) {
      let query = element.query.q;
      let finalstr = query.find((s) => s === str);
      if(finalstr!=undefined){
        const random = Math.floor(Math.random() * element.query.r.length);
        const response= element.query.r[random];
         console.log(random, element.query.r[random]);
        document.getElementById("response").innerHTML = response;
        //console.log(element.query.r);
      }
      
    }))
  }

  var techat = document.getElementById("textchat");
  techat.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      let inputValue= techat.value;
      fetchquery(inputValue);
      event.preventDefault();
      document.getElementById("chatbubble").innerHTML = inputValue;
      let boxAdd = document.getElementById("chat-box").innerHTML;
      document.getElementById("chat-box").remove();
     
      //console.log(boxAdd);
      const bel = document.getElementById("botPopup");
      bel.classList.remove("bot-popup");
      bel.classList.remove("open");
      bel.classList.add("chat-box");
      
      bel.innerHTML = boxAdd;
      
      
      
    }
  });

  // window.onload = function() {
  //   var texchat = document.getElementById("texchat2");
  //   console.log(texchat);
    
  //   texchat.addEventListener("keypress",function (params) {
  //     alert('hi');
  //   });
  // }
  

  // document.addEventListener("DOMContentLoaded", function() {
  //   var texchat = document.getElementById("texchat2");
  //   console.log(texchat);
  
  //   texchat.addEventListener("keypress", function(event) {
  //     alert('hi');
  //   });
  // });
  
  
  

  $(document).on("keypress","#texchat2",function(e) {
    var texchat = document.getElementById("texchat2");
  //console.log(texchat);
    var key = e.which;
    if(key == 13)  // the enter key code
     {
      let inputValue= texchat.value;
      fetchquery(inputValue);
          e.preventDefault();
          document.getElementById("chatbubble").innerHTML = inputValue;
    
          texchat.value='';
       return false;  
     }
  });
  // // texchat.addEventListener("keypress",function (event) {
  // //   alert('hi');
  // });
  
  // texchat.addEventListener("keypress", function(event) {
    
  //   if (event.key === "Enter") {
  //     alert('hello');
  //     // let inputValue= texchat.value;
  //     // event.preventDefault();
  //     // document.getElementById("chatbubble").innerHTML = inputValue;

  //     // texchat.value='';
  //   }
  // });

  
  let myUrl = window.location.pathname;
  let newUrl= myUrl.replace("kushagra", "vinay");
  let href9 = newUrl+window.location.search;
  let i =1;

  const formData = new FormData();
  formData.append('href', href9);
  
  fetch('https://www.wiyse.com/rajesh/api/functionalities/get_location',{
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => data.forEach(function (element, index) {
      console.log(data);
      if (element.href === '/vinay/admin/invoices/invoice' || element.href === '/vinay/admin/invoices'|| element.href === '/vinay/admin/proposals/proposal' || element.href === '/vinay/admin/proposals'||element.href === '/vinay/admin/estimates/estimate' || element.href === '/vinay/admin/estimates'|| element.href === '/vinay/admin/credit_notes/credit_note' || element.href === '/vinay/admin/credit_notes'|| element.href === '/vinay/admin/invoice_items') {
        //console.log(href9);
        if (i==1) {
          let rintro='';
        // element.response.forEach(function(el2,ind2){
        //   let ulBenifits = ` <li>
        //   <div class="count">${ind2+1}</div> ${el2.q}
        //   <div class="module-select">
        //     <img src="https://www.wiyse.com/kushagra/newbot/images/icons/double-arrow.png">
        //   </div>
        //   <ul class="modules-list step-2">
        //   <li>
        //   <div class="count">${ind2+1}</div>
        //   <a href="#"><p>${el2.r}</p></a>
        // </li>
  
        //     </ul>
        // </li>`;
  
        // rintro += ulBenifits;
        // });
      //console.log(element.response);
  
      let ele=getElementByXpath(element.xpath);
  
      if (ele!=null) {
        //console.log(ele);
        var rect = ele.getBoundingClientRect();
        //console.log(rect);
        
  
        var tour_div = document.createElement('div');
            tour_div.classList = 'tour-markers';
            tour_div.id = 'tour-markers';
         tour_html = `
        <div class="tour-marker" style=" position: absolute; bottom: ${rect.bottom}px;
        height: ${rect.height}px;
        left: ${rect.left}px;
        right: ${rect.right}px;
        top: ${rect.top-18}px;
        width: ${rect.width}px;" onmouseover= "introhover(this);" onmouseout= "introout(this);" >
        <div class="rect-box">
              <span>start</span>
              <img src="https://www.wiyse.com/kushagra/newbot/images/box.png"/>
            </div>
          <div class="arrow"><img src="https://www.wiyse.com/kushagra/newbot/images/icons/double-arrow.png"/>
            <div class="tour-intro">
              <h3 class="wiyse-h5">Intro</h5>
              <img src="https://www.wiyse.com/kushagra/newbot/images/Intro-heading.png"/>
              <ul class="modules-list step-1">
              ${rintro}
              </ul>
            </div>
          </div>
        </div>
        `;
  
  
        tour_div.innerHTML = tour_html;
             sectionEle.appendChild(tour_div);
  
      }
        console.log('The href property matches the string');
        i = i+1;
        } else {
          let rintro='';
        // element.response.forEach(function(el2,ind2){
        //   let ulBenifits = ` <li>
        //   <div class="count">${ind2+1}</div> ${el2.q}
        //   <div class="module-select">
        //     <img src="https://www.wiyse.com/kushagra/newbot/images/icons/double-arrow.png">
        //   </div>
        //   <ul class="modules-list step-2">
        //   <li>
        //   <div class="count">${ind2+1}</div>
        //   <a href="#"><p>${el2.r}</p></a>
        // </li>
  
        //     </ul>
        // </li>`;
  
        // rintro += ulBenifits;
        // });
      //console.log(element.response);
  
      let ele=getElementByXpath(element.xpath);
  
      if (ele!=null) {
        //console.log(ele);
        var rect = ele.getBoundingClientRect();
        //console.log(rect);
        
  
        var tour_div = document.createElement('div');
            tour_div.classList = 'tour-markers';
            tour_div.id = 'tour-markers';
         tour_html = `
        <div class="tour-marker" style=" position: absolute; bottom: ${rect.bottom}px;
        height: ${rect.height}px;
        left: ${rect.left}px;
        right: ${rect.right}px;
        top: ${rect.top-18}px;
        width: ${rect.width}px;" onmouseover= "introhover(this);" >
        <div class="circle-count">
              <span>${i}</span>
              <img src="https://www.wiyse.com/kushagra/newbot/images/icons/playcircle.png"/>
            </div>
          <div class="arrow"><img src="https://www.wiyse.com/kushagra/newbot/images/icons/double-arrow.png"/>
            <div class="tour-intro">
              <h3 class="wiyse-h5">Intro</h5>
              <img src="https://www.wiyse.com/kushagra/newbot/images/Intro-heading.png"/>
              <ul class="modules-list step-1">
              ${rintro}
              </ul>
            </div>
          </div>
        </div>
        `;
  
  
        tour_div.innerHTML = tour_html;
             sectionEle.appendChild(tour_div);
  
      }
        console.log('The href property matches the string');
        i = i+1;
        }
        
      }
      
      

  }))
  .catch(error => console.error(error));
  
  (async function() {
  let intro = await getData();
  var box_div = document.createElement('div');
  box_div.classList = 'tour-markers';
  box_div.id = 'marker';
 // console.log(intro);
try {
  var box_html = `<div class="tour-marker">
<div class="hightlight-box"><img src="https://www.wiyse.com/kushagra/newbot/images/highlight-box.png"/></div>
<div class="arrow"><img src="https://www.wiyse.com/kushagra/newbot/images/icons/double-arrow.png"/>
    <div class="tour-intro">
      <h5 class="wiyse-h5">are different category present here</h5>
      <img src="https://www.wiyse.com/kushagra/newbot/images/Intro-heading.png"/>
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
