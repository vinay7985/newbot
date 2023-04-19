const apiBase = "https://www.wiyse.com/hubspot/api/";
let enableHighlighter = false;
var stepIntro ={};
$(document).on('click','.maximize-btn',function(){
  $(".side-bar").toggleClass("max");
  $(".side-bar").addClass("open");
});
const showAlert = () =>{
  alert('hello_app');
}

$("ul.menu li").click(function(){
  //$(".side-bar").toggleClass("open");
});
function TogglePanel(){
  $(".side-bar").toggleClass("open");
  $(".side-bar").removeClass("max");
}


function _x(STR_XPATH) {
  var xresult = document.evaluate(STR_XPATH, document, null, XPathResult.ANY_TYPE, null);
  var xnodes = [];
  var xres;
  while (xres = xresult.iterateNext()) {
      xnodes.push(xres);
  }

  return xnodes;
}

$(document).on('click','ul.menu .active',function(){
  $(".side-bar").toggleClass("open");
  $(".side-bar").removeClass("max");
  //$(".side-bar").removeClass("open max");
  //$(".side-bar").removeClass("open");
 //$(this).removeClass("active");
});

// $(document).on('click','.add-tab',function(){
//   $(".fundamental-popup").show();
// });
$(document).on('load','.alanBtn',function(){
  $(".alanBtn").removeClass('w-hide');
  $(".alanBtn").addClass('w-hide');
});
$(document).on('click','.close-popup',function(){
  $(".popup").hide();
  $(".popup-input").val('');
  $("#popup-error").html('');
});

$(document).on('click','.record-btn',function(){
  $(".recording-popup").show();
});

$(document).on('click','.sub-list-header',function(){
  $(this).next('.accordian').slideToggle();
  $(this).children("fa-angle-down").toggleClass('open');
});

$(document).on('click','.fa-play',function(){
  $(this).toggleClass("pause");
});

//rajesh
$(document).on('click','#load-fundamentals',function(){
  const apiURL = apiBase;
  $(".top-tab").removeClass("active");
  $(this).addClass("active");
  $("#fundamentals-main-tab").html('');
 $.ajax({url: apiURL+"fundamentals/get_tabs", 
        success: function(result) {
        if(result){
           const obj = JSON.parse(result);
           var i=1;
          $.each(obj, function(idx, tab){
            var f = (i==1? 'active' : '');
            $('#fundamentals-main-tab').append('<li class="load-fundamentals-tabs f-tab '+f+ '" tab-id="'+tab.id+'"><i class="'+tab.icon+'"></i> '+tab.name+'</li>');
           i++;
         });
           $("#fundamentals-main-tab").append('<li class="add-tab"><i class="fa-solid fa-circle-plus"></i></li>');
        $('[class="f-tab active"]').trigger("click");
        addPopup(1);
        load_select_tab(1);
        $('[class="load-fundamentals-tabs f-tab active"]').click();
        }
        else{
            $("#detail_tab_fundamentals").html(result);
        }
    }});
});

// function loadFundamentals(e){
//   const apiURL = apiBase;
//   $(".top-tab").removeClass("active");
//   $(e).addClass("active");
//   $("#fundamentals-main-tab").html('');
//  $.ajax({url: apiURL+"fundamentals/get_tabs", 
//         success: function(result) {
//         if(result){
//            const obj = JSON.parse(result);
//            var i=1;
//           $.each(obj, function(idx, tab){
//             var f = (i==1? 'active' : '');
//             $('#fundamentals-main-tab').append('<li class="f-tab '+f+ '" onclick="loadFundamentalsTabs(this,'+tab.id+')"><i class="'+tab.icon+'"></i> '+tab.name+'</li>');
//            i++;
//          });
//            $("#fundamentals-main-tab").append('<li class="add-tab"><i class="fa-solid fa-circle-plus"></i></li>');
//         $('[class="f-tab active"]').trigger("click");
//         addPopup(1);
//         load_select_tab(1);
//         }
//         else{
//             $("#detail_tab_fundamentals").html(result);
//         }
//     }});
// }

function firstTab(e,id){
  $(".sub-tab-list").removeClass("active");
  $(e).addClass("active");
  $.post(apiBase+"fundamentals/get_sub_section", 
    { id: id }, function(result){
      if(result){
         $("#tabs-sections").html(result);
      }else{
        $("#tabs-sections").html('');
      }
      
  }); 
}


$(document).on('click','.load-fundamentals-tabs',function(){
  $(".f-tab").removeClass("active");
  $(this).addClass("active");
  let id = $(this).attr("tab-id");
  let module_id = $("#load-main-module").attr("module-id");
  //ajax
  $.post(apiBase+"fundamentals/get_tab_section", 
    { id: id, module_id: module_id }, function(result){
      if(result != ''){
         $("#fundamentals-tab-section").html(result);
          var f_tab = $('[class="sub-tab-list active"]');
          var f_tab_id = f_tab.attr('id');
          $(".alanBtn").removeClass('w-hide');
          $(".alanBtn").addClass('w-hide');
          firstTab(f_tab,f_tab_id);
      }else{
        $("#fundamentals-tab-section,#tabs-sections").html('');
      }
      
  });
});


//  function loadFundamentalsTabs(e,id){
//   $(".f-tab").removeClass("active");
//   $(e).addClass("active");
//   let module_id = $("#load-main-module").attr("module-id");
//   //ajax
//   $.post(apiBase+"fundamentals/get_tab_section", 
//     { id: id, module_id: module_id }, function(result){
//       if(result != ''){
//          $("#fundamentals-tab-section").html(result);
//           var f_tab = $('[class="sub-tab-list active"]');
//           var f_tab_id = f_tab.attr('id');
//           $(".alanBtn").removeClass('w-hide');
//           $(".alanBtn").addClass('w-hide');
//           firstTab(f_tab,f_tab_id);
//       }else{
//         $("#fundamentals-tab-section,#tabs-sections").html('');
//       }
      
//   });
//  }


 function contentcheck(e,section){
  var checkBox = document.getElementById(e.id);
  var t_value=$("#"+e.id).parent().siblings('.textarea').find("textarea").val();
  console.log(t_value);
  if (checkBox.checked == true){
    $("#entity-content-"+section).append('<span>'+t_value+'...</span>');
  } 
 }


function deleteFundamentalsSubTabs(id){
  var conf = confirm("Want to delete?");
  if (conf) {
      $.post(apiBase+"fundamentals/delete_fundamentals_tab", 
      { id: id }, function(result){
      if(result==1){
        if ($('[class="sub-tab-list active"]')[0]){
              $("#tabs-sections").html('');
              $('[class="f-tab active"]').trigger("click");
          } else {
              $('[class="f-tab active"]').trigger("click");
          }
         
      }
      
  }); 
  }
  
}

function edit_text_content(section){
  //var textcontent = $("#entity-content-"+section).text();
   $('#textarea_'+section).prop('disabled', false);
   //$('#textarea_'+section).val(textcontent);
}
// $("#fundamentals").click(function(){
// alert('hi');
//   $.ajax({url: apiURL+"fundamentals/get_tabs", 
//         success: function(result) {
//         if(result){
//             $("#fundamentals_section").html(result);
//         }
//         else{
//             $("#detail_tab_fundamentals").html(result);
//         }
//     }});
// });


$(document).on('click','.fundamental-list-toggle',function(){
  $(this).next('.list-content').slideToggle();
  $(this).children(fa-angle-down).toggleClass('open');
});

$(document).on('click','.fundamentals-search',function(){
     $("#search_view").show(); 
});
$(document).on('click','.close-data-popup',function(){
  $("#content_popup").hide(); 
});
$(document).on('click','.close-content-data',function(){
  $("#select-actions").hide(); 
});
function save_tab_section(id,section){
   var html = $("#entity-content-"+section).html(); 
     $.post(apiBase+"fundamentals/save_tab_section", 
     { id: id , section: section, description: html}, function(result){
      if(result){
        $("#section-tab-notice-"+section).removeClass("wiyse-error");
        $("#section-tab-notice-"+section).addClass("wiyse-success");
        $("#section-tab-notice-"+section).html('Data saved successfully!');
        //$('#textarea_1').prop('disabled', true);
      }else{
        $("#fundamentals-tab-section").html('');
      }
      
  });
}
 



$(document).on('click','#save_fundamentals',function(){
  var concept = $("#input_concept");
  var feature = $("#input_feature");
  var capability = $("#input_capability");
  if(concept.val() == '' && feature.val() == '' && capability.val() == ''){
    $("#popup-error").removeClass("wiyse-success");
    $("#popup-error").addClass("wiyse-error");
    $("#popup-error").html('error: enter atleast one value in field');
    return false;
  }
  $.post(apiBase+"fundamentals/add_tab_step", 
    {concept: concept.val(), feature: feature.val(), capability: capability.val()}, function(result){
      if(result>0){
        concept.val('');
        feature.val('');
        capability.val('');
        $("#popup-error").removeClass("wiyse-error");
        $("#popup-error").addClass("wiyse-success");
        $("#popup-error").html('success: saved in fundamentals');
        $('[class="f-tab active"]').trigger("click");
      }
      
  });
      
});


$("#search_panel_button").click(function(){
  $("#search_view").hide();
});

var loadcontent = false;
$(document).ready(function(){
  if(loadcontent==false){
    $("#load-fundamentals").trigger("click");
    loadcontent = true;
  }
});
// var i_tab = $('[class="load-fundamentals-tabs f-tab active"]');
// loadFundamentalsTabs(i_tab,1);


//functionalities

// function loadFunctionalities(e){
//   $(".top-tab").removeClass("active");
//   $(e).addClass("active");
//   const apiURL = apiBase;
//   $("#fundamentals-main-tab").html('');
//  $.ajax({url: apiURL+"functionalities/get_tabs", 
//         success: function(result) {
//         if(result){
//            const obj = JSON.parse(result);
//            var i=1;
//           $.each(obj, function(idx, tab){
//             var f = (i==1? 'active' : '');
//             $('#fundamentals-main-tab').append('<li class="f-tab '+f+ '" onclick="loadFunctionalitiesTabs(this,'+tab.id+')"><i class="'+tab.icon+'"></i> '+tab.name+'</li>');
//            i++;
//          });
//            $("#fundamentals-main-tab").append('<li class="add-tab"><i class="fa-solid fa-circle-plus"></i></li>');
//         $('[class="f-tab active"]').trigger("click");
//         addPopup(2);
//         load_select_tab(2);
//         }
//         else{
//             $("#detail_tab_fundamentals").html(result);
//         }
        
//     }});
// }

$(document).on('click','#load-functionalities',function(){
  $(".top-tab").removeClass("active");
  $(this).addClass("active");
  const apiURL = apiBase;
  $("#fundamentals-main-tab").html('');
 $.ajax({url: apiURL+"functionalities/get_tabs", 
        success: function(result) {
        if(result){
           const obj = JSON.parse(result);
           var i=1;
          $.each(obj, function(idx, tab){
            var f = (i==1? 'active' : '');
            $('#fundamentals-main-tab').append('<li class="load-functionalities-tab f-tab '+f+ '"  tab-id="'+tab.id+'"><i class="'+tab.icon+'"></i> '+tab.name+'</li>');
           i++;
         });
           $("#fundamentals-main-tab").append('<li class="add-tab"><i class="fa-solid fa-circle-plus"></i></li>');
        $('[class="load-functionalities-tab f-tab active"]').trigger("click");
        addPopup(2);
        load_select_tab(2);
        }
        else{
            $("#detail_tab_fundamentals").html(result);
        }
        
    }});
});


function save_functionalities(){
  var action = $("#input_action");
  var workflow = $("#input_workflow");
  var dashboard = $("#input_dashboard");
  var report = $("#input_report");
  var setup = $("#input_setup");
  var manage = $("#input_manage");
  if(action.val() == '' && workflow.val() == '' && dashboard.val() == '' && report.val() == '' && setup.val() == '' && manage.val() == ''){
    $("#popup-error").removeClass("wiyse-success");
    $("#popup-error").addClass("wiyse-error");
    $("#popup-error").html('error: enter atleast one value in field');
    return false;
  }
  $.post(apiBase+"functionalities/add_tab_step", 
    {action: action.val(), workflow: workflow.val(), dashboard: dashboard.val(), report: report.val(), setup: setup.val(), manage: manage.val()}, function(result){
      if(result>0){
        $(".popup-input").val('');
        $("#popup-error").removeClass("wiyse-error");
        $("#popup-error").addClass("wiyse-success");
        $("#popup-error").html('success: saved in fundamentals');
        $('[class="f-tab active"]').trigger("click");
      }
      
  });
}

function deleteFunctionalitiesSubTabs(id){
  var conf = confirm("It will delete all related data. Want to delete?");
  if (conf) {
      $.post(apiBase+"functionalities/delete_functionalities_tab", 
      { id: id }, function(result){
      if(result==1){
        if ($('[class="sub-tab-list active"]')[0]){
              $("#tabs-sections").html('');
              $('[class="f-tab active"]').trigger("click");
          } else {
              $('[class="f-tab active"]').trigger("click");
          }
         
      }
      
  }); 
  }
  
}


      
// function loadFunctionalitiesTabs(e,id){
//   $(".f-tab").removeClass("active");
//   $(e).addClass("active");
//   let module_id = $("#load-main-module").attr("module-id");
//   //ajax
//   $.post(apiBase+"functionalities/get_tab_section", 
//     { id: id, module_id: module_id }, function(result){
//       if(result){
//          $("#fundamentals-tab-section").html(result);
//           var f_tab = $('[class="sub-tab-list active"]');
//           var f_tab_id = f_tab.attr('id');
//           secondTab(f_tab,f_tab_id);
//       }else{
//         $("#fundamentals-tab-section,#tabs-sections").html('');
//       }
      
//   });
//  }


 $(document).on('click','.load-functionalities-tab',function(){
  const id = $(this).attr("tab-id");
  $(".f-tab").removeClass("active");
  $(this).addClass("active");
  let module_id = $("#load-main-module").attr("module-id");
  //ajax
  $.post(apiBase+"functionalities/get_tab_section", 
    { id: id, module_id: module_id }, function(result){
      if(result){
         $("#fundamentals-tab-section").html(result);
          var f_tab = $('[class="sub-tab-list active"]');
          var f_tab_id = f_tab.attr('id');
          secondTab(f_tab,f_tab_id);
      }else{
        $("#fundamentals-tab-section,#tabs-sections").html('');
      }
      
  });
});

function secondTab(e,id){
  $(".sub-tab-list").removeClass("active");
  $(e).addClass("active");
  $.post(apiBase+"functionalities/get_sub_section", 
    { id: id }, function(result){
      if(result){
         $("#tabs-sections").html(result);
         $('[class="knowledge-base-tab active"]').trigger("click");
         
      }else{
        $("#tabs-sections").html('');
      }
      
  }); 
}

function addPopup(e){
   
  $.post(apiBase+"functionalities/add_sub_tab_html", 
    {section: e }, function(data){
      if(data){
        $("#add-popup").html(data);
      }
      
  });
}







function stopCapturing(e,boll,id) {
  if(boll == false){
   $(e).html('Turn off Capture');
  }else{
    $(e).html('Turn on Capture');
  }
  let el = document.getElementById("select-box");
    setEleAttribute(el,'tab-id',id);
  enableHighlighter = boll == false ? true: false;
}
function markStep(el) {
 
  let selectBox = $("#select-box");
  const href = window.location.pathname+window.location.search;
  const selectPath = selectBox.attr("wiyse-select-path");
  let text = getElementByXPath(selectPath).textContent;
  text = text.trim();
  text=text.replace(/^\s+|\s+$/gm,'');
      const tabId  = $("#aside2-funda-content").attr("tab-id");
      const html = getElementByXPath(selectPath).innerHTML;
      const data = {tab_id:tabId,select_path:selectPath,mark_value:el,url:href,html:html,text:text};
      $.post(apiBase+'functionalities/save_mark_step/', data, function(returnedData) {
        // do something here with the returnedData
        if(returnedData){
          $('[class="sub-tab-list active"]').trigger("click");
          alert(returnedData);
        }
    });
  
 return false;
}

function markStepSpacebar(el) {
  let selectBox = $("#select-box");
  const href = window.location.pathname+window.location.search;
  const selectPath = getXPathForElement(document.querySelector(".highlighted"));
  let text = $(".highlighted").text();
  text = text.trim();
  text=text.replace(/^\s+|\s+$/gm,'');
      const tabId  = $("#aside2-funda-content").attr("tab-id");
      const html = getElementByXPath(selectPath).innerHTML;
      const data = {tab_id:tabId,select_path:selectPath,mark_value:el,url:href,html:html,text:text};
      $.post(apiBase+'functionalities/save_mark_step/', data, function(returnedData) {
        // do something here with the returnedData
        if(returnedData){
          $('[class="sub-tab-list active"]').trigger("click");
          alert(returnedData);
        }
    });
  
 return false;
}

function viewMarkStep(id){

    $.post(apiBase+"functionalities/get_cache_tab", 
     { id: id }, function(result){
      if(result){
        var ih = getElementByXPath(result);
        introJs().setOptions({
          steps: [{
            element: ih,
            intro: "This is introduction!"
          }]
        }).start();
        
        // $('#viewStepModal').html(result);
        // $('#viewStepModal').modal('show');
      }else{
        $("#fundamentals-tab-section").html('');
      }
      
  });
     
  }

 function viewAllMarkStep(id){
  var playTo =[];
  $.post(apiBase+"functionalities/get_all_tab_xpath", 
    {id: id }, function(data){
      if(data){
        introStep=[];
        var obj = JSON.parse(data);
        obj.forEach(function(item) {
          var ih = getElementByXPath(item.element);
          var onPlay = {xpath: item.element, description: item.intro};
          var oneObj = {element: ih, intro: item.intro};
          playTo.push(onPlay);
          introStep.push(oneObj);
        });
        TogglePanel();
        playIntroAll('Ok',playTo);
        introJs().setOptions({
          showButtons: false,
          steps: introStep
        }).start();
      }
      
  });
   
 }

 function viewAllMarkStepBot(id){
  var playTo =[];
  $.post(apiBase+"functionalities/get_all_tab_xpath", 
    {id: id }, function(data){
      if(data){
        introStep=[];
        var obj = JSON.parse(data);
        obj.forEach(function(item) {
          var ih = getElementByXPath(item.element);
          var onPlay = {xpath: item.element, description: item.intro};
          var oneObj = {element: ih, intro: item.intro};
          playTo.push(onPlay);
          introStep.push(oneObj);
        });
        $(".bot-popup").removeClass("open");
        playIntroAll('Ok',playTo);
        introJs().setOptions({
          showButtons: false,
          steps: introStep
        }).start();
      }
      
  });
   
 }
 
window.addEventListener('mouseover',function(e) {
  if(e.target)
  if (enableHighlighter == true) {
    preventEvent("mouseover");
    if(e.target.tagName == 'A'){
      hrefRemoveOne(e.target);
    }
    addHighlight(e.target);
  }
});
window.addEventListener('mouseout',function(e) {
  if (enableHighlighter == true) {
    if(e.target.tagName == 'A'){
    hrefUpdateOne(e.target);
  }
    removeHighlight(e.target);
  }
});

function getOffsetLeft( elem )
{
    var offsetLeft = 0;
    do {
      if ( !isNaN( elem.offsetLeft ) )
      {
          offsetLeft += elem.offsetLeft;
      }
    } while( elem = elem.offsetParent );
    return offsetLeft;
}
function getOffsetTop( elem )
{
    var offsetTop = 0;
    do {
      if ( !isNaN( elem.offsetTop ) )
      {
          offsetTop += elem.offsetTop;
      }
    } while( elem = elem.offsetParent );
    return offsetTop;
}

$(document).on('click','.highlighted',function(e) {
  if (enableHighlighter == true) {
    //console.log(e.target.offsetWidth,e.target.offsetHeight, getOffsetLeft(e.target), getOffsetTop(e.target));
    var elements = document.getElementsByClassName("highlighted");
    const cssRect = addSelectBox(e.target);
    const path = getXPathForElement(e.target);
    const selectBox = document.getElementById("select-box");
    setEleAttribute(selectBox,'wiyse-select-path',path);
    $("#content_popup").show();
    $("#select-actions").show(); 
    //alert(getElementByXPath(path).innerHTML);
  }
});

function getXPathForElement(element) {
  const idx = (sib, name) => sib 
      ? idx(sib.previousElementSibling, name||sib.localName) + (sib.localName == name)
      : 1;
  const segs = elm => !elm || elm.nodeType !== 1 
      ? ['']
      : elm.id && document.getElementById(elm.id) === elm
          ? [`id("${elm.id}")`]
          : [...segs(elm.parentNode), `${elm.localName.toLowerCase()}[${idx(elm)}]`];
  return segs(element).join('/');
}

function getElementByXPath(path) { 
  return (new XPathEvaluator()) 
      .evaluate(path, document.documentElement, null, 
                      XPathResult.FIRST_ORDERED_NODE_TYPE, null) 
      .singleNodeValue; 
} 
function getElementByXPathIframe(path,documentEle) { 
  return (new XPathEvaluator()) 
      .evaluate(path, documentEle.documentElement, null, 
                      XPathResult.FIRST_ORDERED_NODE_TYPE, null) 
      .singleNodeValue; 
} 


var generateQuerySelector = function(el) {
  if (el.tagName.toLowerCase() == "html")
      return "HTML";
  var str = el.tagName;
  str += (el.id != "") ? "#" + el.id : "";
  if (el.className) {
      var classes = el.className.split(/\s/);
      for (var i = 0; i < classes.length; i++) {
          if (classes[i]!='highlighted') {
            str += "." + classes[i]
          }
          
      }
  }
  return generateQuerySelector(el.parentNode) + " > " + str;
}


// $(document).ready(function(){
//   $(".highlighted").click(function(){
//     console.log('yes');
//    alert('hh');
//  });
// });
// document.addEventListener('click', function(e) { 
//   let enableHihlighter = false;
// }); 

function saveStepTitle(slug,id) {
    const title = document.getElementById('wiyse_title');
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        showFunctionalities(slug,id);
        addActiveClassById(slug,id);
    }
    xhttp.open("POST", apiBase+"functionalities/save_tab");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("id="+id+"&title="+title.value);
  }
  function deleteTab(slug,id,groupId){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        showFunctionalities(slug,groupId);
        addActiveClassById(slug,groupId);
    }
    xhttp.open("POST", apiBase+"functionalities/delete_tab");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("id="+id);
  }
  function startEndCapture(id,btnId){
    let el = document.getElementById("select-box");
    setEleAttribute(el,'tab-id',id);
    addFirstStep();
          
  }
  function middleStep(id){
    alert(id);
  }
  function knowledgeBase(id){
    alert(id);
  }

   function addFirstStep(){
    enableHighlighter = true;
  }

  function hrefAdd(){
    const nodes = document.getElementsByTagName("a");
     for(var i=0; i<nodes.length; i++){
      let href = nodes[i].getAttribute("wiyse-href");
      const att = document.createAttribute("href");
      att.value = href;
      nodes[i].setAttributeNode(att);
      nodes[i].removeAttribute("href");
     }
  }
  function hrefRemove(){
    const nodes = document.getElementsByTagName("a");
     for(var i=0; i<nodes.length; i++){
      let href = nodes[i].getAttribute("href");
      const att = document.createAttribute("wiyse-href");
      att.value = href;
      nodes[i].setAttributeNode(att);
      nodes[i].removeAttribute("href");
     }
  }
  function hrefRemoveOne(el){
    let href = el.getAttribute("href");
    const att = document.createAttribute("wiyse-href");
    att.value = href;
    el.setAttributeNode(att);
    el.href="javascript:;";
  }
  function hrefUpdateOne(el){
    if (el.hasAttribute("wiyse-href")) {
      let href = el.getAttribute("wiyse-href");
      el.setAttribute("href", href);
      el.removeAttribute("wiyse-href");
      return true;
    }
  }

  function addHighlight(target) {
      target.classList.add('highlighted');
      const element = document.getElementsByClassName("highlighted");
      const rect = element[0].getBoundingClientRect();
      addHighlighterContents(rect);
  }
  
    function removeHighlight(target) {
        target.classList.remove('highlighted');
        const ele =document.getElementById("wiyse-high-content")
        ele.style.display ="none"
    }
    function addHighlighterContents(rect) {
      const ele =document.getElementById("wiyse-high-content");
      if (rect.top<5) {
        rect.top =44;
      }
      ele.style.display ="block";
      ele.style.position ="absolute";
      ele.style.background  ="#2879ff";
      ele.style.top = rect.top-11+'px';
      ele.style.left = rect.left+'px';
      ele.style.color = "#fff";
      ele.style.border ="1px solid";
      ele.style.padding ="1px";
      ele.style.borderRadius  = "5px";
  }
  function removeAddHighlighterContents() {
    const ele =document.getElementById("wiyse-high-content")
        ele.innerHTML='';
        ele.style.display ="none"
  }
    function setEleAttribute(e,attr,v){
         const cAttr= document.createAttribute(attr);
         cAttr.value = v;
         e.setAttributeNode(cAttr);
    }
    function removeEleAttribute(e,attr){
      e.removeAttribute(attr);
    }
    function updateEleAttribute(e,attr,v){
      e.getAttribute(attr).value=v;
    }

    $( "#confirmMark" ).on( "click", function() {
      let checkvalue = $('input[name="start_end"]:checked').val();
      let selectBox = $("#select-box");
      const tabId  = selectBox.attr("tab-id");
      const href = window.location.href;
      const selectPath = selectBox.attr("wiyse-select-path");
      const html = getElementByXPath(selectPath).innerHTML;
      const text = getElementByXPath(selectPath).textContent;
      const data = {tab_id:tabId,select_path:selectPath,mark_value:checkvalue,url:href,html:html,text:text};
      $.post(apiBase+'functionalities/save_mark_step/', data, function(returnedData) {
        // do something here with the returnedData
        if(returnedData){
          alert(returnedData);
          markStep();
        }
    });
      
    });

    // document.addEventListener('click', function(e) { 
    //   var idvm = e.target.id;
    //   if(idvm == 'confirmvdata'){
    //     var pconcept = 1, pfeature = 1, pcapability = 1;
    //     let  elementm  = document.getElementById("mbody").innerHTML;
    //     let  elementT  = document.getElementById("mbody").innerText;
    //     let  conceptE  = document.getElementById("concepts");
    //     let  featureE  = document.getElementById("feature");
    //     let  capabilityE  = document.getElementById("capability");
    //     if(!conceptE.checked){
    //       pconcept  = 0;
    //     }
    //     if(!featureE.checked){
    //       pfeature  = 0;
    //     }
    //     if(!capabilityE.checked){
    //       pcapability  = 0;
    //     }
        
    //     var dataString = 'html_elements=' + elementm+ '&step_name='+elementT+'&concept='+pconcept + '&feature='+ pfeature+ '&capability='+ pcapability; 
    //     if(pconcept == 0 && pfeature == 0 && pcapability == 0 ){
    //       alert ('Please check at least one');
    //       return false;
    //     }else{
    //       $.ajax({
    //         type: "POST",
    //         url: "http://65.2.130.45/clynts/api/fundamentals/add_steps",
    //         data: dataString,
    //         cache: false,
    //         success: function(html) {
    //           alert(html+"  0-Not Saved, 1-Saved Success, 2-Already Exist");
            
    //         }
    //         });
        
    //     return false;
    //     }
        
    //   }else{
    //     tmY('highlighted');
    //   }
    //   });

      function loadDoc() {
            const xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
              alert('saved');
            }
            xhttp.open("POST", apiBase+"fundamentals/add_steps");
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send("fname=Henry&lname=Ford");
        }


    function tmY(highlighted){
      var elements = document.getElementsByClassName("highlighted");
      var mbody = document.getElementById("mbody");
      preventEvent("mouseover");
      mbody.innerHTML = elements[0].innerHTML;
      $('#exampleModal').modal('show');
      $('#exampleModal').modal('handleUpdate');
      return false;
    }
    preventEvent("mouseover");
    function preventEvent(event){
      $(".main-screen, #select-actions, #exampleModal,#slide,#takedt, #select-box, #functionality_steps_details,#content,#markStep").on('mouseover', function() {
        return false;
    });
    
    }
//  $(document).ready(function(){
//     $('#slide').click(function(){
//     var hidden = $('#takedt');
//     if (hidden.hasClass('visible')){
//         hidden.animate({"left":"-1000px"}, "slow").removeClass('visiblew');
//     } else {
//         hidden.animate({"left":"0px"}, "slow").addClass('visiblew');
//     }
//     });
// });

function addHoverBox(box) {
  const domRect = box.getBoundingClientRect();
  let data = "display:block; top: "+domRect.top+"px; width: "+domRect.width+"px; left: "+domRect.left+"px; height:"+domRect.height+"px;";
  document.getElementById("highlight-box").style.cssText = data;
}

function addSelectBox(box) {
  const domRect = box.getBoundingClientRect();
  let data = "display:block; top: "+getOffsetTop(box)+"px; width: "+domRect.width+"px; left: "+domRect.left+"px; height:"+domRect.height+"px;";
  document.getElementById("select-box").style.cssText = data;
}
function addSelectBoxIframe(box, iframe) {
  const domRect = box.getBoundingClientRect();
  const frameRect = iframe.getBoundingClientRect();
  const lf = parseFloat(domRect.left)+parseFloat(frameRect.left);
  let data = "display:block; top: "+getOffsetTop(box)+"px; width: "+domRect.width+"px; left: "+lf+"px; height:"+domRect.height+"px;";
  document.getElementById("select-box").style.cssText = data;
}
$(document).on('click','#remove-btn',function(){
  $('#pause').click();
  let data = "display:none; top: 0px; width: 0px; left: 0px; height:0px;";
  document.getElementById("select-box").style.cssText = data;
  enableHighlighter=false;
});

$(document).on('click','#remove-select',function(){
    $('#pause').click();
    let data = "display:none; top: 0px; width: 0px; left: 0px; height:0px;";
    document.getElementById("select-box").style.cssText = data;
    enableHighlighter=false;
});
// function removeSelectBox() {
//   $('#pause').click();
//   let data = "display:none; top: 0px; width: 0px; left: 0px; height:0px;";
//   document.getElementById("select-box").style.cssText = data;
//   enableHighlighter=false;
// }
$(document).on('click','#pause',function(){
  $(this).hide(); 
  $('.fundaplay').show(); 
  enableHighlighter=false;
});
$(document).on('click','.fundaplay',function(e){
  $(this).hide(); $('#pause').show(); 
  //startFirstStep(4);
  enableHighlighter=true;
  e.preventDefault();
 
});

window.addEventListener("click", myTFunction(77));

function myTFunction(tt) {
  console.log(tt);
} 


// window.addEventListener('mouseover',function(e) {
//   addHighlight(e.target);
// });

//Accordion in Modal
function accToggle(el) {
 
var acc = document.getElementsByClassName("wiyse-accordion");
var i;
for (i = 0; i < acc.length; i++) {
  el.classList.toggle("wiyse-active");
  var panel = el.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  } 
}
}
function accToggle2a(el) {
  var acc = document.getElementsByClassName("2a");
  var i;
  for (i = 0; i < acc.length; i++) {
    el.classList.toggle("wiyse-active");
    var panel = el.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
  }
function deleteCacheStep(id){
  if(confirm('Do you want to unmark this step?')){
    const xhttp = new XMLHttpRequest();
      xhttp.onload = function() {
        if (this.responseText==1) {
          $('[class="sub-tab-list active"]').trigger("click");
        }
          
      }
      xhttp.open("POST", apiBase+"functionalities/delete_cache_tab");
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("id="+id);
  }
  
}

$(document).on('click','.knowledge-base-tab',function(){
   let selectId = $(this);
    const tabId  = selectId.attr("list-id");
    $(".knowledge-base-tab").removeClass("active");
    $(".knowledge-base-tab").removeClass("pri-color");
    selectId.addClass("active");
    selectId.addClass("pri-color");
  $.post(apiBase+"functionalities/get_knowledge_base_tab", 
    { id: tabId }, function(result){
      if(result){
         $("#knowledge_base_tab").html(result);
      }else{
        $("#knowledge_base_tab").html('');
      }
      
  }); 
  
});


//knowledge Base

function loadKnowledgeBase(e){
  $(".top-tab").removeClass("active");
  $(e).addClass("active");
  $("#fundamentals-main-tab").html('');
 $.ajax({url: apiBase+"functionalities/get_knowledge_tabs", 
        success: function(result) {
        if(result){
           $("#fundamentals_section").html(result);
        }
        else{
            $("#fundamentals_section").html(result);
        }
        
    }});
}

//change 10/11 

$(document).on('click','.add-tab',function(){
  $("#select-popup").show();
  $(".alanBtn").hide();
});


function load_select_tab(tabId){
  if ($("#select-popup").length ) {
       $(".fundamental-popup").remove();
    }
 
  $.post(apiBase+"fundamentals/tabs_html_onload", 
    { id: tabId }, function(result){
      if(result){
        $(".fundamental-popup").remove();
         $("#main-screen").append(result);
      }
      
  }); 
 }
 
 $(document).on('click','.capture-popup',function(){
  let mainTabId = $(this).attr("main-id");
  let SubId = $(this).attr("wiyse-type-id");
  let url = '';
    const href = window.location.pathname+window.location.search;
    let module_id = $("#load-main-module").attr("module-id");
    let capture = false;
    $("#content_popup").remove();
    
    if (mainTabId == 1) {
      updateKeypressStack("fundamentals");
      url = apiBase+"fundamentals/tabs_content_html";
      capture = true;
      startFirstStep(0);
    }else{
      updateKeypressStack("functionalities");
      url = apiBase+"functionalities/tabs_content_html";
    }
    $.post(url, 
    { id: SubId, mainid: mainTabId, module_id: module_id, href: href }, function(result){
      if(result){
         $("#main-screen").append(result);
         $("#select-popup").hide();
         main_screen_toggle();
         let el = document.getElementById("aside2-funda");
          setEleAttribute(el,'tab-id',SubId);
         enableHighlighter = capture;
         $("#content_popup").show();
         if (mainTabId == 1){
          update_mark_text("#add-funda-tab",SubId);
         }
         
      }
      
  }); 
});


//  function capture_popup(mainTabId, SubId){
//     let url = '';
//     const href = window.location.pathname+window.location.search;
//     let module_id = $("#load-main-module").attr("module-id");
//     let capture = false;
//     $("#content_popup").remove();
//     if (mainTabId === 1) {
//       url = apiBase+"fundamentals/tabs_content_html";
//       capture = true;
//       startFirstStep(0);
//     }else{
//       url = apiBase+"functionalities/tabs_content_html";
//     }
//     $.post(url, 
//     { id: SubId, mainid: mainTabId, module_id: module_id, href: href }, function(result){
//       if(result){
//          $("#main-screen").append(result);
//          $("#select-popup").hide();
//          main_screen_toggle();
//          let el = document.getElementById("aside2-funda");
//           setEleAttribute(el,'tab-id',SubId);
//          enableHighlighter = capture;
//          if (mainTabId === 2){
//           $("#content_popup").show();
//          }
         
//       }
      
//   }); 
//  }

$(document).on('click','#plus',function(){
  removeAddHighlighterContents();
  startFirstStep(4); $('#pause').show(); enableHighlighter=true;
});

$(document).on('click','.a2-content-tab',function(){
  $(".a2-content-tab").removeClass("active");
     $(this).addClass("active");
     const SubId = $(this).attr("wiyse-funda-id");
     const mainTabId = 1;
     const href = window.location.pathname+window.location.search;
     let module_id = $("#load-main-module").attr("module-id");
      $.post(apiBase+"fundamentals/tabs_content_data", 
      { id: SubId, mainid: mainTabId, module_id: module_id, href: href }, function(result){
        update_mark_text("#add-funda-tab",SubId);
        if(result){
          $("#aside2-funda-content").html(result);
          $("#aside2-funda").attr("tab-id",SubId);
        }else{
          $("#aside2-funda-content").html('No Result found!');
          $("#aside2-funda").attr("tab-id",SubId);
        }
        
    }); 
});

//  function getContentFundamentals(mainTabId, SubId,e){
//      $(".a2-content-tab").removeClass("active");
//      $(e).addClass("active");
//      const href = window.location.pathname+window.location.search;
//      let module_id = $("#load-main-module").attr("module-id");
//       $.post(apiBase+"fundamentals/tabs_content_data", 
//       { id: SubId, mainid: mainTabId, module_id: module_id, href: href }, function(result){
//         if(result){
//           $("#aside2-funda-content").html(result);
//           $("#aside2-funda").attr("tab-id",SubId);
//         }else{
//           $("#aside2-funda-content").html('No Result found!');
//           $("#aside2-funda").attr("tab-id",SubId);
//         }
        
//     }); 
//  }



//  function showfunctionalityTabData(e,id){
//    $.post(apiBase+"functionalities/get_tab_data", 
//    { id: id }, function(result){
//      if(result){
//        $("#content_popup").html(result);
//        if (enableHighlighter===true) {
//         $("#play").hide();
//         $("#pause").show();
//       }else{
//         $("#play").show();
//         $("#pause").hide();
//       }
//        let el = document.getElementById("aside2-funda-content");
//        setEleAttribute(el,'tab-id',id);
//      }
     
//  }); 
// }

$(document).on('click','.show-functionalities-tab-data',function(){
  const id= $(this).attr("tab-id");
  $(".s").hide();
  $.post(apiBase+"functionalities/get_tab_data", 
  { id: id }, function(result){
    if(result){
      $("#content_popup").html(result);
    //   if (enableHighlighter===true) {
    //    $("#play").hide();
    //    $("#pause").show();
    //  }else{
    //    $("#play").show();
    //    $("#pause").hide();
    //  }
      let el = document.getElementById("aside2-funda-content");
      setEleAttribute(el,'tab-id',id);
    }
    
});
});
//modules add new
$(document).on("click","#add-tab",function() {
  let selectBox = $("#select-box");
  
  let is_parent = 1;
  let parent_id = $("#stack").val();
  
  if (parent_id!=0) {
    is_parent=0;
  }
  const href = window.location.href;
  const selectPath = selectBox.attr("wiyse-select-path");
  let text = getElementByXPath(selectPath).textContent;
  let nav = getAnchorHref(getElementByXPath(selectPath));
  nav = nav.replace(/^.*\/\/[^\/]+/, '');
  //console.log(nav);
  text = text.trim();
  text=text.replace(/^\s+|\s+$/gm,'');
  const sdata= {title:text, xpath: selectPath, nav_link: nav, status:1, is_parent:is_parent, parent_id:parent_id};
  $.post(apiBase+"fundamentals/add_module_data", 
  sdata, function(result){
    if(result>0){
      $("#main_tabs_ul").click();
    }else{
      alert('something went wrong');
    }
});
});

function backToTab(e,id){
  const mainid= $("#content_popup").attr('mainid');
  const module_id = $("#load-main-module").attr("module-id");
  $.post(apiBase+"functionalities/get_tabs_back", 
  { id: mainid, module_id: module_id }, function(result){
    if(result){
      $("#content_popup").html(result);
      $("#aside2-funda").attr("tab-id",mainid);
      startFirstStep(4);
      if (enableHighlighter===true) {
        $("#play").hide();
        $("#pause").show();
      }else{
        $("#play").show();
        $("#pause").hide();
      }
    }
    
}); 
}

 function main_screen_toggle(){
  $(".side-bar").removeClass("open");
  $(".side-bar").removeClass("max");
 }

 
 $(document).on('click','#add-funda-tab',async function(e){
  let selectBox = $("#select-box");
  const tabId  = $('#aside2-funda').attr("tab-id");
  const href = window.location.pathname+window.location.search;
  const module_id = $("#load-main-module").attr("module-id");
  const description = $("#funda-description").val();
  const process = $("#question-title").html();
  const selectPath = selectBox.attr("wiyse-select-path");
 const html = $(_x(selectPath)).html();
  //const html = getElementByXPath(selectPath).html();
  let text = $(_x(selectPath)).text();
  console.log(text);
  text = text.trim();
  text=text.replace(/^\s+|\s+$/gm,'');
  const data = {main_tab_id:tabId, module_id: module_id, xpath:selectPath,description:description,url:href,name:text};
  $.post(apiBase+'fundamentals/save_mark_funda', data, function(returnedData) {
    // do something here with the returnedData
    if(returnedData){
      // console.log(returnedData);
      $('[class="a2-content-tab active"]').trigger("click");
      alert(returnedData);
    }
});
return false;
 });

//  function saveFundaSteps(el) {
//   let selectBox = $("#select-box");
//   const tabId  = $('#aside2-funda').attr("tab-id");
//   const href = window.location.pathname+window.location.search;
//   const module_id = $("#load-main-module").attr("module-id");
//   const description = $("#funda-description").val();
//   const process = $("#question-title").html();
//   const selectPath = selectBox.attr("wiyse-select-path");
//   const html = getElementByXPath(selectPath).innerHTML;
//   let text = getElementByXPath(selectPath).textContent;
//   text = text.trim();
//   text=text.replace(/^\s+|\s+$/gm,'');
//   const data = {main_tab_id:tabId, module_id: module_id, xpath:selectPath,description:description,url:href,name:text};
//   $.post(apiBase+'fundamentals/save_mark_funda', data, function(returnedData) {
//     // do something here with the returnedData
//     if(returnedData){
//       // console.log(returnedData);
//       $('[class="a2-content-tab active"]').trigger("click");
//       alert(returnedData);
//     }
// });
// return false;
// }

function saveFunctionalitiesTitle(id,title) {
  $.post(apiBase+"functionalities/add_tab_title", 
    {main_tab_id: id, name: title}, function(result){
      if(result){
        let el = document.getElementById("select-box");
          setEleAttribute(el,'tab-id',result);
      }
      
  });
}

//capture functionality onclick
function startFirstStep(step){
  $("#pause").show();
  $.post(apiBase+"functionalities/get_select_actions", 
    { step: step }, function(result){
      if(result){
         $("#select-box").html(result);
         $("#play").hide();
         enableHighlighter=true;
         $("#pause").show();
         let asid = $("#aside2-funda").attr("tab-id");
         if (asid==undefined) {
          asid = $("#content_popup").attr("mainid");
         }
         if (step == 4) {
          update_mark_text("#add-tab-functionality",asid);
         }
         
         
      }
      
  }); 
}

function update_mark_text(selector, id) {
  const obj = {1:"Concept",2:"Feature", 3:"Capability",
  4:"Action", 5:"Workflow",6:"Dashboard",7:"Report",8:"Setup",9:"Manage"};
  $(selector).html("Mark as "+obj[id]);
}


async function addContentStep(e,step,id,f){
  let module_id = $("#load-main-module").attr("module-id");
  let response;
  if (step===5) {
    response = await getStepCacheById(id);
  }else{
    response = await getStepDataById(id);
  }
  const obj = JSON.parse(response);
  enableHighlighter=false;
  $("#select-box").attr("click-id",id);
  const xpath = $(e).attr("xpath");
  let elem = getElementByXPath(xpath);
  if (elem===null) {
    alert('Not found on this page');
  }else{
    addSelectBox(elem);
  }
  $.post(apiBase+"functionalities/get_select_actions", 
    { step: step, f: f, module_id: module_id, id: id }, function(result){
      if(result){
         $("#select-box").html(result);
        //  $("#select-box-h").html('<h4> Description</h4>');
        //   $("#select-box-hidden").val('description');
        //   $("#select-box-text_area").val(obj.description);
      }
      
  }); 
}
function _xframe(STR_XPATH,doc) {
  var xresult = document.evaluate(STR_XPATH, doc, null, XPathResult.ANY_TYPE, null);
  var xnodes = [];
  var xres;
  while (xres = xresult.iterateNext()) {
      xnodes.push(xres);
  }

  return xnodes;
}
$(document).on('click','.add-content-step',async function(e){
  const step = $(this).attr("step");
  const id = $(this).attr("select-id");
  const f = $(this).attr("s-type");
  let module_id = $("#load-main-module").attr("module-id");
  let response;
  if (step===5) {
    response = await getStepCacheById(id);
  }else{
    response = await getStepDataById(id);
  }
  const obj = JSON.parse(response);
  enableHighlighter=false;
  $("#select-box").attr("click-id",id);
  const xpath = $(this).attr("xpath");
  let elem = getElementByXPath(xpath);
  if (elem===null) {
    var iframe = document.getElementById('object-builder-ui');
    if (iframe) { // Check that the iframe exists
      // Get the content document of the iframe
      var iframeDoc = iframe.contentWindow.document;
      // Call the _xframe() function with the XPath expression and content document
      var xnodes = _xframe(xpath, iframeDoc);
    
      // Check that xnodes is not empty before trying to get the bounding rectangle
      if (xnodes.length > 0) {
        
        //xnodes[0].scrollIntoView();
        var rect = xnodes[0].getBoundingClientRect();
        var ifr= iframe.getBoundingClientRect();
        addSelectBoxIframe(xnodes[0],iframe);
        console.log(rect, ifr);
        // Do something with rect
      }
    }else{
        alert('Not found on this page');
      return false;
    }





    
    // if (elem===null) {
    //   console.log(elem);
    //   alert('Not found on this page');
    //   return false;
    // }else{
    //   let iframSelec=elem;
    //   console.log(iframSelec);
    //   //addSelectBox(iframSelec);
    // }
    
  }else{
    addSelectBox(elem);
  }
  $.post(apiBase+"functionalities/get_select_actions", 
    { step: step, f: f, module_id: module_id, id: id }, function(result){
      if(result){
         $("#select-box").html(result);
        //  $("#select-box-h").html('<h4> Description</h4>');
        //   $("#select-box-hidden").val('description');
        //   $("#select-box-text_area").val(obj.description);
      }
      
  }); 
});




$(document).on('click','.tab-step-add-content',async function(e){
  let module_id = $("#load-main-module").attr("module-id");
  const id = $(this).attr("tab-step-id");
  const step = $(this).attr("step");
  const f=1;
  let response;
  if (step===5) {
    response = await getStepCacheById(id);
  }else{
    response = await getStepDataById(id);
  }
  const obj = JSON.parse(response);
  enableHighlighter=false;
  $("#select-box").attr("click-id",id);
  const xpath = $(this).attr("xpath");
  let elem = getElementByXPath(xpath);
  if (elem===null) {
    alert('Not found on this page');
  }else{
    addSelectBox(elem);
  }
  $.post(apiBase+"functionalities/get_select_actions", 
    { step: step, f: f, module_id: module_id, id: id }, function(result){
      if(result){
         $("#select-box").html(result);
        //  $("#select-box-h").html('<h4> Description</h4>');
        //   $("#select-box-hidden").val('description');
        //   $("#select-box-text_area").val(obj.description);
      }
  }); 
});

$(document).on('click','.wiyse-add-content',async function(e){
  let id = $(this).attr('sub-id');
  let response;
  response = await getModuleStepDataById(id);
  const obj = JSON.parse(response);
  enableHighlighter=false;
  $("#select-box").attr("click-id",id);
  const xpath = $(this).attr("xpath");
  let elem = getElementByXPath(xpath);
  if (elem===null) {
    alert('Not found on this page');
  }else{
    addSelectBox(elem);
  }
  $.post(apiBase+"functionalities/get_select_actions2", 
    { step: 9, id: id }, function(result){
      if(result){
         $("#select-box").html(result);
        //  $("#select-box-h").html('<h4> Description</h4>');
        //   $("#select-box-hidden").val('description');
        //   $("#select-box-text_area").val(obj.description);
      }
      
  }); 
});


async function addModuleContentStep(e,step,id){
  let response;
  response = await getModuleStepDataById(id);
  const obj = JSON.parse(response);
  enableHighlighter=false;
  $("#select-box").attr("click-id",id);
  const xpath = $(e).attr("xpath");
  let elem = getElementByXPath(xpath);
  if (elem===null) {
    alert('Not found on this page');
  }else{
    addSelectBox(elem);
  }
  $.post(apiBase+"functionalities/get_select_actions2", 
    { step: step, id: id }, function(result){
      if(result){
         $("#select-box").html(result);
        //  $("#select-box-h").html('<h4> Description</h4>');
        //   $("#select-box-hidden").val('description');
        //   $("#select-box-text_area").val(obj.description);
      }
      
  }); 
}


function markStepFunc1(el) {
    let selectBox = $("#select-box");
    const href = window.location.href;
    const selectPath = selectBox.attr("wiyse-select-path");
    let text = getElementByXPath(selectPath).textContent;
    text = text.trim();
    text=text.replace(/^\s+|\s+$/gm,'');
    const mainTabId = $("#aside2-funda").attr("tab-id");
    const sdata= {main_tab_id:mainTabId, url: href, name:text, xpath: selectPath};
    if (el==='s') {
      $.post(apiBase+"functionalities/add_tab_title", 
      sdata, function(result){
        if(result>0){
          let elem = document.getElementById("select-box");
            setEleAttribute(elem,'tab-id',result);
            markStep(el);
        }else{
          alert('You have already marked this step as start');
        }
    });
    }else{
      markStep(el);
    }
  
}
function markStepFunc(el) {
  enableHighlighter=false;
  let selectBox = $("#select-box");
  const href = window.location.href;
  const selectPath = selectBox.attr("wiyse-select-path");
  let text = getElementByXPath(selectPath).textContent;
  text = text.trim();
  text=text.replace(/^\s+|\s+$/gm,'');
  const mainTabId = $("#aside2-funda").attr("tab-id");
  const sdata= {main_tab_id:mainTabId, url: href, name:text, xpath: selectPath};
  if (el==='s') {
    $.post(apiBase+"functionalities/add_tab_title", 
    sdata, function(result){
      if(result>0){
        let elem = document.getElementById("select-box");
          setEleAttribute(elem,'tab-id',result);
          markStep(el);
      }else{
        alert('You have already marked this step as start');
      }
  });
  }else{
    markStep(el);
  }

}

// function markStartTitle(){
//   let selectBox = $("#select-box");
//   const href = window.location.href;
//   const selectPath = selectBox.attr("wiyse-select-path");
//   let text = getElementByXPath(selectPath).textContent;
//   const module_id = $("#load-main-module").attr("module-id");
//   text = text.trim();
//   text=text.replace(/^\s+|\s+$/gm,'');
//   const mainTabId = $("#content_popup").attr("mainid");
//   const sdata= {main_tab_id:mainTabId, module_id: module_id, url: href, name:text, xpath: selectPath};
//   $.post(apiBase+"functionalities/add_tab_title", 
//   sdata, function(result){
//     if(result>0){
//       alert('Added Successfully!');
//       backToTab(1,1);
//     }else{
//       alert('You have already marked this step as start');
//     }
// });
// }

$(document).on('click','#add-functionalities-category',async function(e){
  removeAddHighlighterContents();
  startFirstStep(4);
  $(".fundaplay").hide();
});

$(document).on('click','#add-tab-functionality',async function(e){
  let selectBox = $("#select-box");
  const href = window.location.pathname+window.location.search;
  const selectPath = selectBox.attr("wiyse-select-path");
  let text = getElementByXPath(selectPath).textContent;
  const module_id = $("#load-main-module").attr("module-id");
  text = text.trim();
  text=text.replace(/^\s+|\s+$/gm,'');
  const mainTabId = $("#content_popup").attr("mainid");
  const sdata= {main_tab_id:mainTabId, module_id: module_id, url: href, name:text, xpath: selectPath};
  $.post(apiBase+"functionalities/add_tab_title", 
  sdata, function(result){
    if(result>0){
      alert('Added Successfully!');
      backToTab(1,mainTabId);
    }else{
      alert('You have already marked this step as start');
    }
});
});


function getAnchorHref(element) {
  let href='';
  let div = 0;
  if (element.hasAttribute("href")) {
    href = element.getAttribute("href");
  }else{
  for(let i=0; i<element.childNodes.length; i++){
      if (element.hasChildNodes()) {
      let n = element.childNodes[i].nodeName;
      let el = element.childNodes[i];
       if(n==='A'){
          if (el.hasAttribute("href")) {
                href = el.getAttribute("href");
             }
       }
    }
  }
}
  return href;
}
function getModuleUrl(element) {
  let href='';
  let div = 0;
  if (element.hasAttribute("wiyse-href")) {
    href = element.getAttribute("wiyse-href");
    return href;
  }
  else if (element.childNodes.length>0) {
    for(let i=0; i<element.childNodes.length; i++){
      if (element.hasChildNodes()) {
      let n = element.childNodes[i].nodeName;
      let el = element.childNodes[i];
       if(n==='A'){
          if (el.hasAttribute("href")) {
                href = el.getAttribute("href");
                return href;
             }
       }
    }
  }
  }else{
    href = element.getAttribute("href");
    return href;
}
  
}
async function markModuleTitle(){
  alert('hello');
  // const { value: formValues } = await Swal.fire({
  //   title: 'Multiple inputs',
  //   html:
  //   `<input type="radio" id="parent" name="is_parent" value="1" class="swal2-input">
  //   <label for="html">It is Parent</label><br>
  //   <input type="radio" id="css" name="is_parent" value="0">
  //   <label for="css">It is Child</label><br>`,
  //   focusConfirm: false,
  //   preConfirm: () => {
  //     return [
  //       document.getElementById('swal-input1').value,
  //       document.getElementById('swal-input2').value
  //     ]
  //   }
  // });
  
  let selectBox = $("#select-box");
  
  let is_parent = 1;
  let parent_id = $("#stack").val();
  
  if (parent_id!=0) {
    is_parent=0;
  }
  const href = window.location.href;
  const selectPath = selectBox.attr("wiyse-select-path");
  let text = getElementByXPath(selectPath).textContent;
  let nav = getAnchorHref(getElementByXPath(selectPath));
  nav = nav.replace(/^.*\/\/[^\/]+/, '');
  //console.log(nav);
  text = text.trim();
  text=text.replace(/^\s+|\s+$/gm,'');
  const sdata= {title:text, xpath: selectPath, nav_link: nav, status:1, is_parent:is_parent, parent_id:parent_id};
  $.post(apiBase+"fundamentals/add_module_data", 
  sdata, function(result){
    if(result>0){
      $("#main_tabs_ul").click();
    }else{
      alert('something went wrong');
    }
});
}

//add contents

function addContents(e,tab){
  enableHighlighter=false;
  $(".a2-content-tab").removeClass("active");
  $(e).addClass('active');
  let selectBox = $("#aside2-funda-content");
  let tabid = selectBox.attr("tab-id");
  if (tabid===undefined) {
    alert('please Mark first step');
    return false;
    tabid = 0;
  }
  
  $.post(apiBase+"functionalities/get_add_contents", 
    { tab_id: tabid, tab:tab }, function(result){
      if(result){
         $("#aside2-funda-content").html(result);
      }
      
  }); 
}

async function viewIntroTab(e,id) {
  let response = await getStepCacheById(id);
  const obj = JSON.parse(response);
  let des = `Question 1: What is description?</br> ${obj.description}. 
  </br>Question 2: How to used in product? </br>${obj.how_used}. 
  </br>Question 3: Additional References: </br>${obj.additional_references}`;
  enableHighlighter=false;
  const xpath = $(e).attr('xpath');
  var ih = getElementByXPath(xpath);
  if (ih===null) {
    alert('error','This fundamentals was not found on this page.');
    playIntro('error','This fundamentals was not found on this page.');
    return false;
  }
  var title = `This is ${obj.name}`;
  let playDesc = `Question 1: What is description? ${obj.description}. 
  Question 2: How to used in product? ${obj.how_used}. 
  Question 3: Additional References: ${obj.additional_references}`;
  playIntro(title,playDesc);
        introJs().setOptions({
          steps: [{
            element: ih,
            intro: des
          }]
        }).start();
}
function viewIntroSingle(xpath, description) {
  enableHighlighter=false;
  var ih = getElementByXPath(xpath);
        introJs().setOptions({
          steps: [{
            element: ih,
            intro: description
          }]
        }).start();
}

$(document).on('click','.vinfo',async function(){
  const sid = $(this).attr('div-id');
  let response = await getStepDataById(sid);
  const obj = JSON.parse(response);
  let des = `Question 1: What is description?</br> ${obj.description}. 
  </br>Question 2: How to used in product? </br>${obj.how_used}. 
  </br>Question 3: Additional References: </br>${obj.additional_references}`;
  enableHighlighter=false;
  const xpath = $(this).attr('xpath');
  var ih = getElementByXPath(xpath);
  if (ih===null) {
    alert('error','This fundamentals was not found on this page.');
    playIntro('error','This fundamentals was not found on this page.');
    return false;
  }
  var title = `This is ${obj.name}`;
  let playDesc = `Question 1: What is description? ${obj.description}. 
  Question 2: How to used in product? ${obj.how_used}. 
  Question 3: Additional References: ${obj.additional_references}`;
  playIntro(title,playDesc);
        introJs().setOptions({
          steps: [{
            element: ih,
            intro: des
          }]
        }).start();
});



// function deleteRowCapture(tc,id){
//   var conf = confirm("Want to delete?");
//   let urls= "functionalities/delete_tabs";
//   if (tc==='funda') {
//     urls= "fundamentals/delete_tabs";
//   }
//   if (conf) {
//     $.post(apiBase+urls, 
//     { id: id }, function(result){
//       if(result){
//          $('[class="a2-content-tab active"]').trigger('click');
//       }
      
//   }); 
//   }

// }

$(document).on('click','.tab-step-delete',async function(){
  const id = $(this).attr("tab-step-id");
  const tc = $(this).attr("wiyse-type");
  var conf = confirm("Want to delete?");
  let urls= "functionalities/delete_tabs";
  if (tc==='funda') {
    urls= "fundamentals/delete_tabs";
  }
  if (conf) {
    $.post(apiBase+urls, 
    { id: id }, function(result){
      if(result){
        if (tc==='funda') {
          $('[class="a2-content-tab active"]').trigger('click');
        }else{
          $('[class="a2-content-tab3 add-contents active"]').trigger('click');
        }
         
      }
      
  }); 
  }
});
function deleteModuleRowCapture(id){
  var conf = confirm("Want to delete?");
    urls= "fundamentals/delete_module_tabs";
  if (conf) {
    $.post(apiBase+urls, 
    { id: id }, function(result){
      if(result){
        $("#load-main-module").click();
      }
      
  }); 
  }
}

function deleteFuncTab(params) {
    var conf = confirm("Want to delete?");
    let urls= "functionalities/delete_main_tab";
    if (conf) {
      $.post(apiBase+urls, 
      { id: params }, function(result){
        if(result){
          backToTab(1,1);
        }
        
    }); 
  }
}
async function getCaptureConfig(id) {
  const sid = $("#select-box").attr("click-id");
  $("#select-box-h").addClass("flex");
  $("[btn-id=save_content]").attr("id","save_content");
  $("#save_content").removeAttr("btn-id");
  let resConfig = await getConfigureDataById(id);
  let resStep = await getStepDataById(sid);
  const obj = JSON.parse(resConfig);
  const objStep = JSON.parse(resStep);
  let textvalue = '';
  if (objStep.configure!=null) {
    const objConfigure = JSON.parse(objStep.configure);
    if (objConfigure[id]!=undefined) {
      textvalue = objConfigure[id];
    }
  }
  
  let str = obj.title.replace('#concepts',objStep.name);
      str = str.replace('#concept',objStep.name);
      str = str.replace('#features',objStep.name);
      str = str.replace('#feature',objStep.name);
      str = str.replace('#capabilities',objStep.name);
      str = str.replace('#capability',objStep.name);

    let obm= `<h5> ${str}</h5>`;
    $("#select-box-h").html(obm);
    $("#select-box-hidden").val(id);
    $("#select-box-text_area").val(textvalue);
}
async function getCaptureConfigModule(id) {
  $("#select-box-h").addClass("flex");
  const sid = $("#select-box").attr("click-id");
  $("[btn-id=save_content_module]").attr("id","save_content_module");
  $("#save_content_module").removeAttr("btn-id");
  let resConfig = await getModuleConfigureDataById(id);
  let resStep = await getModuleDataById(sid);
  const obj = JSON.parse(resConfig);
  const objStep = JSON.parse(resStep);
  let textvalue = '';
  if (objStep.configure!='') {
    const objConfigure = JSON.parse(objStep.configure);
    if (objConfigure[id]!=undefined) {
      textvalue = objConfigure[id];
    }
  }
  
  let str = obj.title.replace('#concept',objStep.name);
      str = str.replace('#feature',objStep.name);
      str = str.replace('#capability',objStep.name);

    let obm= `<h5> ${str}</h5>`;
    $("#select-box-h").html(obm);
    $("#select-box-hidden").val(id);
    $("#select-box-text_area").val(textvalue);
}


async function getCaptureConfig2(id) {
  const sid = $("#select-box").attr("click-id");
  $("#select-box-h").addClass("flex");
  $("[btn-id=save_content2]").attr("id","save_content2");
  $("#save_content2").removeAttr("btn-id");
  let resConfig = await  getConfigureDataById(id);
  let resStep = await getStepDataById2(sid);
  const obj = JSON.parse(resConfig);
  const objStep = JSON.parse(resStep);
  let textvalue = '';
  if (objStep.configure!=null) {
    const objConfigure = JSON.parse(objStep.configure);
    if (objConfigure[id]!=undefined) {
      textvalue = objConfigure[id];
    }
  }
  
  let str = obj.title.replace('#actions',objStep.name);
      str = str.replace('#action',objStep.name);
      str = str.replace('#workflows',objStep.name);
      str = str.replace('#workflow',objStep.name);
      str = str.replace('#capabilities',objStep.name);
      str = str.replace('#capability',objStep.name);

    let obm= `<h5> ${str}</h5>`;
    $("#select-box-h").html(obm);
    $("#select-box-hidden").val(id);
    $("#select-box-text_area").val(textvalue);
}

async function getCaptureDesc(id) {
  const sid = $("#select-box").attr("click-id");
  let response = await getStepDataById(sid);
  const obj = JSON.parse(response);
  if (id===1) {
    $("#select-box-h").html('<h4> Description</h4>');
    $("#select-box-hidden").val('description');
    $("#select-box-text_area").val(obj.description);
  }
  if (id===2) {
    $("#select-box-h").html('<h4> How to used?</h4>');
    $("#select-box-hidden").val('how_used');
    $("#select-box-text_area").val(obj.how_used);
  }
  if (id===3) {
    $("#select-box-h").html('<h4> Additional References?</h4>');
    $("#select-box-hidden").val('additional_references');
    $("#select-box-text_area").val(obj.additional_references);
  }
}
async function getCaptureDesc2(id) {
  const sid = $("#select-box").attr("click-id");
  let response = await getStepCacheById(sid);
  const obj = JSON.parse(response);
  if (id===1) {
    $("#select-box-h").html('<h4> Description</h4>');
    $("#select-box-hidden").val('description');
    $("#select-box-text_area").val(obj.description);
  }
  if (id===2) {
    $("#select-box-h").html('<h4> How to used in product?</h4>');
    $("#select-box-hidden").val('how_used');
    $("#select-box-text_area").val(obj.how_used);
  }
  if (id===3) {
    $("#select-box-h").html('<h4> Additional References?</h4>');
    $("#select-box-hidden").val('additional_references');
    $("#select-box-text_area").val(obj.additional_references);
  }
}

$(document).on('click','#save_content',function(){
  const sid = $("#select-box").attr("click-id");
  const field = $("#select-box-hidden").val();
  const text = $("#select-box-text_area").val();
  if (text=='') {
    alert("Error: field can not be empty.");
    return false;
  }
  const qtype = $("#funda_question").val();
    $.post(apiBase+"fundamentals/save_content", 
    { id: sid ,field: field, text: text, qtype: qtype }, function(result){
      if(result){
         alert(result);
      }
      
  }); 
});
$(document).on('click','#save_additional',function(){
  
  let module_id = $("#load-main-module").attr("module-id");
  const sid = $("#select-box").attr("click-id");
  const titlee = $('input[name=textbox]').val();
  const text = $("#select-box-text_area").val();
  alert(titlee);
  //   $.post(apiBase+"fundamentals/add_configure_title", 
  //   { id: sid ,title: title, module_id: module_id, text: text }, function(result){
  //     if(result){
  //        alert(result);
  //     }
  // }); 
});

$(document).on('click','[btn-id=save_content_module]',function(){
  const sid = $("#select-box").attr("click-id");
  const titlee = $('#text_kol').val();
  const text = $("#select-box-text_area").val();
  if (text=='') {
    alert("Error: field can not be empty.");
    return false;
  }
    $.post(apiBase+"fundamentals/add_configure_title_module", 
    { id: sid ,title: titlee, text: text }, function(result){
      if(result){
         alert(result);
      }
  }); 
});

// $(document).on('click','[btn-id=save_content]',function(){
//   let module_id = $("#load-main-module").attr("module-id");
//   const sid = $("#select-box").attr("click-id");
//   const title = $('#text_kol').val();
//   const text = $("#select-box-text_area").val();
//     $.post(apiBase+"fundamentals/add_configure_title", 
//     { id: sid ,title: title, module_id: module_id, text: text }, function(result){
//       if(result){
//          alert(result);
//       }
//   }); 
// });
async function getCaptureCustomConfig(id,index) {
  const sid = $("#select-box").attr("click-id");
  $("#select-box-h").addClass("flex");
  $("[btn-id=save_content]").attr("id","save_content");
  $("#save_content").removeAttr("btn-id");
  let resStep = await getStepDataById(sid);
  const objStep = JSON.parse(resStep);
  let textvalue = '';
  let str ='';
  if (objStep.custom_config!=null) {
    const objConfigure = JSON.parse(objStep.custom_config);
    if (objConfigure[index]!=undefined) {
      textvalue = objConfigure[index].r;
      str = objConfigure[index].q;
    }
  }
    let obm= `<h5> ${str}</h5>`;
    $("#select-box-h").html(obm);
    $("#select-box-hidden").val(id);
    $("#select-box-text_area").val(textvalue);
}

async function getCaptureCustomConfigFunct(id,index) {
  const sid = $("#select-box").attr("click-id");
  $("#select-box-h").addClass("flex");
  $("[btn-id=save_content2]").attr("id","save_content");
  $("#save_content2").removeAttr("btn-id");
  let resStep = await getStepDataById2(sid);
  const objStep = JSON.parse(resStep);
  let textvalue = '';
  let str ='';
  if (objStep.custom_config!=null) {
    const objConfigure = JSON.parse(objStep.custom_config);
    if (objConfigure[index]!=undefined) {
      textvalue = objConfigure[index].r;
      str = objConfigure[index].q;
    }
  }
    let obm= `<h5> ${str}</h5>`;
    $("#select-box-h").html(obm);
    $("#select-box-hidden").val(id);
    $("#select-box-text_area").val(textvalue);
}



$(document).on('click','[btn-id=save_content]',function(){
  let module_id = $("#load-main-module").attr("module-id");
  const sid = $("#select-box").attr("click-id");
  const title = $('#text_kol').val();
  const text = $("#select-box-text_area").val();
  if (text=='') {
    alert("Error: field can not be empty.");
    return false;
  }
  if (title=='' || text=='') {
    alert('value required');
    return false;
  }
    $.post(apiBase+"fundamentals/add_custom_config_title", 
    { id: sid ,title: title, module_id: module_id, text: text }, function(result){
      if(result){
        $('#text_kol').val('');
        $("#select-box-text_area").val('');
         alert(result);
      }
  }); 
});

$(document).on('click','[btn-id=save_content2]',function(){
  let module_id = $("#load-main-module").attr("module-id");
  const sid = $("#select-box").attr("click-id");
  const title = $('#text_kol').val();
  const text = $("#select-box-text_area").val();
  if (title=='' || text=='') {
    alert('value required');
    return false;
  }
    $.post(apiBase+"functionalities/add_custom_config_title", 
    { id: sid ,title: title, module_id: module_id, text: text }, function(result){
      if(result){
        $('#text_kol').val('');
        $("#select-box-text_area").val('');
         alert(result);
      }
  }); 
});



$(document).on('click','#save_content2',function(){
  const sid = $("#select-box").attr("click-id");
  const qtype = $("#funda_question").val();
   const field = $("#select-box-hidden").val();
    const text = $("#select-box-text_area").val();
    if (text=='') {
      alert("Error: field can not be empty.");
      return false;
    }
    $.post(apiBase+"functionalities/save_content", 
    { id: sid ,field: field, text: text, qtype:qtype }, function(result){
      if(result){
         alert(result);
      }
      
  }); 
});

$(document).on('click','#save_content_module',function(){
  const sid = $("#select-box").attr("click-id");
   const field = $("#select-box-hidden").val();
    const text = $("#select-box-text_area").val();
    if (text=='') {
      alert("Error: field can not be empty.");
      return false;
    }
    $.post(apiBase+"fundamentals/save_content_module", 
    { id: sid ,field: field, text: text }, function(result){
      if(result){
         alert(result);
      }
      
  }); 
});

function getStepDataById(id){
  let module_id = $("#load-main-module").attr("module-id");
  return new Promise((resolve, reject) => {
    $.post(apiBase+"fundamentals/get_data_by_id", 
    { id: id, module_id: module_id }, function(result){
      if(result){
         resolve(result);
      }
      else{
        reject("error");
      }
  }); 
  });
}
function getStepDataById2(id){
  let module_id = $("#load-main-module").attr("module-id");
  return new Promise((resolve, reject) => {
    $.post(apiBase+"functionalities/get_data_by_id", 
    { id: id, module_id: module_id }, function(result){
      if(result){
         resolve(result);
      }
      else{
        reject("error");
      }
  }); 
  });
}
function getModuleDataById(id){
  return new Promise((resolve, reject) => {
    $.post(apiBase+"fundamentals/get_module_configure_id", 
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
function getModuleStepDataById(id){
  let module_id = $("#load-main-module").attr("module-id");
  return new Promise((resolve, reject) => {
    $.post(apiBase+"fundamentals/get_module_configure_id", 
    { id: id, module_id: module_id }, function(result){
      if(result){
         resolve(result);
      }
      else{
        reject("error");
      }
  }); 
  });
}
function  getConfigureDataById(id){
  let module_id = $("#load-main-module").attr("module-id");
  return new Promise((resolve, reject) => {
    $.post(apiBase+"fundamentals/get_configure_by_id", 
    { id: id, module_id: module_id }, function(result){
      if(result){
         resolve(result);
      }
      else{
        reject("error");
      }
  }); 
  });
}

function getModuleConfigureDataById(id){
  return new Promise((resolve, reject) => {
    $.post(apiBase+"fundamentals/get_module_configure_by_id", 
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
function getStepCacheById(id){
  return new Promise((resolve, reject) => {
    $.post(apiBase+"functionalities/get_data_by_id", 
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
function get_data_by_steps(id){
  return new Promise((resolve, reject) => {
    $.post(apiBase+"functionalities/get_data_by_steps", 
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
function sendData() {
    const title = $("#select-box-h").text();
    const text = $("#select-box-text_area").val();
    alanBtnInstance.activate();
  // Calling the project API method on button click
  alanBtnInstance.callProjectApi("typeText", {
    title: title, description: text
  }, function(error, result) {});
}
function playIntro(title,data) {
    alanBtnInstance.activate();
  // Calling the project API method on button click
  alanBtnInstance.callProjectApi("playDesc", {
    title: title, description: data
  }, function(error, result) {});
}

function playAction(title,data) {
  alanBtnInstance.activate();
// Calling the project API method on button click
alanBtnInstance.callProjectApi("playAction", {
  title: title, value: data
}, function(error, result) {});
}

function playIntroAll(title,data) {
  alanBtnInstance.activate();
// Calling the project API method on button click
alanBtnInstance.callProjectApi("playDescAll", {title: title, data: data}, function(error, result) {});
}

function sendTextRasa(text) {
  alanBtnInstance.activate();
  alanBtnInstance.sendText(text);
}

function sendAutoRasa() {
  if ( sessionStorage.getItem("cdata")) {
    alanBtnInstance.activate();
    let data = JSON.parse(sessionStorage.getItem("cdata"));
    alanBtnInstance.callProjectApi("startStoreCommand", data, function(error, result) {});
  }
}
setTimeout(function(){
  sendAutoRasa();
 }, 3000);

 var index = 0;

 window.next_letter = function(demo_input,type_this) {
  if (index <= type_this.length) {
      demo_input.focus();
      demo_input.value = type_this.substr(0, index++);
      setTimeout("next_letter()", 50);
  }
}




 