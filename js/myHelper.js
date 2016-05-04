// Html for 'bio object':

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

//var HTMLbioPic = '<img src="%data%" class="biopic">' -- not used in this P3 project (see xxx);
var HTMLwelcomeMsg = '<p id="welcome" class="quote white">%data%</p>';
var HTMLskills = '<li class="flexitemContacts"><span class="bold">%data%</span></li>';


// Html for interactive display of 'featured items' 1-3 (displaying work, education, and projects):

var HTMLfeaturedDisplay = '<div class="displayCanvas" style="display: none"></div>';
var HTMLentryStart = '<div class="item-entry"></div>';
var HTMLformalInfo = '<div class="formalInfo"></div>';

var HTMLdisplayMore = '<div class="boxReadmore" style="display: none"></div>';
var HTMLdivMoreless = '<div class="readMoreless"></div>';
var HTMLdivClosemore = '<div class="closeReadmore"></div>';
var HTMLclosePage = '<span class="link asLink floatLeft"><br>Close...</span>';
var HTMLclosePages = '<span class="link asLink floatLeft"><br>Close section...</span>';
var HTMLreadMore = '<span class="link asLink floatRight"><br>Read more...</span>';
var HTMLreadLess = '<span class="link asLink floatRight"><br>Read less...</span>';

// Html for 'work object':

var HTMLdisplayWork = '<div id="work" class="displayBox"><h1 class="titleBox">Work Experience</h1></div>';

var HTMLworkEmployer = '<h2 class="displayFirstdiv caps">%data%</h2>';
var HTMLworkTitle = '<h3 class="displayMiddlediv">%data%</h3>';
var HTMLworkDates = '<span class="quote floatRight">%data%</span>';
var HTMLworkLocation = '<span class="quote floatLeft">%data%</span>';
var HTMLworkDescription = '<div class="removeFloat displayLastdiv">%data%</div>';

// Html for 'education object':

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

// Html for 'projects object':

var HTMLdisplayProjects = '<div id="projects" class="displayBox"><h1 class="titleBox">Projects (With Placeholders)</h1></div>';
var HTMLentryStartflex = '<div class="item-entry flexRow flexDisplay"></div>';
var HTMLflexItem1of2 = '<div class="itemUpleft"></div>';
var HTMLflexItem2of2 = '<div class="itemDownright"></div>';

var HTMLprojectTitle = '<h2 class="displayFirstdiv caps">%data%</h2>';
var HTMLprojectDates = '<span class="quote floatRight">%data%</span>';
var HTMLprojectDescription = '<div class="displayLastdiv removeFloat">%data%</div>';
var HTMLprojectImage = '<img src="%data%">';




