
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
	"welcomeMessage" : "Welcome!<br><br>I fell for Front End Web Development because it allows me to unite two long separated sides of my mind and life: my visual sences which love art and design, and my trained analytical brain which equally loves to systematically identify and solve problems.",
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

function contactInfo() {
	var contactHeader = $("#header");
	var contactFooter = $("#footer");

	var contactTopnode, contactFootertitle, contactFooternode;
	contactTopnode = $("<div><ul id='topContacts' class='flexRow'></ul></div>");
	contactFootertitle = $("<h1 class='footerTitle white'>Let's connect!</h1>");
	contactFooternode = $("<div><ul id='footerContacts' class='flexRow'></ul></div>");

	var contactTop, contactBottom, contactWhite;
	contactTop = contactTopnode.find("#topContacts");
	contactBottom = contactFooternode.find("#footerContacts");

	var formMobile, formEmail, formGithub, formLocation;
	formMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	formEmail = HTMLemail.replace("%data%", bio.contacts.email);
	formGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	formLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	var footerSpans = $("span");

	contactHeader.append(contactTopnode);
	contactTop.append(formMobile, formEmail, formGithub, formLocation);
	contactFooter.append(contactFootertitle, contactFooternode);
	contactBottom.append(formMobile, formEmail, formGithub, formLocation);
	contactFooter.find("span").addClass("white");
}
$(contactInfo);

/*var contactSelect = 
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

$("#topContacts").append(formMobile, formEmail, formGithub, formLocation);*/

// Add welcome message in one function (I need to understands functions!!)

function message() {
	var welcomeSelect = $("#bigpicContent");
	var formWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	
	welcomeSelect.prepend(formWelcome);
}
$(message);

/*Step by step:
var welcomeSelect = 
	$("#bigpicContent");
var formWelcome = 
	HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
welcomeSelect.prepend(formWelcome);*/

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

var glanceButton = "<button>Skills At a Glance</button>";
$("#buttonSkills").append(glanceButton);

// 'action' on button click:

$("#buttonSkills").prepend('<div id="skills" class="flexRow bold"></div>');
$("#skills").prepend('<p class="flex-item"><span class="caps">Skills at a Glance:</span></p>');

for (skill in bio.skills) {
	var formSkills = 
		HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formSkills);
}


/* Open challenge: to include all these functions for bio data in
its object...*/



// Section 'featured'--prepared for diff. use, here: Portfolio site
/* (2) html section 'featured' hosts the required
'P2 sections' of 'work', 'education', 'projects' and
the map*/

