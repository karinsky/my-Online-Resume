
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

/*(1) The 'bio object' (adding to the 'bigpic', 'featured' and
      'footer' sections*/

/*The project specifications demand that we need to build four
JSON objects and that each one needs to follow the provides schemas
exactly. My objects comply -- but the specifications do not demand
to actually use ALL object elements [properties?] in the display
function.
My project is based on the assumption that the header section and
the core of the 'bigpic' section stay the same while other content
can be swapt in js. On this line, it seemed forced and artificial
to build in js which would 'swap in' my name, role, and biopic.
In the same time, I believe, my project makes up for such 'chores'
in the 'bio' display function by adding more functionality the main
resume parts, here in the 'featured' section.*/

var bio = {
	"name": "Karin S Korth",
	"role": "Front End Web Developer & Sociologist",
	"contacts": {
		"mobile" : "(1) xxx 914 8834",
		"email" : "k.s.korth@gmail.com",
		"github" : "karinsky",
		"located" : "Chicago (IL) U.S.A."
		},
	"welcomeMessage" : "Welcome!<br><br>I fell for Front End Web Development because it allows me to unite two long separated sides of my mind and life: my visual sences which love art and design, and my trained analytical brain which equally loves to systematically identify and solve problems.",
	"skills" : [
		"Analysis",
		"Project Management",
		"Teaching",
		"Team Player",
		"User Oriented"
		],
	"biopic" : 'src="images/DSC0007cutedsw300w.JPG" alt="My picture"',
	"display" : function() {
		var contactHeader = $("#header");
		var contactFooter = $("#footer");

		var contactTopnode, contactFootertitle, contactFooternode;
		contactTopnode = $("<div><ul id='topContacts' class='flexRow'></ul></div>");
		contactFootertitle = $("<h1 class='footerTitle white'>Let's connect!</h1>");
		contactFooternode = $("<div><ul id='footerContacts' class='flexRow'></ul></div>");

		var contactTop, contactBottom;
		contactTop = contactTopnode.find("#topContacts");
		contactBottom = contactFooternode.find("#footerContacts");

		var formMobile, formEmail, formGithub, formLocation;
		formMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		formEmail = HTMLemail.replace("%data%", bio.contacts.email);
		formGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		formLocation = HTMLlocation.replace("%data%", bio.contacts.located);

		contactHeader.append(contactTopnode);
		contactTop.append(formMobile, formEmail, formGithub, formLocation);
		contactFooter.append(contactFootertitle, contactFooternode);
		contactBottom.append(formMobile, formEmail, formGithub, formLocation);
		contactFooter.find("span").addClass("white");

		var welcomeSelect, formWelcome;
		welcomeSelect = $("#bigpicContent");
		formWelcome = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
	
		welcomeSelect.prepend(formWelcome);

		var skillsSelect, skillsNode;
		skillsSelect = $("#featured");
		skillsNode = $('<div id="skills" class="flexRow bold"></div>');

		skillsSelect.prepend(skillsNode);
		if (bio.skills.length >= 1) {
			for (var skill in bio.skills) {
				var selectSkills, formSkills;
				selectSkills = $("#skills");
				formSkills = HTMLskills.replace("%data%", bio.skills[skill]);
				selectSkills.append(formSkills);
			}
		}
	
		var glanceSelect, glanceText;
		glanceSelect = $("#skills");
		glanceText = $("<p class='flex-item'><span class='caps'>Skills at a Glance:</span></p>");

		glanceSelect.prepend(glanceText);
	}
};
bio.display();

/*  Media queries adjusting for screen size in css.
	(They use the same break points; thus it seemed more 
	efficient to add some css to existing media queries.)



// Section 'featured'--prepared for diff. use, here: Portfolio site
/* (2) html section 'featured' hosts the required
'P2 sections' of 'work', 'education', 'projects' and
the map*/

