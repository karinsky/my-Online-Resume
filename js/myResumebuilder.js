
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
	"myWelcome" : "discover creativity, diligence, and an analytical mind set 'made in Germany'",
	"myLocation" : "Chicago (IL) U.S.A.",
	"contactInfo" : {
		"myMobile" : "(1) 312 914 8834",
		"myEmail" : "k.s.korth@gmail.com",
		"myLinkedin" : "(upcoming)",
		"myGithub" : "karinsky"
		},
	"mySkills" : [
		"analysis",
		"clear design",
		"drive & dedication",
		"project management",
		"teaching",
		"team-playing"
		]
};

// Appending contact infos:

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
	(They use the same break points so it seemed more efficient)
	to add some css to existing media queries*/

// Add 'skills at a glance' on button click

var skillsButton = "<button>Skills at a Glance</button>";
$("#buttonSkills").append(skillsButton);
