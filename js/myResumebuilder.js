
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

var bio = {
	"name": "Karin S Korth",
	"role": "Front End Web Developer & Sociologist",
	"contacts": {
		"mobile" : "(1) 312 914 8834",
		"email" : "k.s.korth@gmail.com",
		"github" : "karinsky",
		"location" : "Chicago (IL) U.S.A."
		},
	"welcomeMessage" : "Hello world!<br><br>I fell for Front End Web Programming because it allows to unite two long separated sides of my life: my visual sences which love art and design, and my trained analytical brain which equally loves to identify and solve problems methodically.",
	"skills" : [
		"Analysis",
		"Project Management",
		"Teaching",
		"Team Player",
		"User Oriented"
		],
	"biopic" : "xx" // comma when the function follows
//	"display" : function {}
}

// Still missing: pre/append name + role + biopic

// Appending contact infos:

var contactSelect = 
	$("#header");
var contactNode = 
	$("<div id='contactData'><ul id='topContacts' class='flexRow'></ul></div>");
contactSelect.append(contactNode);

var formMobile = 
	HTMLmobile.replace("%data%", bio.contacts.mobile);
var formEmail =
	HTMLemail.replace("%data%", bio.contacts.email);
var formGithub =
	HTMLgithub.replace("%data%", bio.contacts.github);
var formLocation =
	HTMLlocation.replace("%data%", bio.contacts.location);

$("#topContacts").append(formMobile);
$("#topContacts").append(formEmail);
$("#topContacts").append(formGithub);
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

for (skill in bio.skills) {
	var formSkills = 
		HTMLskills.replace("%data%", bio.skills[skill]);
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
	$("#bigpigContent");

var formWelcome = 
	HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#bigpicContent").prepend(formWelcome);

/*var formWelcome = 
	HTMLwelcomeMsg.replace("%data%", bio.myWelcome);
$("#welcomeText").append(formWelcome);

Maybe, some steps back: figure out, how to place a new container
in bigpic...XXX*/



// Section 'featured'--prepared for diff. use, here: Portfolio site
/* (2) html section 'featured' hosts the required
'P2 sections' of 'work', 'education', 'projects' and
the map*/

