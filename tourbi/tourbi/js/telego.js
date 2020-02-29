$( document ).ready(function() {
	init();
 });
 
 function init(){
 $("#closed-header-menu").hide();
 $(".telego-editable-input").hide();
 initSummernoteEditor('About Me');
 }
 
 function toggleBanner(){
 $("#opened-header-menu").toggle();
 $("#closed-header-menu").toggle();
 
 }
 
 function makeSpanEditable(el){
	 var td = jQuery(el).parent();
	 var tr = td.parent();
	 makeRowEditable(tr);
 }
 
 function makeRowEditable(tr){
	 var span = tr.find('span');
	 var input = tr.find('input');
	 
	 span.hide();
	 input.fadeIn( "slow", function() {
	 // Animation complete
   });
   var dic = {};
	 span.each(function( index ) {
	 dic[ index ] = $( this ).text() ;
 });
 
	 input.each(function( index ) {
	 $( this ).val(dic[ index ]) ;
 });

 }
 
 
 
 
 function submitEditedInputText(el){
	 var td = jQuery(el).parent();
	 var tr = td.parent();
	 
	 var span = tr.find('span');
	 var input = tr.find('input');
	 
	 input.hide();
	 span.fadeIn( "slow", function() {
	 // Animation complete
   });
	 var dic = {};
	 input.each(function( index ) {
	 dic[ index ] = $( this ).val() ;
 });
 
	 span.each(function( index ) {
	 $( this ).text(dic[ index ]) ;
 });	
 }
 
 
 function deleteRow(el){
	 var confirmed = checkConfirmation();
	 if(!confirmed)
		 return;
	 
	 var td = jQuery(el).parent();
	 var tr = td.parent();
	 tr.fadeOut('slow', 
		 function(){ 
			 tr.remove();                    
		 }); 
 }
 
 function addRow(table_id){
	 var table = $( "#" + table_id );
	 var emptyRow = table.find('.hidden-empty-row').first();
	 var newRow = emptyRow.clone();
	 newRow.removeClass('hidden-empty-row');
	 makeRowEditable(newRow);
	 newRow.appendTo( table );
	 makeDropdownClickable(table);	
 }
 
 function checkConfirmation(){
	 var lang = document.getElementsByTagName("html")[0].getAttribute("lang");
	 var confirmationMessage = 'Are you Sure you want to proceed?';
	 if(lang == 'ar')
		 confirmationMessage = 'هل انت متأكد من انك تريد ان تكمل؟';
		 
	 var confirmed = confirm(confirmationMessage);
	 return confirmed;
 }
 
 function initSummernoteEditor(placeholder){	 
$('.summernote-editor').summernote({	
placeholder: placeholder,	 
tabsize: 2,	 
height: 200	
});	
}

function saveAboutMe(editor_id){				
	var markupStr = $('#' + editor_id).summernote('code');	
	alert(markupStr);			
}

function insertMarkupsIntoEditor(editor_id, markupStr){	
	markupStr = '<p><b><u><span style="font-family: &quot;Comic Sans MS&quot;;">TeleGo E<font color="#00ffff" style="background-color: rgb(57, 123, 33);">dit</font>or</span></u></b></p>';	
	$('#' + editor_id).summernote('code', markupStr);		 
}	

function previewImage(input, preview_component_id) {	
	if (input.files && input.files[0]) {		
	  var reader = new FileReader();			

	
	  reader.onload = function(e) {	
		$('#' + preview_component_id).attr('src', e.target.result);	
	  }
	  reader.readAsDataURL(input.files[0]);	
  }	
}

$(".dropdown-menu li a").click(function(){	

	$(this).parents(".btn-group").find('.selection').text($(this).text());	
	$(this).parents(".btn-group").find('.selection').val($(this).text());	

  });	

function makeDropdownClickable(table){	

	var menuGroup =  $(table).find($('tr').last().find($('.btn-group')));	

		menuGroup.each(function(){	

			var liArray = $(this).find($('li'));	

			var displaySelectionSpan = ($(this).find($('.selection')));	

				liArray.each(function( index ) {	
				 $(this).click(function(){	
					 var a = $(this).find($('a'));	
					 var aText = a.text();	
					 displaySelectionSpan.text(aText);	
					 displaySelectionSpan.removeAttr("style");	
				 }) ;	
			});		
		}	
	);	
}


    $(document).ready(function(){
      $("#myInputList").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#choose li").filter(function() {
          $(this).toggle( $(this).text().toLowerCase().indexOf(value) > -1 );
        });
      });
    });
    

  $(document).ready(function(){
    $("#myInputDrop").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#choose2 li").filter(function() {
        $(this).toggle( $(this).text().toLowerCase().indexOf(value) > -1 );
      });
    });
  });
 