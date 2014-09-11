var add_navbar = function(divId, activeId){
  var navBarOpener = '<div id="navbar">';
  var logo = '<a href="index.html" class="link"><div id="logo">MOODLY</div> </a>';

  var menu = '<div id="menu">';
  menu += '<div id="navAbout" class="menuItemBox"><a href="about.html" class="menuItem">About</a></div>';
  menu += '<div id="navEthno" class="menuItemBox"><a href="ethnographic.html" class="menuItem">Ethnographic studies</a></div>';
  menu += '<div id="navConcept" class="menuItemBox"><a href="concept.html" class="menuItem">Concept</a></div>';
  menu += '<div id="navWorks" class="menuItemBox"><a href="howitworks.html" class="menuItem">How it works</a></div>';
  menu += '<div id="navVideo" class="menuItemBox"><a href="video.html" class="menuItem">Museum Demo</a></div>';
  menu += '</div>';
            
  var navBarCloser = '</div>';

  var navBarHtml = navBarOpener + logo + menu + navBarCloser;

  $(divId).prepend(navBarHtml);
  $(activeId).addClass('navActive');
  
}

