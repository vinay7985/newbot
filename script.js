
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
  
  var chatbox_div = document.createElement('div');
  chatbox_div.classList = 'chat-box';
  chatbox_div.id = 'chat-box';
  chatbox_div.style.display='none';
  
    var chatbox_html =`
                  <div class="chat-bubble" id="chatbubble">
                      What is the meaning of invoice? Also show me how to create one.
                  </div>
                  <div class="chat-input" >
                      <input placeholder="Enter your question or task"  id="texchat2" type="text"  />
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
  
    var techat = document.getElementById("textchat");
    techat.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        let inputValue= techat.value;
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
  
    //href = window.location.href;
    fetch('https://www.wiyse.com/rajesh/api/fundamentals/get_location_by_href')
      .then(response => response.json())
      .then(data => data.forEach(function (element, index) {
        
        
        let rintro='';
        element.response.forEach(function(el2,ind2){
          let ulBenifits = ` <li>
          <div class="count">${ind2+1}</div> ${el2.q}
          <div class="module-select">
            <img src="https://www.wiyse.com/kushagra/newbot/images/icons/double-arrow.png">
          </div>
          <ul class="modules-list step-2">
          <li>
          <div class="count">${ind2+1}</div>
          <a href="#"><p>${el2.r}</p></a>
        </li>
  
            </ul>
        </li>`;
  
        rintro += ulBenifits;
        });
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
        top: ${rect.top}px;
        width: ${rect.width}px;" onmouseover= "introhover(this);" onmouseout= "introout(this);" >
        <div class="marker-dot "><img src="https://www.wiyse.com/kushagra/newbot/images/dot.png"/></div>
          <div class="arrow wiyse-hide"><img src="https://www.wiyse.com/kushagra/newbot/images/icons/double-arrow.png"/>
            <div class="tour-intro">
              <h3>Intro</h3>
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
        <h5>are different category present here</h5>
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





//Kushagra
//const apiBase = "https://www.wiyse.com/rajesh/api/";
var audio = new Audio("images/woosh.mp3");
// bot open //
// $( ".floating-bot .mic .bot-icon" ).on( "click", function() {
//   alert('hello');
// });
//$(document).on("click","#test-element",function() {
//$(".floating-bot .mic .bot-icon").on('click',function(){
  $(document).on("click",".floating-bot .mic .bot-icon",function() {
  $(".bot-popup").toggleClass("open");
  $(".floating-bot .mic").toggleClass("open");
});

//$(".bot-popup .back-arrow").on('click',function(){
  $(document).on("click",".bot-popup .back-arrow",function() {
  $(".bot-popup").toggleClass("open");
  $(".floating-bot .mic").toggleClass("open");
  $(".floating-bot .mic").removeClass("active");
});



//$('.bot-popup input').on('click',function(){
  $(document).on("click",".bot-popup input",function() {
  var textwindow = $('.text-window');
  textwindow.addClass('active');
  setTimeout(function() {
      textwindow.addClass('open');
  }, 200);
  setTimeout(function() {
      textwindow.removeClass('open');
  }, 5000);
  setTimeout(function() {
      textwindow.removeClass('active');
  }, 5500);
});

//$(".mic-icon").click(function(){
  $(document).on("click",".mic-icon",function() {
  $(".floating-bot .mic").toggleClass("active");
});

//slider

$(window).load(function() {
  $(".center").slick({
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 2
  });
});

//toggle
$(".toggle").click(function(){
  $(".toggle-switch").toggleClass("on");
});
