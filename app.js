// Get The URL
const site = window.location.hostname


// alert("Injector - The JavaScript has been injected to: " + site + " 🤖")

// Add Custom CSS - Function
const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css
const Add_Custom_Script = script => document.body.appendChild(document.createElement("script")).innerHTML = script
const Add_Custom_Script_Head = script => document.head.appendChild(document.createElement("script")).innerHTML = script;
// Create Custom Element - Function
function Create_Custom_Element(tag, attr_tag, attr_name, value) {
    const custom_element = document.createElement(tag)
    custom_element.setAttribute(attr_tag, attr_name)
    custom_element.innerHTML = value
    document.body.append(custom_element)
}

// JS Codes For youtube.com
if (site.includes("suite8demo.suiteondemand.com") || site.includes("hubspot.com")) {
    /* -------------- */
    /* Add Custom CSS */
    /* -------------- */
    
  
    

  Create_Custom_Element('div','class','dy', `
<section class="main-screen" id="main-screen">
  <aside class="side-bar open">
    <ul class="menu">
      <li class="active">Capture</li>
      <li><a href="#">Preview</a></li>
      <li class="maximize-btn"><i class="fa-solid fa-angle-up"></i></li>
    </ul>
    <div class="capture-section">
            <ul class="main-tabs" id="main_tabs_ul">
              <li class="top-tab active" id="load-main-module"><i class="fa-solid fa-setting"></i> <a href="javascript:;" id="main"></a>Main Module</a></li>
              <li class="add-tabs-module"><i class="fa-solid fa-circle-plus"></i></li>
           </ul>
            <input type="hidden" id="stack" name="" value="">
            <ul class="group-list" id="main_module_ul" style="margin:20px;">
                  
            </ul>


      <ul class="main-tabs hide" id="main-tabs-id" style="display:none">
        <li class="top-tab active"  id="load-fundamentals"><i class="fa-solid fa-shapes"></i> <a href="javascript:;" id="fundamentals"></a>Fundamentals</a></li>
        <li class="top-tab" id="load-functionalities" ><i class="fa-solid fa-gears"></i> <a href="javascript:;" id="functionalities">Functionalities</a></li>
        <li class="top-tab" onclick="loadKnowledgeBase(this)"><i class="fa-solid fa-database"></i> <a href="javascript:;" id="knowledge-base">Knowledge Base</a></li>
      </ul>
       <div class="main-content fundamentals-section hide" id="fundamentals_section">
         <!-- content will load here-->
         <ul class="main-tabs sub-tabs" id="fundamentals-main-tab">
         </ul>
         <div class="sub-content concept-section">
          <ul class="subsub-tabs main-tabs" id="fundamentals-tab-section">
            
          </ul>
          <div class="subsub-content invoice-section" id="tabs-sections">

          </div>
        </div>
    </div>
   <aside id="search_view" class="side-bar search-view open" style="display:none;">
      <ul class="menu">
        <li class="maximize-btn"><i class="fa-solid fa-angle-up"></i></li>
      </ul>
      <div class="sub-content concept-section">
        <ul class="subsub-tabs main-tabs">
          <li class="active">Manual</li>
          <li>FAQ</li>
          <li>Support</li>
          <li>Troubleshoot</li>
        </ul>
        <div class="subsub-content topic-section">
          
          <ul class="group-list">
            <!-- list -->
            <li>
              <div class="list-header flex space-between vcenter">
                Manual Topic 1
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="list-content">
                <!-- Field -->
                <div class="Knowledge-base-field">
                  <div class="content-text">
                    Content from manual… <span class="highlight-keyword">Highlighted Keyword</span> .
                    Content from manual…. 
                  </div>
                </div>

                <!-- Field -->
                <div class="Knowledge-base-field">
                  <div class="content-text">
                    Content from manual… <span class="highlight-context">Highlighted Context</span> .
                    Content from manual…. 
                  </div>
                </div>

                <!-- Field -->
                <div class="Knowledge-base-field">
                  <div class="content-text">
                    Content from manual… <span class="highlight-context">Highlighted Context Goes Here</span> .
                    Content from manual…. 
                  </div>
                </div>

                <!-- Field -->
                <div class="Knowledge-base-field">
                  <div class="content-text">
                    Manual… <span class="highlight-keyword">Highlighted Keyword</span> .
                    Content from manual…. 
                  </div>
                </div>

                <!-- Field -->
                <div class="Knowledge-base-field">
                  <div class="content-text">
                    Content from manual… Content from manual…. 
                  </div>
                </div>

                <!-- Field -->
                <div class="Knowledge-base-field">
                  <div class="content-text">
                    Content from manual… <span class="highlight-keyword">Highlighted Keyword</span> .
                    Content from manual…. 
                  </div>
                </div>

                <!-- Field -->
                <div class="Knowledge-base-field">
                  <div class="content-text">
                    <span class="highlight-context">Highlighted Context</span> Content from manual…. 
                  </div>
                </div>

                <!-- Field -->
                <div class="Knowledge-base-field">
                  <div class="content-text">
                    Content from manual… <span class="highlight-context">Highlighted Context</span> .
                    Content from manual…. 
                  </div>
                </div>

                <!-- Field -->
                <div class="Knowledge-base-field">
                  <div class="content-text">
                    Content from manual… <span class="highlight-keyword">Highlighted Keyword goes here</span> .
                    Content from manual…. 
                  </div>
                </div>

                <!-- Field -->
                <div class="Knowledge-base-field">
                  <div class="content-text">
                    Content from manual… Content from manual…. 
                  </div>
                </div>

              </div>
            </li>
          <!-- List-->
            <li>
              <div class="list-header flex space-between vcenter">
                Manual Topic 2
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="list-content">
                  <!-- content place here-->
              </div>
            </li>

          <!-- List-->
            <li onclick="sendData();">
              <div class="list-header flex space-between vcenter">
              Manual Topic 3
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="list-content">
                  <!-- content place here-->
              </div>
            </li>
          </ul>
         
      </div>
       <div class="list-footer flex hright">
           <button id="search_panel_button" class="btn small-btn grey-btn">Cancel</button>
       </div>
   </div>
  </aside>
 </aside>

   <!-- fundamentals select button modal -->
   

  <!-- Fundamental popup-->
  <div id="add-popup" class="popup fundamental-popup" style="display:none;">
    <div class="popup-header">
      Mark Fundamentals
    </div>
    <!---->
    <div id="popup-error"></div>
    <div class="popup-body">
      <ul class="popup-list">
        <li><input  type="checkbox"  /> <label><i class="fa-solid fa-lightbulb"></i> Concept</label> 
         <input type="text" id="input_concept" class="popup-input" placeholder="Concept Name"/></li>
        <li><input type="checkbox" /> <label><i class="fa-solid fa-wrench"></i> Feature</label> 
         <input type="text" name="feature" class="popup-input" id="input_feature" placeholder="Feature Name"/>
       </li>
        <li><input type="checkbox" /> <label><i class="fa-solid fa-hand-fist"></i> Capability</label>
            <input type="text" class="popup-input" placeholder="Capability Name" name="capability" id="input_capability" />
        </li>
      </ul>
    </div>
    <!---->
    <div class="popup-footer flex hright">
      <button class="btn small-btn" id="save_fundamentals">Save</button>
      <button class="btn small-btn grey-btn close-popup">Cancel</button>
    </div>
  </div>


  <!-- Recording popup-->
  <div class="popup recording-popup" style="display:none">
    <div class="popup-header flex space-between">
      <div class="recording-name"><input type="text" placeholder="Add Recording Name"/></div>
      <div class="recording-control">
        <i class="fa-solid fa-record-vinyl"></i>
        <i class="fa-solid fa-play"></i>
        <i class="fa-solid fa-stop"></i>
      </div>
    </div>
    <!---->
    <div class="popup-body">
      <ul class="interaction-steps">
        <li class="active"><span class="play-pause"><i class="fa-solid fa-play"></i></span> Start</li>
        <li><span class="count">1</span> Step 1</li>
        <li><span class="count">2</span> Step 2</li>
        <li><span class="play-pause"><i class="fa-solid fa-stop"></i></span> End</li>
        <i class="fa-solid fa-angle-right scroll-steps"></i>
      </ul>
      <div class="content-captured">
        <textarea placeholder="Content captured.... By dictation" disabled></textarea>
      </div>
    </div>
    <!---->
    <div class="popup-footer flex space-between">
      <div class="icons">
        <i class="fa-solid fa-keyboard"></i>
        <i class="fa-solid fa-microphone"></i>
      </div>
      <div class="btns">
        <a href="recording-done.html"><button class="btn small-btn">Save</button></a>
        <button class="btn small-btn grey-btn close-popup">Cancel</button>
      </div>
    </div>
  </div>
  <div class="floating-bot">
      <div class="circle"></div>
      <div class="circle"></div>
  </div>
  <div class="bot-popup">
      <span class="bot-close">-</span>
      <div class="bot-header flex vcenter">
          <div class="floating-bot">
            <div class="circle"></div>
            <div class="circle"></div>
          </div>How can I help?
      </div>
      <div class="bot-body">
        <div class="results hide">
          <div></div>
        </div>
        <aside class="suggestions" id="suggestions">
            <label>What is Interest?</label>
            <label>Where id Help?</label>
            <label>What is Interest?</label>
            <label>What is Interest?</label>
            <label>Finance</label>
            <label>What is Interest?</label>
            <label>What is Interest?</label>
            <label>What is Interest?</label>
        </aside>
      </div>
      <div class="bot-footer flex space-between vbottom">
        <i class="fa-solid fa-keyboard" title="Type your query"></i>
        <div class="text-center">
          <div class="asked-text "><span class="hide">What is the meaning of invoice?</span></div>
          <i class="fa-solid fa-microphone" title="Speak your query" onclick="startBot();"></i>
          <div class="voice-indicator hide"><div class="indicator"></div></div>
        </div>
        <div class="typing-indicator hide">
          <input id="sendtext_rasa" type="text" placeholder="Start typing here"></div>
        <i class="fa-solid fa-bars" title="See details"></i>
      </div>
    </div>
</section>
<div id="select-box" click-id="0" class="w-hide" style="top: 0px; left: 0px; display: none; width: 0; height: 0;">
         <div id="select-actions" style="top: 110%">
            <div>
            
            <a id="link-element" class="add-action-button" href="javascript:;" title="Capture Start" onclick="markStep('s');">1</a>
            <a id="generate-intent" class="add-action-button" href="javascript:;" title="Capture in between" onclick="markStep('m');">2</a>
            
            <a id="connect-manual" class="add-action-button" href="javascript:;" title="Capture End" onclick="markStep('e')">3</a>
            <a id="remove-btn" class="add-action-button" href="javascript:;" title="Remove Selection" onclick="removeSelectBox();">4</a>
            <a id="stop-start" href="javascript:;" title="Add new" class="add-tab"><i class="fa-solid fa-circle-plus"></i></a>
         </div>
            
   <div class="popup " style="display: block; position: relative; top: 0px; width: 286px; translate: -50% 0;">
    <div class="flex space-between">
         <h4> Concept Description</h4>
    </div>
    <!---->
    <div class="popup-body">
      <div>
        <textarea style="width: 90%" placeholder="Content captured.... By dictation"></textarea>
      </div>
    </div>
    <!---->
    <div class="popup-footer flex space-between" style="position: relative;">
      <a href="javascript:;" style="color: #51647C">
        <i class="fa-solid fa-microphone fa-2xl"></i>
      </a>
      <div class="btns">
        <a href="javascript:;"><button class="wbtn small-btn">Save</button></a>
        <button class="wbtn small-btn grey-btn close-content">Cancel</button>
      </div>
    </div>
  </div>
            
        </div>
    </div>
`);
    
    
    Add_Custom_Style(`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap");
        @import url("https://www.wiyse.com/hubspot/wiyse/css/styleb.css");
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css");
        @import url("chrome-extension://cdikpkphlafjeclnokahecpipkggioko/dist/jquery.contextMenu.min.css");
     `)

    // /* ---------------------- */
    // /* Create Custom Elements */
    // /* ---------------------- */
    // Create_Custom_Element(
    //     "div",
    //     "id",
    //     "js-custom-element",
    //     "My Custom JS Element 1"
    // )
    

    
}


//functions
// async function markModuleTitle(){
  
  
//   let selectBox = $("#select-box");
  
//   let is_parent = 1;
//   let parent_id = $("#stack").val();
  
//   if (parent_id!=0) {
//     is_parent=0;
//   }
//   const href = window.location.href;
//   const selectPath = selectBox.attr("wiyse-select-path");
//   let text = getElementByXPath(selectPath).textContent;
//   let nav = getAnchorHref(getElementByXPath(selectPath));
//   nav = nav.replace(/^.*\/\/[^\/]+/, '');
//   //console.log(nav);
//   text = text.trim();
//   text=text.replace(/^\s+|\s+$/gm,'');
//   const sdata= {title:text, xpath: selectPath, nav_link: nav, status:1, is_parent:is_parent, parent_id:parent_id};
//   $.post(apiBase+"fundamentals/add_module_data", 
//   sdata, function(result){
//     if(result>0){
//       $("#main_tabs_ul").click();
//     }else{
//       alert('something went wrong');
//     }
// });
// }



function introhover(e) {
    e.childNodes[1].classList.remove("wiyse-hide");
    e.childNodes[3].classList.remove("wiyse-hide");
    console.log();
  }
  function introout(e) {
    e.childNodes[1].classList.add("wiyse-hide");
    e.childNodes[3].classList.add("wiyse-hide");
    console.log();
  }
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
  
  
  
  
  
  
  
    