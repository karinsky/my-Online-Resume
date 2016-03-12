
// Mouseover identifying logos:

function hoover() {
	var getLogo1, getLogo2, getLogo3;
	getLogo1 = $("#logo1");
	getLogo2 = $("#logo2");
	getLogo3 = $("#logo3");
	getLogo1.onmouseover = showText1;
	getLogo2.onmouseover = showText2;
	getLogo3.onmouseover = showText3;
	function showText1 () {
		var textLogo1 = "Udacity Online Programs";
		getLogo1.innerHTML(textLogo1);
	}
	function showText2 () {
		var textLogo2 = "Johann Wolfgang Goethe University, Germany";
		getLogo2.innerHTML(textLogo2);
	}
	function showText3 () {
		var textLogo3 = "Ruhr University Bochum, Germany";
		getLogo3.innerHTML(textLogo3);
	}
}
$(hoover);

//(1) The 'bio-section' (header + footer)

// Preparing 'bio' object:

var myInfo = {
	"myWelcome" : "I fell for Front End Web Programming because I could finally join two sides of my mind in a crisis moment of my life: my visual sences which love art + design, and my trained analytical brain which equally loves to identify and solve challenging problems",
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

// Still missing: pre/append name + role + biopic

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

/* Note on P2 requirements:
I include 'skills' in the bio-object as required, but I
(try to) build a modular function(object?) to actually
add skills (on a button click) in a differents section
of my html. [I am still not sure whr to include the code]*/

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

/* Maybe, I can include all functions for bio data in its object...
-> trying to place a 'welcome'*/

var welcomeSelect = 
	$(".content");
var welcomeNode = $("<p id='welcomeText class=italic'></p>")
welcomeSelect.prepend(welcomeNode);

$("#welcomeText").append("xx");
/*var formWelcome = 
	HTMLwelcomeMsg.replace("%data%", myInfo.myWelcome);
$("#welcomeText").append(formWelcome);

Maybe, some steps back: figure out, how to place a new container
in bigpic...XXX*/



// Section 'featured'--prepared for diff. use, here: Portfolio site
/* (2) html section 'featured' hosts the required
'P2 sections' of 'work', 'education', 'projects' and
the map*/

