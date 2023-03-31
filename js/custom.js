//function 
function introhover(e) {
  e.childNodes[1].classList.add("circle");
  
  console.log();
}


//

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function getData(str) {
  return new Promise(function(resolve, reject) {
    fetch('https://www.wiyse.com/kushagra/newbot/test.json')
    .then(response => response.json())
    .then(data => data.forEach(function (element, index) {
      let query = element.query.q;
      let finalstr = query.find((s) => s === str);
      if (finalstr!=undefined) {
         resolve(element);
      }
    }))
  });
}
  

function randerBreadCrumb(answer){
  $("#player").remove();
  var navbox_div = document.createElement('div');
  navbox_div.classList = 'player';
  navbox_div.id = 'player';
  
  var navbox_html =`<div class="breadcrumb ">
  <h5><span id="response">${answer}</span></h5>
  
  </div>`;
  navbox_div.innerHTML = navbox_html;
             
  sectionEle.appendChild(navbox_div);
}

function wiysePlayer(answer){
  $("#player").remove();
  var navbox_div = document.createElement('div');
  navbox_div.classList = 'player';
  navbox_div.id = 'player';
  
  var navbox_html =`<div class="breadcrumb ">
  <h5><span id="response">${answer}</span></h5>
  
  </div>
  
  <div class="player-control">
          <img src="https://www.wiyse.com/kushagra/newbot/images/icons/back-arrow.png">
          <div class="play-btn">
            <img src="https://www.wiyse.com/kushagra/newbot/images/play.png" class="play"/>
            <img src="https://www.wiyse.com/kushagra/newbot/images/pause.png" class="pause"/>
          </div>
          <img src="https://www.wiyse.com/kushagra/newbot/images/double-arrow.png">
        </div>`;
  navbox_div.innerHTML = navbox_html;
             
  sectionEle.appendChild(navbox_div);
}


function wiyseModules(){
  var tour_div = document.createElement('div');
  tour_div.classList = 'deep-tour';
  tour_div.id = 'tour';
  
  var tour_html =`<ul class="modules-options" id="module">
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
}

function removeModules(selector){
  $(selector).remove();
}
function addElementClass(className,selector){
  $(selector).addClass(className);
}


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

  //

  //
  function chatBubble(query){
    $("#botPopup").remove();
    var chatbox_div = document.createElement('div');
  chatbox_div.classList = 'chat-box';
  chatbox_div.id = 'chat-box';
    var chatbox_html =`
                  <div class="chat-bubble" id="chatbubble">
                      ${query}
                  </div>
                  <div class="chat-input" >
                      <input placeholder="Enter your question or task "  id="texchat2" type="text"/>
                      
                  </div>
                  <img src="https://www.wiyse.com/kushagra/newbot/images/icons/back-arrow.png" class="back-arrow"/>
                  <img src="https://www.wiyse.com/kushagra/newbot/images/icons/sync-icon.png" class="sync-icon" id="sync"/>
             `;
  
  
             chatbox_div.innerHTML = chatbox_html;
             
             sectionEle.appendChild(chatbox_div);
  }
  

  

  //

  //on enter #textchat
       var techat = document.getElementById("textchat");
       techat.addEventListener("keypress", async function(event) {
         if (event.key === "Enter") {
          let inputValue= techat.value;
          chatBubble(inputValue);
          //addElementClass("add-after-blur","#wiyse");
          getData(inputValue).then(function(response){
            if(response.qtype=="theory"){
              const random = Math.floor(Math.random() * response.query.r.length);
              const res = response.query.r[random];
              console.log(res);
              randerBreadCrumb(res);
              removeModules("#tour");
            }else{
              const random = Math.floor(Math.random() * response.query.r.length);
              const res = response.query.r[random];
              wiysePlayer(res);
              wiyseModules();
            }
          })

           event.preventDefault();
          //  document.getElementById("chatbubble").innerHTML = inputValue;
          //  let boxAdd = document.getElementById("chat-box").innerHTML;
          //  document.getElementById("chat-box").remove();
          
          //  //console.log(boxAdd);
          //  const bel = document.getElementById("botPopup");
          //  bel.classList.remove("bot-popup");
          //  bel.classList.remove("open");
          //  bel.classList.add("chat-box");
           
          //  bel.innerHTML = boxAdd;
           
           
           
         }
       });

       $(document).on("keypress","#texchat2",function(e) {
        var texchat = document.getElementById("texchat2");
      //console.log(texchat);
        var key = e.which;
        if(key == 13)  // the enter key code
         {
          let inputValue= texchat.value;
          $("#chatbubble").html(inputValue);
          //addElementClass("add-after-blur","#wiyse");
          getData(inputValue).then(function(response){
            if(response.qtype=="theory"){
              const random = Math.floor(Math.random() * response.query.r.length);
              const res = response.query.r[random];
              console.log(res);
              randerBreadCrumb(res);
              removeModules("#tour");
            }else{
              const random = Math.floor(Math.random() * response.query.r.length);
              const res = response.query.r[random];
              wiysePlayer(res);
              wiyseModules();
            }
          })
              e.preventDefault();
              texchat.value='';
           return false;  
         }
      });

  





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
            <div class="arrow"><img src="https://www.wiyse.com/kushagra/newbot/images/double-arrow.png"/>
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
                <img src="https://www.wiyse.com/kushagra/newbot/images/playcircle.png"/>
              </div>
            <div class="arrow"><img src="https://www.wiyse.com/kushagra/newbot/images/double-arrow.png"/>
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
  