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


// Html for interactive display of 'featured items' (in 3rd main <div id="itemDisplay">):

var HTMLfeaturedDisplay1 = '<div id="displayItem1" class="displayCanvas" style="display: none"></div>';
var HTMLfeaturedDisplay2 = '<div id="displayItem2" class="displayCanvas" style="display: none"></div>';
var HTMLfeaturedDisplay3 = '<div id="displayItem3" class="displayCanvas" style="display: none"></div>';
var HTMLfeaturedDisplay4 = '<div id="displayItem4" class="displayCanvas" style="display: none"></div>';

var HTMLentryStart = '<div class="item-entry"></div>';
var HTMLformalInfo = '<div class="formalInfo"></div>';
var HTMLdivMoreless = '<div class="readMoreless"></div>';
var HTMLdivClosemore = '<div class="closeReadmore"></div>';
var HTMLclosePage = '<span id="close" class="link asLink floatLeft"><br>Close...</span>';
var HTMLclosePages = '<span id="close2" class="link asLink floatLeft"><br>Close...</span>';
var HTMLreadMore = '<span id="more" class="link asLink floatRight"><br>Read more...</span>';
var HTMLreadLess = '<span id="less" class="link asLink floatRight"><br>Read Less...</span>';


// Html for 'work object':

var HTMLdisplayWork = '<div id="work" class="displayBox"><h1 class="titleBox">Work Experience</h1></div>';
var HTMLdisplayMorework = '<div id="moreWork" class="boxMoreless" style="display: none"></div>';
var HTMLworkEmployer = '<h2 class="h2Resumedisplay caps">%data%</h2>';
var HTMLworkTitle = '<h3 class="h3Resumedisplay">%data%</h3>';
var HTMLworkDates = '<span class="quote floatRight">%data%</span>';
var HTMLworkLocation = '<span class="quote floatLeft">%data%</span>';
var HTMLworkDescription = '<p class="pResumedisplay">%data%</p>';

var HTMLdisplayEdu = '<div id="edu" class="displayBox"><h1 class="titleBox">Education</h1></div>';
