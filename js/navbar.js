// <div id="navbar"> 
//     <div id="logo">MOODLY</div>
//     <div id="menu">
//         <div class="menuItemBox"><a href="#" class="menuItem">ABOUT</a></div>
//         <div class="menuItemBox"><a href="#" class="menuItem">ETHNOGRAPHIC STUDIES</a></div>
//         <div class="menuItemBox"><a href="#" class="menuItem">CONCEPT</a></div>
//         <div class="menuItemBox"><a href="#" class="menuItem">HOW IT WORKS</a></div>
//     </div>
// </div> 



var add_navbar = function(divId, activeId){
  var navBarOpener = '<div id="navbar">';
  var logo = '<a href="index.html" class="link"><div id="logo">MOODLY</div> </a>';

  var menu = '<div id="menu">';
  menu += '<div id="navAbout" class="menuItemBox"><a href="about.html" class="menuItem">About</a></div>';
  menu += '<div id="navEthno" class="menuItemBox"><a href="ethnographic.html" class="menuItem">Ethnographic studies</a></div>';
  menu += '<div id="navConcept" class="menuItemBox"><a href="concept.html" class="menuItem">Concept</a></div>';
  menu += '<div id="navWorks" class="menuItemBox"><a href="howitworks.html" class="menuItem">How it works</a></div>';
  menu += '<div id="navLanding" class="menuItemBox"><a href="landing.html" class="menuItem">Landing</a></div>';
  menu += '</div>';
            
  var navBarCloser = '</div>';

  var navBarHtml = navBarOpener + logo + menu + navBarCloser;

  $(divId).prepend(navBarHtml);
  $(activeId).addClass('navActive');
  // $("#navLanding").click(function(){
  //   $("#blackOverlay").css("opacity", '0.8');
  // });


}

