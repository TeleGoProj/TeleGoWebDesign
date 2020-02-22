$( document ).ready(function() {
   init();
});

function init(){
$("#closed-header-menu").hide();
$(".telego-editable-input").hide();
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

$(".dropdown-menu li a").click(function(){

	$(this).parents(".btn-group").find('.selection').text($(this).text());
	$(this).parents(".btn-group").find('.selection').val($(this).text());
  
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

}

function checkConfirmation(){
	var lang = document.getElementsByTagName("html")[0].getAttribute("lang");
	var confirmationMessage = 'Are you Sure you want to proceed?';
	if(lang == 'ar')
		confirmationMessage = 'هل انت متأكد من انك تريد ان تكمل؟';
		
	var confirmed = confirm(confirmationMessage);
	return confirmed;
}


$(".dropdown-menu li a").click(function(){

	$(this).parents(".btn-group").find('.selection').text($(this).text());
	$(this).parents(".btn-group").find('.selection').val($(this).text());
  
  });