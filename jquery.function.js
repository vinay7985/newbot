//1. backToTab(this,39);
$(document).on('click','#back-to-tab',function(){
    const mainid= $("#content_popup").attr('mainid');
    const module_id = $("#load-main-module").attr("module-id");
    $.post(apiBase+"functionalities/get_tabs_back", 
    { id: mainid, module_id: module_id }, function(result){
      if(result){
        $("#content_popup").html(result);
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
});
//2. addContents(this,1);

$(document).on('click','.add-contents',function(){
    const tab = $(this).attr("tab-id");
    enableHighlighter=false;
  $(".a2-content-tab3").removeClass("active");
  $(this).addClass('active');
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
  getCaptureConfig(id);
 });

 //8. custom config capture data

 $(document).on('click','.get-funda-config-capture-custom',function(){
  const id = $(this).attr("tab-id");
  const customid = $(this).attr("custom-id");
  getCaptureCustomConfig(id,customid);
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
  const id = $(this).attr("tab-id");
  getCaptureConfig2(id);
 });