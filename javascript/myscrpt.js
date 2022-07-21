$(document).ready(function () {
  var toggleNav = $(".toggleNav");
  var navlinkCon = $("#navlink-con");

  toggleNav.click(function () {
    //navlinkCon.toggleClass('active');
    navlinkCon.slideToggle();
  });


  //adds fadein animation to the body-container
  $('.body-container').addClass('animated fadeIn')
});




var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}


function showPage() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'transparent';
  document.getElementById("loader").style.display = "none";
  document.getElementsByClassName("body-container")[0].style.display = "block";
}