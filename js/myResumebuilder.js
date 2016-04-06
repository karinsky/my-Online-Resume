/* Turn off loader */

$(document).ready(function() {
	var myLoader;
	myLoader = $("#loader");

	myLoader.hide("slow");
});

/* To header section;
mouseover identifying logos:*/

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

/* The 'bio object' (1)
(adding to the 'bigpic', 'featured', and 'footer' sections)*/

/*The project specifications demand that we need to build four
JSON objects and that each one needs to follow the provides schemas
exactly. My objects comply -- but the specifications do not demand
to actually use all object's elements in the display function.
My project is based on the assumption that the header section and
the core of the 'bigpic' section stay the same while other content
can be swapt in js. On this line, it seemed forced and artificial
to write code which would 'swap in' my name, role, and biopic.
In the same time, I believe, my project makes up for missing such,
in the provided framework, rather plain 'chores' by adding some
interactivity to the main resume parts which, in my project, are
added to the 'featured' section.*/

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
	"biopic" : "src='images/DSC0007cutedsw300w.JPG' alt='My picture'",
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


/*	Section 'featured'
	prepared for diff. use, here: Online Resume;

1)	The 1st main <div id='skills'> is appended in 'bio.display()'.
2)	The 2nd main <div id='featuredItems'> contains 4 'tiles' (with
	images) set up as event handlers to provide the other required
	P3 objects (work experience, education, projects) plus, 4th,
	the map 'on click'
3)	The 3rd main <div id='itemsDisplay' provides the 'anchor' to
	append, in js, further 'boxes' and their display content.

	The main 'display functions' for the 4 types of content have
	the same basic structure:
1)	Display content with event handlers at the end which allow to
	either close or, with more extended content:
2)	append more content, again with event handlers at the end which
	allow to 'close' all or 'read less'.
*/

function replaceTitle() {
	var selectTitle;
	selectTitle = $("#featured").children("h1").first();

	selectTitle.replaceWith('<h1 class="title-box">Resumé</h1>');
}
$(replaceTitle);

// The work object

var work = {
	"jobs" : [
		{
			"employer" : "Family Time",
			"title" : "Health Care and Estate Management", 
			"location" : "Chicago, IL, U.S.A.",
			"dates" : "2013 - current",
			"description" : "Caring for my husband after he was diagnosed with stage 3 cancer and, after he passed, for his estate."
		},
		{
			"employer" : "University of Chicago, Division of the Humanities",
			"title" : "Associate Dean of Students, Budget, and Planning",
			"location" : "Chicago, IL, U.S.A.",
			"dates" : "2011 - 2013",
			"description" : "Main responsibility for monitoring and projecting a student tuition budget of about $30 Mio."
		},
		{
			"employer" : "Family Time",
			"title" : "Health Care Management and Migrating", 
			"location" : "Schwelm/Frankfurt, Germany; Chicago, IL, U.S.A.",
			"dates" : "2009 - 2011",
			"description" : "Caring for my father and, after he passed away, immigrating to the U.S.A. to live with my late husband."
		},
		{
			"employer" : "Distance University Hagen, Faculty of Cultural and Social Sciences",
			"title" : "Online Mentor in the BA Program 'Methods of Cultural Studies'",
			"location" : "Hagen, Germany",
			"dates" : "2005 - 2009",
			"description" : "Lecturing and counseling in courses on social science methods in early online learning environments; developing the tracking and analysis of test scores."
		},
		{
			"employer" : "J. W. Goethe University, Department of Social Sciences",
			"title" : "Research Associate and Lecturer",
			"location" : "Frankfurt, Germany",
			"dates" : "1995 - 2004",
			"description" : "Teaching methods of social sciences, managing research projects and grants, editing publications, and organising conferences."
		},
		{
			"employer" : "J. W. Goethe University, Department of Social Sciences",
			"title" : "Office and Project Assistant",
			"location" : "Frankfurt, Germany",
			"dates" : "1989 - 1995",
			"description" : "I managed an office, a team, a publication series, and grants."
		},
		{
			"employer" : "Ruhr University Bochum, Psychological Institute and Faculty of Social Science",
			"title" : "Academic Assistant",
			"location" : "Bochum, Germany",
			"dates" : "1980 - 1988",
			"description" : "Supportive work for a full professor."
		},
		{
			"employer" : "Berlitz Corporation",
			"title" : "Teacher for German as a 2nd language",
			"location" : "Hagen, Germany",
			"dates" : "1976 - 1979",
			"description" : "Invaluable first teaching experiences."
		}
	],
	"display" : function() {
		var selectItembox1;
		selectItembox1 = $(".item-box:eq(0)");

		selectItembox1.click(function() {
			var basicSelect, addCanvas, selectItem1, item1Display;
			basicSelect = $("#itemsDisplay");
			addCanvas = basicSelect.append(HTMLfeaturedDisplay1);
			selectItem1 = basicSelect.children("#displayItem1");
			item1Display = selectItem1.append(HTMLdisplayWork);

			for (i = 0; i < 5; i++) {
				var myWork = $("#itemsDisplay").find("#work");
				myWork.append(HTMLentryStart);
				var lastWork = myWork.children(".item-entry:last");

				var formEmployer, formTitle, formLocation, formDates, formDescription;
				formEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
				formTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
				formLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
				formDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
				formDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

				lastWork.append(formEmployer);
				lastWork.append(formTitle);
				lastWork.append(HTMLformalInfo).append(formLocation + " " + formDates);
				lastWork.append(formDescription);
			}
			var selectMoreless = $("#itemsDisplay").find("#work");
			selectMoreless.append(HTMLdivMoreless);
			var readMoreless = selectMoreless.find(".readMoreless");
			readMoreless.append(HTMLclosePage + " " + HTMLreadMore);

			function closeDisplay() {
				var selectClose;
				selectClose = $("#itemsDisplay").find("#close");

				selectClose.click(function() {
					var displayClose;
					displayClose = $("#itemsDisplay").find("#displayItem1");

					displayClose.slideUp();
				});
			}
			closeDisplay();

			function displayMore() {
				var selectMore;
				selectMore = $("#itemsDisplay").find("#more").last();

				selectMore.click(function() {

					var selectClicked;
					selectClicked = $("#itemsDisplay").find("#more").last();
					selectClicked.removeClass("asLink").addClass("asClicked");

					for (i = 5; i < work.jobs.length; i++) {
						var moreWork = $("#work");
						moreWork.append(HTMLentryStart);
						var lastWork = moreWork.children(".item-entry:last");

						var formEmployer, formTitle, formLocation, formDates, formDescription;
						formEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
						formTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
						formLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
						formDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
						formDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

						lastWork.append(formEmployer);
						lastWork.append(formTitle);
						lastWork.append(HTMLformalInfo).append(formLocation + " " + formDates);
						lastWork.append(formDescription);
					}

					var selectCloseless = $("#work");
					selectCloseless.append(HTMLdivCloseless);
					var closeReadless = selectCloseless.find(".closeReadless").last();
					closeReadless.append(HTMLclosePages + " " + HTMLreadLess);

					function closeFinal() {
						var selectClose;
						selectClose = $("#itemsDisplay").find("#close2").last();

						selectClose.click(function() {
							var displayClose;
							displayClose = $("#itemsDisplay").find("#displayItem1");

							displayClose.slideUp();
						});
					}
					closeFinal();

					function closeLess() {
						var selectLess;
						selectLess = $("#itemsDisplay").find("#less").last();

						selectLess.click(function() {
							var selectLess, displayLess5, displayLess6, displayLess7, displayLesslast;
							selectLess = $("#itemsDisplay").children("#displayItem1");
							displayLess5 = selectLess.find(".item-entry:nth-last-of-type(5)");
							displayLess6 = selectLess.find(".item-entry:nth-last-of-type(6)");
							displayLess7 = selectLess.find(".item-entry:nth-last-of-type(7)");
							displayLesslast = selectLess.find(".closeReadless").last();

							displayLess5.slideUp();
							displayLess6.slideUp();
							displayLess7.slideUp();
							displayLesslast.slideUp();

							var selectClickless;
							selectClickless = $("#itemsDisplay").find("#more").last();
							selectClickless.removeClass("asClicked").addClass("asLink");
						});
					}
					closeLess();
				});
			}
			displayMore();
		});
	}
}
work.display();
// JSONLint: valid JSON (without function)
/* After adding the 'display function': It worries me a bit that Sublime
does not connect the outermost curly braces--but everything works and
JSHint does not complain paricularly...*/


/*The education object (to 'id item1' ?):

Preface on my German education:
a) The structure and degrees in the German educational system
   are not directly comparable to the American system, i.e.
   I do not have completed majors, though I have a PhD.
   Thus it took me some time to figure out the particular
   meaning of "degree" and "major" in Udacity's setup of
   properties for the 'education object'. As to my mind, I still
   completed a section of my education with a degree, I use
   the "major" property to designate a 'department/program'
   framework for the degree with which I left the educational
   institution.
b) A PhD in Germany did not require attending a program, and
   there was no formal start date. Anyway, a PhD is usually
   listed just with the year of it's accomplishment. In order
   to stick to an overall style, though, I add the month in
   'dates'.
A last remark: Young people may still include days in the
'dates' of their resumes. Later on, no one cares on which day
exactly someone started or finished schools or jobs 20 years
ago. Thus, 'month/year' as used here is a common resume formate
for 'dates'.*/


var education = {
	"schools" : [
		{
			"name" : "J W Goethe University",
			"major" : "Department of Social Sciences",
			"location" : "Frankfurt (Main), Germany",
			"dates" : "1/2008",
			"url" : "http://www.fb03.uni-frankfurt.de/39791667/international",
			"degree" : "PhD in Sociology"
		},
		{
			"name" : "J W Goethe University",
			"major" : "Department of Social Sciences",
			"location" : "Frankfurt (Main), Germany",
			"dates" : "10/1996",
			"url" : "http://www.fb03.uni-frankfurt.de/39791667/international",
			"degree" : "Certificate of Equivalence in Political Science"
		},
		{
			"name" : "Ruhr University Bochum",
			"major" : "Faculty of Social Sciences",
			"location" : "Bochum, Germany",
			"dates" : "1988",
			"url" : "http://www.sowi.rub.de/index.html.en",
			"degree" : "Diploma in Social Sciences"
		},
		{
			"name" : "Märkisches Gymnasium Schwelm",
			"major" : "'STEM' path",
			"location" : "Schwelm, Germany",
			"dates" : "1976",
			"url" : "http://www.mgs-schwelm.de/",
			"degree" : "University-Entrance Diploma"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front End Web Developer Nanodegree",
			"school" : "Udacity",
			"dates" : "10/2015-current",
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title" : "Learn JavaScript + Learn jQuery",
			"school" : "w3schools.com",
			"dates" : "1-2/2016",
			"url" : "http://www.w3schools.com/default.asp"
		},
		{
			"title" : "Getting Started with JavaScript",
			"school" : "Mozilla Developer Network",
			"dates" : "1/2016",
			"url" : "https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/JavaScript_basics"
		},
		{
			"title" : "Computer Science 101",
			"school" : "Stanford University (Publisher: Coursera)",
			"dates" : "9/2015",
			"url" : "https://www.coursera.org/course/cs101"
		}
	]
}
// JSONLint: valid JSON (without function)

function displayEdu() {
	var selectItembox2;
	selectItembox2 = $(".item-box:eq(1)");

	selectItembox2.click(function() {
	var basicSelect, eduDisplay;
	basicSelect = $("#itemsDisplay");
	eduDisplay = basicSelect.append(HTMLdisplayEdu);

//# display-box provided 'on click'--next: appending loop...	
	});
}
$(displayEdu);

