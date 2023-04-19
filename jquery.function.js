//1. backToTab(this,39);
$(document).on('click','#back-to-tab',function(){
    const mainid= $("#content_popup").attr('mainid');
    const module_id = $("#load-main-module").attr("module-id");
    $.post(apiBase+"functionalities/get_tabs_back", 
    { id: mainid, module_id: module_id }, function(result){
      if(result){
        $("#content_popup").html(result);
        //startFirstStep(4);
        enableHighlighter=false;
        // if (enableHighlighter===true) {
        //   $("#play").hide();
        //   $("#pause").show();
        // }else{
        //   $("#play").show();
        //   $("#pause").hide();
        // }
      }
      
  }); 
});
//2. addContents(this,1);

$(document).on('click','.add-contents',function(){
    const tab = $(this).attr("tab-id");
    enableHighlighter=false;
  $(".a2-content-tab3").removeClass("active");
  $(this).addClass('active');
  $(".s").hide();
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
});

//3. markStep

$(document).on('click','.mark-step',function(){
   const step = $(this).attr("step");
   updateKeypressStack("functstep");
   let markContent= "";
   if (step==1) {
    markContent ="First Step";
   }
   else if (step == 2) {
    markContent ="Intermediate Step";
   }
   else if (step == 3) {
    markContent ="End Step";
   }
   let html = ` <span class="" style="
   font-size: 10px;
   font-weight: bold;
 ">${markContent}</span>`;
    $("#aside2-funda").attr("funct-step",step);
    $("#wiyse-high-content").html(html);
   startFirstStep(step);
});

//4. saveStep

$(document).on('click','#mark-step',function(){
  const step = $(this).attr("step");
    markStep(step);
 });

 //5. delete tab modules

 $(document).on('click','.delete-module',function(){
  const id = $(this).attr("tab-id");
  const result = deleteModuleRowCapture(id);
  if (result) {
    $(this).parent().parent().parent().remove();
  }
 });

 //6. get module capture config

 $(document).on('click','.get-module-config-cature',function(){
  const id = $(this).attr("tab-id");
   getCaptureConfigModule(id);
 });

 //7. get fundamentals capture config
 $(document).on('click','.get-funda-config-capture',function(){
  const id = $(this).attr("tab-id");
  $("#funda_question").val("default");
  getCaptureConfig(id);
 });

 //8. custom config capture data

 $(document).on('click','.get-funda-config-capture-custom',function(){
  const id = $(this).attr("tab-id");
  $("#funda_question").val("custom");
  const customid = $(this).attr("custom-id");
  getCaptureCustomConfig(id,customid);
 });

 //

 $(document).on('click','.get-funct-config-capture-custom',function(){
  const id = $(this).attr("tab-id");
  $("#funda_question").val("custom");
  const customid = $(this).attr("custom-id");
  getCaptureCustomConfigFunct(id,customid);
 });

 //9. add free text in fundamentals

 $(document).on('click','#add-free-text-funda',function(){
  const id = $(this).attr("tab-id");
  addFreeTextFunda(id);
 });

 //10. add free text functionalities

 $(document).on('click','#add-free-text-funct',function(){
  const id = $(this).attr("tab-id");
  addFreeText2(id);
 });

 //11. functionality capture config

 $(document).on('click','.get-capture-config_2',function(){
  $("#funda_question").val("default");
  const id = $(this).attr("tab-id");
  getCaptureConfig2(id);
 });
 
 //
 $(document).on('click','.sub-tab-list',function(){
  const id = $(this).attr("wtab-id");
  secondTab(this,id);
 });

 //update stack for keypress event

 function updateKeypressStack(stepsType) {
  var attr= $("#main_tabs_ul").attr('steps-type');
  if (typeof attr !== 'undefined' && attr !== false) {
    $("#main_tabs_ul").attr('steps-type',stepsType);
  }
  $("#main_tabs_ul").attr('steps-type',stepsType);
  
 }
///





// var iframe = document.getElementById('object-builder-ui');
// window.addEventListener('mouseover', iframeHandler);

// function iframeHandler() {
  
//     console.log(iframe.contentWindow.document);
//     //alert('works');
// }


// //jquery
// $('#object-builder-ui').load(function(){
//   var contents = $(this).contents(); // contents of the iframe
//   console.log(contents);
//   $(contents).find("body").on('mouseup', function(event) { 
//       alert('test'); 
//   });
// });