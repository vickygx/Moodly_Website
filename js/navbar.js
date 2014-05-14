// <div id="navbar"> 
//     <div id="logo">MOODLY</div>
//     <div id="menu">
//         <div class="menuItemBox"><a href="#" class="menuItem">ABOUT</a></div>
//         <div class="menuItemBox"><a href="#" class="menuItem">ETHNOGRAPHIC STUDIES</a></div>
//         <div class="menuItemBox"><a href="#" class="menuItem">CONCEPT</a></div>
//         <div class="menuItemBox"><a href="#" class="menuItem">HOW IT WORKS</a></div>
//     </div>
// </div> 



var add_navbar = function(divId){
  var navBarOpener = '<div id="navbar">';
  var logo = '<div id="logo">MOODLY</div>';

  var menu = '<div id="menu">';
  menu += '<div class="menuItemBox"><a href="index.html" class="menuItem">ABOUT</a></div>';
  menu += '<div class="menuItemBox"><a href="ethnographic.html" class="menuItem">ETHNOGRAPHIC STUDIES</a></div>';
  menu += '<div class="menuItemBox"><a href="concept.html" class="menuItem">CONCEPT</a></div>';
  menu += '<div class="menuItemBox"><a href="howitworks.html" class="menuItem">HOW IT WORKS</a></div>';
  menu += '</div>';
            
  var navBarCloser = '</div>';

  var navBarHtml = navBarOpener + logo + menu + navBarCloser;

  $(divId).prepend(navBarHtml);
}

