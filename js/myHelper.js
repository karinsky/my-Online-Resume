/*
*  Html for the 'bio object'
*/

var HTMLcontactTopnode = $("<div><ul id='topContacts' class='flexRow flexContacts'></ul></div>");
var HTMLcontactFootertitle = $("<h1 class='footerTitle white'>Let's connect!</h1>");
var HTMLcontactFooternode = $("<div><ul id='footerContacts' class='flexRow flexContacts'></ul></div>");
var HTMLskillsNode = $('<div id="skills" class="flexRow flexContacts bold"></div>');
var HTMLglanceText = $("<p class='flexitemContacts'><span class='caps'>Skills at a Glance:</span></p>");

var HTMLmobile = '<li class="flexitemContacts"><span class="caps">Mobile</span><span class="bold">%data%</span></li>';
var HTMLemail = '<li class="flexitemContacts"><span class="caps">Email</span><span class="bold">%data%</span></li>';
var HTMLgithub = '<li class="flexitemContacts"><span class="caps">Github</span><span class="bold">%data%</span></li>';
var HTMLlinkedin = '<li class="flexitemContacts"><span class="caps">Linkedin</span><span class="bold">%data%</span></li>';
var HTMLlocation = '<li class="flexitemContacts"><span class="caps">Location</span><span class="bold">%data%</span></li>';

//var HTMLbioPic -- not used in my take on the Resume project (see myREADME);
var HTMLwelcomeMsg = '<p id="welcome" class="quote white">%data%</p>';
var HTMLskills = '<li class="flexitemContacts"><span class="bold">%data%</span></li>';

/*
*  General Html for the interactive display of 'featured items'
*  (currently displaying work, education, projects, and Google maps)
*/

var HTMLfeaturedDisplay = '<div class="displayCanvas" style="display: none"></div>';
var HTMLentryStart = '<div class="item-entry"></div>';
var HTMLformalInfo = '<div class="formalInfo"></div>';

var HTMLdisplayMore = '<div class="boxReadmore" style="display: none"></div>';
var HTMLdivMoreless = '<div class="readMoreless"></div>';
var HTMLdivClosemore = '<div class="closeReadmore"></div>';
var HTMLclosePage = '<span class="link asLink floatLeft"><br>Close...</span>';
var HTMLclosePages = '<span class="link asLink floatLeft"><br>Close all...</span>';
var HTMLreadMore = '<span class="link asLink floatRight"><br>Read more...</span>';
var HTMLreadLess = '<span class="link asLink floatRight"><br>Read less...</span>';

//  Special Html for the 'work object':

var HTMLdisplayWork = '<div id="work" class="displayBox"><h1 class="titleBox">Work Experience</h1></div>';

var HTMLworkEmployer = '<h2 class="displayFirstdiv caps">%data%</h2>';
var HTMLworkTitle = '<h3 class="displayMiddlediv">%data%</h3>';
var HTMLworkDates = '<span class="quote floatRight">%data%</span>';
var HTMLworkLocation = '<span class="quote floatLeft">%data%</span>';
var HTMLworkDescription = '<div class="removeFloat displayLastdiv">%data%</div>';

//  Special Html for the 'education object':

var HTMLdisplayEdu = '<div id="edu" class="displayBox"><h1 class="titleBox">Education</h1></div>';

var HTMLschoolName = '<h2 class="displayFirstdiv caps">%data%</h2>';
var HTMLschoolDegree = '<h3 class="displayMiddlediv">%data%</h3>';
var HTMLschoolMajor = '<div class="displayMiddlediv">%data%</div>';
var HTMLschoolDates = '<span class="quote floatRight">%data%</span>';
var HTMLschoolLocation = '<span class="quote floatLeft">%data%</span>';
var HTMLeduUrl = '<div class="displayLastdiv removeFloat"><a href>%data%</a></div>';

var HTMLonlineHeader = '<div><h2 class="displayLastdiv caps">Online Classes</h2></div>';
var HTMLonlineTitle = '<h3 class="displayMiddlediv">%data%</h3>';
var HTMLonlineSchool = '<span class="quote floatLeft">%data%</span>';
var HTMLonlineDates = '<span class="quote floatRight">%data%</span>';
var HTMLonlineUrl = '<div class="displayLastdiv removeFloat"><a href>%data%</a></div>';

//  Special Html for the 'projects object':

var HTMLdisplayProjects = '<div id="projects" class="displayBox"><h1 class="titleBox">Projects (With Placeholders)</h1></div>';
var HTMLentryStartflex = '<div class="item-entry flexDisplay flexdisplay-box"></div>';
var HTMLflexItem1of2 = '<div class="itemdisplay-pic"></div>';
var HTMLflexItem2of2 = '<div class="itemdisplay-text"></div>';

var HTMLprojectTitle = '<h2 class="displayFirstdiv caps">%data%</h2>';
var HTMLprojectDates = '<span class="quote floatLeft">%data%</span>';
var HTMLprojectDescription = '<div class="displayLastdiv removeFloat">%data%</div>';
var HTMLprojectImages = '<img src="%data%">';

//  Special Html for Google maps:

var HTMLdisplayMaps = '<div id="googleMaps" class="displayBox"><h1 class="titleBox">Where I worked and studied</h1></div>';
var HTMLgoogleMap1 = '<div class="mapDiv"><div id="map1" class="maps"></div></div>';
var HTMLlinkmap2 = '<span id="showMap2" class="link asLink floatRight"><br>German locations more detailed...</span>';
var HTMLgoogleMap2 = '<div class="mapDiv"><div id="map2" class="maps"></div></div>';
var HTMLmaps2Header = '<div><h2 class="displayLastdiv caps">Where I worked and studied in Germany</h2></div>';
var HTMLseeLess = '<span class="link asLink floatRight"><br>From local back to global overview...</span>';

/*  
* Code for console.log click locations as well as for appending the map and 'locationalize' is
* in myResumebuilder.js.
*/