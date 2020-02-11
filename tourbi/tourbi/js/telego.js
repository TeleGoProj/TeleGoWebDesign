$( document ).ready(function() {
   init();
});

function init(){
$("#closed-header-menu").hide();
}

function toggleBanner(){
$("#opened-header-menu").toggle();
$("#closed-header-menu").toggle();

}