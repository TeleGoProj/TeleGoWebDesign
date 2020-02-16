$( document ).ready(function() {
   init();
   //applyEditableStyle();
});

function init(){
$("#closed-header-menu").hide();
}

function toggleBanner(){
$("#opened-header-menu").toggle();
$("#closed-header-menu").toggle();

}
