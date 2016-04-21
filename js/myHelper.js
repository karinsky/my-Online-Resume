// Html for 'bio object':

var HTMLcontactTopnode = $("<div><ul id='topContacts' class='flexRow'></ul></div>");
var HTMLcontactFootertitle = $("<h1 class='footerTitle white'>Let's connect!</h1>");
var HTMLcontactFooternode = $("<div><ul id='footerContacts' class='flexRow'></ul></div>");
var HTMLskillsNode = $('<div id="skills" class="flexRow bold"></div>');
var HTMLglanceText = $("<p class='flex-item'><span class='caps'>Skills at a Glance:</span></p>");

var HTMLmobile = '<li class="flex-item"><span class="caps">Mobile</span><span class="bold">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="caps">Email</span><span class="bold">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="caps">Github</span><span class="bold">%data%</span></li>';
var HTMLlinkedin = '<li class="flex-item"><span class="caps">Linkedin</span><span class="bold">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="caps">Location</span><span class="bold">%data%</span></li>';

//var HTMLbioPic = '<img src="%data%" class="biopic">' -- not used in this P3 project (see xxx);
var HTMLwelcomeMsg = '<p id="welcome" class="quote white">%data%</p>';
var HTMLskills = '<li class="flex-item"><span class="bold">%data%</span></li>';


// Html for interactive display of 'featured items' 1-3 (displaying work, education, and projects):

var HTMLfeaturedDisplay = '<div class="displayCanvas" style="display: none"></div>';
var HTMLentryStart = '<div class="item-entry"></div>';
var HTMLformalInfo = '<div class="formalInfo"></div>';
var HTMLdivMoreless = '<div class="readMoreless"></div>';
var HTMLdivClosemore = '<div class="closeReadmore"></div>';
var HTMLclosePage = '<span class="link asLink floatLeft"><br>Close...</span>';
var HTMLclosePages = '<span class="link asLink floatLeft"><br>Close all...</span>';
var HTMLreadMore = '<span class="link asLink floatRight"><br>Read more...</span>';
var HTMLreadLess = '<span class="link asLink floatRight"><br>Read less...</span>';

// Html for 'work object':

var HTMLdisplayWork = '<div id="work" class="displayBox"><h1 class="titleBox">Work Experience</h1></div>';
var HTMLdisplayMorework = '<div id="moreWork" class="boxMoreless" style="display: none"></div>';
var HTMLworkEmployer = '<h2 class="h2Resumedisplay caps">%data%</h2>';
var HTMLworkTitle = '<h3 class="h3Resumedisplay">%data%</h3>';
var HTMLworkDates = '<span class="quote floatRight">%data%</span>';
var HTMLworkLocation = '<span class="quote floatLeft">%data%</span>';
var HTMLworkDescription = '<p class="pResumedisplay">%data%</p>';

// Html for 'edu object':

var HTMLdisplayEdu = '<div id="edu" class="displayBox"><h1 class="titleBox">Education</h1></div>';
var HTMLpUrl = '<p class="pResumedisplay"><a href>%data%</a href></p>';

var HTMLschoolName = '<h2 class="h2Resumedisplay caps">%data%</h2>';
var HTMLschoolDegree = '<h3 class="h3Resumedisplay">%data%</h3>';
var HTMLschoolDates = '<span class="quote floatRight">%data%</span>';
var HTMLschoolLocation = '<span class="quote floatLeft">%data%</span>';

var HTMLonlineClasses = 'h2 class="h2Resumedisplay caps">Online Classes</h2>';
var HTMLonlineTitle = '<h3 class="h3Resumedisplay">%data%</h3>';
var HTMLonlineSchool = '<span class="quote floatLeft">%data%</span>';
var HTMLonlineDates = '<span class="quote floatRight">%data%</span>';

