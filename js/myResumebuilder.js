
// Mouseover identifying logos

document.querySelector(".logo1").onmouseover = function() {
	title="Udacity Online Education"
}
document.querySelector(".logo2").onmouseover = function() {
	title="Johann Wolfgang Goethe University, Germany"
}
document.querySelector(".logo3").onmouseover = function() {
	title="Ruhr University Bochum, Germany"
}

// Preparing 'bio' pieces:

var myInfo = {
	"myWelcome" : "Discover creativity, diligence, and an analytical mind 'made in Germany'",
	"myLocation" : "Chicago (IL) U.S.A.",
	"contactInfo" : {
		"myMobile" : "(1) 312 914 8834",
		"myEmail" : "k.s.korth@gmail.com",
		"myLinkedin" : "(upcoming)",
		"myGithub" : "karinsky"
		},
	"mySkills" : [
		"Analysis",
		"Drive & Dedication",
		"Project Management",
		"Teaching",
		"Team Player",
		"User Oriented",
		]
};

// Appending contact infos:

var contactSelect = 
	$("#header");
var contactNode = 
	$("<div id='contactData'><ul id='topContacts' class='flexRow'></ul></div>");
contactSelect.append(contactNode);

var formMobile = 
	HTMLmobile.replace("%data%", myInfo.contactInfo.myMobile);
var formEmail =
	HTMLemail.replace("%data%", myInfo.contactInfo.myEmail);
var formGithub =
	HTMLgithub.replace("%data%", myInfo.contactInfo.myGithub);
var formLinkedin =
	HTMLlinkedin.replace("%data%", myInfo.contactInfo.myLinkedin);
var formLocation =
	HTMLlocation.replace("%data%", myInfo.myLocation);

$("#topContacts").append(formMobile);
$("#topContacts").append(formEmail);
$("#topContacts").append(formGithub);
$("#topContacts").append(formLinkedin);
$("#topContacts").append(formLocation);

/*  Media queries adjusting for screen size in css
	(They use the same break points so it seemed more 
	efficient to add some css to existing media queries)*/


// Add 'skills at a glance' on button click

// 1) add html node for both + button

var skillsSelect = 
	$("#featured");
var skillsNode = 
	$("<div id='buttonSkills'></div>");
skillsSelect.prepend(skillsNode);

var glanceButton = "<button>Skills at a Glance</button>";
$("#buttonSkills").append(glanceButton);
/* this position best for small screen; 
   Can I 'move' #buttonSkills (see eg 'insertBefore/After()'') for wide screen
   with an event listener registering screen width (like in media queries)??
   Desired for wider screens: append button to '#bigpic' (+ eventually prepend
   'contactButton# to '#bigpic'*/

// 'action' on button click:

// a) prepend flex-box + skills [needs to get into '.click(function)'-toggle]

$("#buttonSkills").prepend('<div id="skills" class="flexRow boldText"></div>');

for (skill in myInfo.mySkills) {
	var formSkills = 
		HTMLskills.replace("%data%", myInfo.mySkills[skill]);
		$("#skills").append(formSkills);
}

// b) tried to replace string on button -> needs trigger for function

function buttonReplace () {
	var get2 = $("#skillsButton");
	var remove2 = get2.replace("Skills at a Glance", "Remove Skills ...");
	$("#skillsButton") = remove2;
}


// Section 'featured'--prepared for diff. use, here: Portfolio site

