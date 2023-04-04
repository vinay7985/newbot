
var audio = new Audio("images/woosh.mp3");
// bot open //
$(".floating-bot").click( async function(){
  let url = window.location.href;
  let response = await getFundamentalsByUrl(url);
  if (response) {
     $(".bot-popup").toggleClass("open");
   $(".side-bar").removeClass("open");
   $("#suggestions").html(response);
  }
  
 //  const obj = JSON.parse(response);
 //  for (let index = 0; index < obj.length; index++) {
 //   const element = obj[index];
 //       for (const [key, value] of Object.entries(element)) {
 //         console.log(`${key}: ${value}`);
 //       }
 //  }
});
function showSuggestions(data){
 let url = window.location.href;
 let html = '';
 for (let index = 0; index < data.length; index++) {
   const element = data[index];
   if (url === element.url) {
     html += `<label class="vinfoproduct" xpath='${element.xpath}' div-id="${element.id}">What is ${element.name}</label>`;
   }
   
 }
  if (html) {
   $("#suggestions").html(html);
  }else{
   html += `<label class="vinfoproduct">Not found on this page</label>`;
   $("#suggestions").html(html);
  }
}
function showfunctSuggestions(data){
 let url = window.location.href;
 let html = '';
 for (let index = 0; index < data.length; index++) {
   const element = data[index];
   
     html += `<label class="actionfunct" xpath='${element.xpath}' div-id="${element.id}">Start ${element.name}</label>`;
   
   
 }
  if (html) {
   $("#suggestions").html(html);
  }else{
   html += `<label class="vinfoproduct">Not found on this page</label>`;
   $("#suggestions").html(html);
  }
}




var wage = document.getElementById("sendtext_rasa");
wage.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        validate(e);
    }
});

function validate(e) {
    var text = e.target.value;
    e.target.value='';
    sendTextRasa(text)
}

$(document).on('click','.vaction',async function(){

 let url = window.location.href;
 let response = await getActionsByUrl(url);
 if (response) {
  $("#suggestions").html(response);
 }

});

$(document).on('click','.add-tabs-module',async function(){
 $("#stack").val(0);
 startFirstStep(7); 
 
 $('#pause-li').show(); 
 enableHighlighter=true;
});

$(document).on('click','.mark-sub-module',async function(e){
  let id = $(this).attr("sub-id");
   $("#stack").val(id);
 startFirstStep(8); 
 $('#pause-li').show(); 
 enableHighlighter=true;
});
// function markSubModule(id) {
//  $("#stack").val(id);
//  startFirstStep(8); 
//  $('#pause-li').show(); 
//  enableHighlighter=true;
// }

$(document).on('click','.vinfoproduct',async function(){
 const sid = $(this).attr('div-id');
 let response = await getStepDataById(sid);
 const obj = JSON.parse(response);
 let des = `Description </br> ${obj.description}.`;
 if (obj.description==null) {
    des = `Description was not found`;
 }
 enableHighlighter=false;
 const xpath = $(this).attr('xpath');
 var ih = getElementByXPath(xpath);
 
 var title = `This is ${obj.name}`;
 let playDesc = `Description ${obj.description}`;
 playIntro(title,playDesc);
       introJs().setOptions({
         steps: [{
           element: ih,
           intro: des
         }]
       }).start();
});

$(document).on('click','#main_tabs_ul',async function(){
 let response = await getAllModule();
 let html = '';
 let enId = 0;
 const href = window.location.pathname+window.location.search;
 console.log(href);
 const obj = JSON.parse(response);
 for(let i = 0; i < obj.length; i++){
   if (obj[i].is_parent==1) {
     if (obj[i].nav_link==href) {
       localStorage.setItem('href', obj[i].nav_link);
       localStorage.setItem('id', 'f-'+obj[i].id);
       enId = obj[i].id;
     }
     
   html+= `<li  class="draggable ">
        <div class="flex space-between vcenter sub-list-header">
         <div id="f-${obj[i].id}" module-id="${obj[i].id}" class="click-main-module-list ${obj[i].nav_link==href ?'green-color':''}"><i class="fa fa-plus"></i> ${obj[i].title}</div>
         <div class="buttons">     
           <a class="delete-btn mark-sub-module" xpath="#" href="javascript:;" sub-id="${obj[i].id}"  title="Add section"><i class="fa-solid fa-plus green-color"></i> sub &nbsp</a>
           <a class="delete-btn wiyse-add-content" xpath='${obj[i].xpath}' href="javascript:;" sub-id="${obj[i].id}"  title="Add Sub Module"><i class="fa-solid fa-plus green-color"></i> content &nbsp </a>
           <a class="delete-btn delete-module" tab-id="${obj[i].id}" href="javascript:;" title="delete"><i class="fa fa-trash red-color"></i></a>
         </div>
      </div>
      <ul style="margin-left: 25px;
      margin-top: 5px;" id="s-${obj[i].id}">
           
      </ul>
 </li>`;
  }
 }
 $("#main_module_ul").html(html);
 for(let i = 0; i < obj.length; i++){
   if (obj[i].is_parent!=1) {
     if (obj[i].nav_link==href) {
       localStorage.setItem('href', obj[i].nav_link);
       localStorage.setItem('id', 'f-'+obj[i].id);
       enId = obj[i].id;
     }
   html = `<li  class="draggable">
   <div class="flex space-between vcenter sub-list-header">
     <div id="f-${obj[i].id}" module-id="${obj[i].id}"  class="click-main-module-list ${obj[i].nav_link==href?'green-color':''}"> ${obj[i].title}</div>
     <div class="buttons">     
       <a class="delete-btn" xpath="#" href="javascript:;" onclick="markSubModule(${obj[i].id});" title="Add section"><i class="fa-solid fa-plus green-color"></i> sub &nbsp</a>
       <a class="delete-btn" xpath='${obj[i].xpath}' href="javascript:;" onclick="addModuleContentStep(this,9,${obj[i].id});" title="Add Sub Module"><i class="fa-solid fa-plus green-color"></i> content &nbsp </a>
       <a class="delete-btn delete-module" tab-id="${obj[i].id}" href="javascript:;" title="delete" ><i class="fa fa-trash red-color"></i></a>
     </div>
 </div>
 <ul style="margin-left: 35px;
      margin-top: 5px;" id="s-${obj[i].id}">
           
      </ul>
 </li>`;
 $("#s-"+obj[i].parent_id).append(html);
  }
 }
 if (enId===0) {
   let lc = localStorage.getItem('id');
   $("#"+lc).removeClass('wiyse-disabled');
   $("#"+lc).addClass('green-color');
 }
});



$(document).on('click','.actionclick',async function(){
 const sid = $(this).attr('div-id');
 enableHighlighter=false;
 const xpath = $(this).attr('xpath');
 var ih = getElementByXPath(xpath);
 console.log(ih.getAttribute("href"));
 var title = `Ok`;
 const notfound = 'we did not found any description';
 let playValue = `${ih.getAttribute("href") }`;
 playAction(title,playValue);
       
});

$(document).on('click','.actionfunct',async function(){
 const sid = $(this).attr('div-id');
 let response = await get_data_by_steps(sid);
 const obj = JSON.parse(response);
 console.log(obj);
 // let des = `Description </br> ${obj.description}.`;
 // if (obj.description==null) {
 //    des = `Description was not found`;
 // }
 // enableHighlighter=false;
 // const xpath = $(this).attr('xpath');
 // var ih = getElementByXPath(xpath);
 
 // var title = `This is ${obj.name}`;
 // let playDesc = `Description ${obj.description}`;
 // playIntro(title,playDesc);
 //       introJs().setOptions({
 //         steps: [{
 //           element: ih,
 //           intro: des
 //         }]
 //       }).start();
});

function getFundamentalsByUrl(url){
 return new Promise((resolve, reject) => {
   $.post(apiBase+"fundamentals/get_data_by_url", 
   { url: url }, function(result){
     if(result){
        resolve(result);
     }
     else{
       reject("error");
     }
     
 }); 
 });
 
}
function getActionsByUrl(url){
 return new Promise((resolve, reject) => {
   $.post(apiBase+"functionalities/get_actions_by_url", 
   { url: url }, function(result){
     if(result){
        resolve(result);
     }
     else{
       reject("error");
     }
     
 }); 
 });
}

function getAllModule(){
 return new Promise((resolve, reject) => {
   $.post(apiBase+"fundamentals/get_module", 
   { url: 'all' }, function(result){
     if(result){
        resolve(result);
     }
     else{
       reject("error");
     }
     
 }); 
 });
}
function getModuleById(id){
 return new Promise((resolve, reject) => {
   $.post(apiBase+"fundamentals/get_module_by_id", 
   { id: id }, function(result){
     if(result){
        resolve(result);
     }
     else{
       reject("error");
     }
     
 }); 
 });
}

function myFunction(item, index, arr) {
 arr[index] = item.name * 10;
}
$(".bot-close").click(function(){
  $(".bot-popup").removeClass("open");
});

$(".bot-footer .fa-microphone").click(function(){
  $(".voice-indicator").removeClass("hide");
  $(this).addClass("hide");
  $(".asked-text span").removeClass("hide");
  $(".bot-footer .fa-keyboard").removeClass("hide");
  $(".typing-indicator").addClass("hide");
  setTimeout(function(){
    $(".voice-indicator").addClass("hide");
    $(".bot-footer .fa-microphone").removeClass("hide");
    }, 5000);
  setTimeout(function(){
    $(".results").removeClass("hide");
  }, 6000);
});
$(".results").click(function(){
  $(this).addClass("hide");
});

$(".bot-footer .fa-keyboard").click(function(){
  $(this).addClass("hide");
  $(".asked-text span").addClass("hide");
  $(".typing-indicator").removeClass("hide");
  $(".voice-indicator").addClass("hide");
});

$(".bot-footer .fa-bars").click(function(){
  $(".side-modal").toggleClass("open");
});
$("#main-screen").mouseover(function(){
   $(".alanBtn").removeClass("w-hide");
   $(".alanBtn").addClass("w-hide");
 });

$(".main .overview .card").click(function(){
  $(".try-content .main").addClass("hide");
  $(".try-content .sub-category").removeClass("hide");
});
$(".backtomain").click(function(){
  $(".try-content .main").removeClass("hide");
  $(".try-content .sub-category").addClass("hide");
});
$(".try-content .sub-category .card").click(function(){
  $(".try-content .sub-category").addClass("hide");
  $(".try-content .detail").removeClass("hide");
});
$(".backtosub").click(function(){
  $(".try-content .detail").addClass("hide");
  $(".try-content .sub-category").removeClass("hide");
});
$(".list-header").click(function(){
  $(this).next('.accordian').slideToggle();
});
$(".tools-content .sub-category .card").click(function(){
  $(".tools-content .sub-category").addClass("hide");
  $(".tools-content .detail").removeClass("hide");
});
$(".backtosub1").click(function(){
  $(".tools-content .detail").addClass("hide");
  $(".tools-content .sub-category").removeClass("hide");
});
$(".close-side-modal").click(function(){
  $(".side-modal").toggleClass("open");
});
$(".menu .try").click(function(){
  $(".tools-content").addClass("hide");
  $(".notification-content").addClass("hide");
  $(".try-content").removeClass("hide");
  $(".try-content > div").addClass("hide");
  $(".try-content .main").removeClass("hide");
});
$(".menu .tools").click(function(){
  $(".tools-content").removeClass("hide");
  $(".tools-content > div").addClass("hide");
  $(".tools-content .sub-category").removeClass("hide");
  $(".try-content").addClass("hide");
  $(".notification-content").addClass("hide");
});
$(".menu .notifications").click(function(){
  $(".notification-content").removeClass("hide");
  $(".notification-content > div").addClass("hide");
  $(".notification-content .sub-category").removeClass("hide");
  $(".try-content").addClass("hide");
  $(".tools-content").addClass("hide");
});
$(".update").click(function(){
  $(".notification-content .categories > *").addClass("hide");
  $(".upgrade-section").removeClass("hide");
});
$(".alerts").click(function(){
  $(".notification-content .categories > *").addClass("hide");
  $(".notification-list").removeClass("hide");
});
$(".nav-tab li").click(function(){
  $(".nav-tab li").removeClass("active");
  $(this).addClass("active");
});
$(".fa-play").click(function(){
  $(this).toggleClass("pause");
});


$(document).on('click','.click-main-module-list',async function(e){
  let id = $(this).attr("module-id");
  let response = await getModuleById(id);
 const obj = JSON.parse(response);
 const html = `<li class="top-tab" id="click_back_module" ><i class="fa fa-arrow-left" aria-hidden="true"></i></li>
 <li class="top-tab" id="load-main-module" module-id="${obj.id}"><i class="fa-solid fa-setting"></i> <a href="javascript:;" id="main"></a> ${obj.title}</a></li>
 `;
 $("#main-tabs-id").show();
 $("#fundamentals_section").removeClass("hide");
 $("#main_tabs_ul").html(html);
 $("#main_module_ul").addClass("hide");
 $("#load-fundamentals").click();
 
});

// async function clickMainModuleList(id) {
//  let response = await getModuleById(id);
//  const obj = JSON.parse(response);
//  const html = `<li class="top-tab" onclick="clickBackToModule()"><i class="fa fa-arrow-left" aria-hidden="true"></i></li>
//  <li class="top-tab" id="load-main-module" module-id="${obj.id}"><i class="fa-solid fa-setting"></i> <a href="javascript:;" id="main"></a> ${obj.title}</a></li>
//  `;
//  $("#main-tabs-id").removeClass("hide");
//  $("#fundamentals_section").removeClass("hide");
//  $("#main_tabs_ul").html(html);
//  $("#main_module_ul").addClass("hide");
//  $("#load-fundamentals").click();
// }
$(document).on('click','#click_back_module',async function(e){
  $("#content_popup").remove();
  const html = `<li class="top-tab active" id="load-main-module"><i class="fa-solid fa-setting"></i> <a href="javascript:;" id="main"></a>Main Module</a></li>
  <li class="add-tabs-module"><i class="fa-solid fa-circle-plus"></i></li>`;
  $("#main-tabs-id").hide();
  $("#fundamentals_section").addClass("hide");
  $("#main_tabs_ul").html(html);
  $("#main_module_ul").removeClass("hide");
});

// function clickBackToModule(){
//  $("#content_popup").remove();
//  const html = `<li class="top-tab active" id="load-main-module"><i class="fa-solid fa-setting"></i> <a href="javascript:;" id="main"></a>Main Module</a></li>
//  <li class="add-tabs-module"><i class="fa-solid fa-circle-plus"></i></li>`;
//  $("#main-tabs-id").addClass("hide");
//  $("#fundamentals_section").addClass("hide");
//  $("#main_tabs_ul").html(html);
//  $("#main_module_ul").removeClass("hide");
// }
function startBot() {
   alanBtnInstance.activate();
}

//dragable function start

$( function() {
 $( "#main_tabs_ul" ).click();
} );


function addFreeText(id){
 const ele = $('#select-box-h');
 const slarea= $('#select-box-text_area');
 slarea.val('');
 $("#save_content_module").attr("btn-id","save_content_module");
 $('#save_content_module').removeAttr('id');
 ele.removeClass('flex');
 ele.html('<h5 style="margin-bottom: 0px;">New Configuration</h5><br/><input type="text" name="textbox" id="text_kol"  placeholder="New question for configuration" value="">');

}
$(document).on('click','#edit-select',async function(e){
  const ele = $('#select-box-h');
 const slarea= $('#select-box-text_area');
 slarea.val('');
 $("#save_content_module").attr("btn-id","save_content_module");
 $('#save_content_module').removeAttr('id');
 ele.removeClass('flex');
 ele.html('<h5 style="margin-bottom: 0px;">New Configuration</h5><br/><input type="text" name="textbox" id="text_kol"  placeholder="New question for configuration" value="">');

});

function addFreeText2(id){
 const ele = $('#select-box-h');
 const slarea= $('#select-box-text_area');
 slarea.val('');
 $("#save_content2").attr("btn-id","save_content2");
 $('#save_content2').removeAttr('id');
 ele.removeClass('flex');
 ele.html('<h5 style="margin-bottom: 0px;">New Configuration</h5><br/><input type="text" name="textbox" id="text_kol"  placeholder="New question for configuration" value="">');

}

function addFreeTextFunda(id){
 const ele = $('#select-box-h');
 const slarea= $('#select-box-text_area');
 slarea.val('');
 $("#save_content").attr("btn-id","save_content");
 $('#save_content').removeAttr('id');
 ele.removeClass('flex');
 ele.html('<h5 style="margin-bottom: 0px;">New Configuration</h5><br/><input type="text" name="textbox" id="text_kol"  placeholder="New question for configuration" value="">');

}

// $(function() {
//   $.contextMenu({
//       selector: '.capture-section', 
//       callback: function(key, options) {
//           var m = "clicked: " + key;
//           window.console && console.log(m) || alert(m); 
//       },
//       items: {
//           "edit": {name: "Edit", icon: "edit"},
//           "cut": {name: "Cut", icon: "cut"},
//          copy: {name: "Copy", icon: "copy"},
//           "paste": {name: "Paste", icon: "paste"},
//           "delete": {name: "Delete", icon: "delete"},
//           "sep1": "---------",
//           "quit": {name: "Quit", icon: function(){
//               return 'context-menu-icon context-menu-icon-quit';
//           }}
//       }
//   });
//   $(document).on('click','.capture-section',async function(e){
//       console.log('clicked', this);
//   })    
// });


$(document).on("keypress",function(e) {
//console.log(texchat);
  var key = e.which;
  if (enableHighlighter) {

    if(key == 13)  // the enter key code
   {
    const mainTabId = $("#content_popup").attr("mainid");
    if (mainTabId!=1) {
      let selectBox = $("#select-box");
      const href = window.location.pathname+window.location.search;
      const selectPath = getXPathForElement(document.querySelector(".highlighted"));
      let text = $(".highlighted").text();
      const module_id = $("#load-main-module").attr("module-id");
      text = text.trim();
      text=text.replace(/^\s+|\s+$/gm,'');
      const sdata= {main_tab_id:mainTabId, module_id: module_id, url: href, name:text, xpath: selectPath};
      $.post(apiBase+"functionalities/add_tab_title", 
      sdata, function(result){
        if(result>0){
          alert('Added Successfully!');
          backToTab(1,1);
        }else{
          alert('You have already marked this step as start');
        }
    });
    }
    else{
      let text = $(".highlighted").text();
  const tabId  = $('#aside2-funda').attr("tab-id");
  const href = window.location.pathname+window.location.search;
  const module_id = $("#load-main-module").attr("module-id");
  const description = $("#funda-description").val();
  const selectPath = getXPathForElement(document.querySelector(".highlighted"));
  text = text.trim();
  text=text.replace(/^\s+|\s+$/gm,'');
        e.preventDefault();

        const data = {main_tab_id:tabId, module_id: module_id, xpath:selectPath,description:'',url:href,name:text};
        console.log(data);
          $.post(apiBase+'fundamentals/save_mark_funda', data, function(returnedData) {
            // do something here with the returnedData
            if(returnedData){
              // console.log(returnedData);
              alert(returnedData);
              $('[class="a2-content-tab active"]').trigger("click");
              
            }
        });
    }
  
     return false;  
   }
  }
  
});