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

  $(document).ready(function(){
    $("#myInputphone").click("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#choosecountry li").filter(function() {
        $(this).toggle( $(this).text().toLowerCase().indexOf(value) > -1 );
      });
    });
  });
 

  /*  feature search*/
  var countries = ["food","fashion","fitness","sport","safari", "reading" , "running" , "travel" , "tennis" , "shopping" ,"pets" , "photography"];

  function autocomplete(inp, arr) {
	/*the autocomplete function takes two arguments,
	the text field element and an array of possible autocompleted values:*/
	var currentFocus;
	/*execute a function when someone writes in the text field:*/
	inp.addEventListener("input", function(e) {
		var a, b, i, val = this.value;
		/*close any already open lists of autocompleted values*/
		closeAllLists();
		if (!val) { return false;}
		currentFocus = -1;
		/*create a DIV element that will contain the items (values):*/
		a = document.createElement("DIV");
		a.setAttribute("id", this.id + "autocomplete-list");
		a.setAttribute("class", "autocomplete-items");
		/*append the DIV element as a child of the autocomplete container:*/
		this.parentNode.appendChild(a);
		/*for each item in the array...*/
		for (i = 0; i < arr.length; i++) {
		  /*check if the item starts with the same letters as the text field value:*/
		  if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
			/*create a DIV element for each matching element:*/
			b = document.createElement("DIV");
			/*make the matching letters bold:*/
			b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
			b.innerHTML += arr[i].substr(val.length);
			/*insert a input field that will hold the current array item's value:*/
			b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
			/*execute a function when someone clicks on the item value (DIV element):*/
				b.addEventListener("click", function(e) {
				/*insert the value for the autocomplete text field:*/
				inp.value = this.getElementsByTagName("input")[0].value;
				/*close the list of autocompleted values,
				(or any other open lists of autocompleted values:*/
				closeAllLists();
			});
			a.appendChild(b);
		  }
		}
	});
	/*execute a function presses a key on the keyboard:*/
	inp.addEventListener("keydown", function(e) {
		var x = document.getElementById(this.id + "autocomplete-list");
		if (x) x = x.getElementsByTagName("div");
		if (e.keyCode == 40) {
		  /*If the arrow DOWN key is pressed,
		  increase the currentFocus variable:*/
		  currentFocus++;
		  /*and and make the current item more visible:*/
		  addActive(x);
		} else if (e.keyCode == 38) { //up
		  /*If the arrow UP key is pressed,
		  decrease the currentFocus variable:*/
		  currentFocus--;
		  /*and and make the current item more visible:*/
		  addActive(x);
		} else if (e.keyCode == 13) {
		  /*If the ENTER key is pressed, prevent the form from being submitted,*/
		  e.preventDefault();
		  if (currentFocus > -1) {
			/*and simulate a click on the "active" item:*/
			if (x) x[currentFocus].click();
		  }
		}
	});
	function addActive(x) {
	  /*a function to classify an item as "active":*/
	  if (!x) return false;
	  /*start by removing the "active" class on all items:*/
	  removeActive(x);
	  if (currentFocus >= x.length) currentFocus = 0;
	  if (currentFocus < 0) currentFocus = (x.length - 1);
	  /*add class "autocomplete-active":*/
	  x[currentFocus].classList.add("autocomplete-active");
	}
	function removeActive(x) {
	  /*a function to remove the "active" class from all autocomplete items:*/
	  for (var i = 0; i < x.length; i++) {
		x[i].classList.remove("autocomplete-active");
	  }
	}
	function closeAllLists(elmnt) {
	  /*close all autocomplete lists in the document,
	  except the one passed as an argument:*/
	  var x = document.getElementsByClassName("autocomplete-items");
	  for (var i = 0; i < x.length; i++) {
		if (elmnt != x[i] && elmnt != inp) {
		x[i].parentNode.removeChild(x[i]);
	  }
	}
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
	  closeAllLists(e.target);
  });
  }
  
autocomplete(document.getElementById("myInput"), countries);
 
/* end of feature search */