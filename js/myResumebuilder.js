/* Turn off loader */

$(document).ready(function() {
	var myLoader;
	myLoader = $("#loader");

	myLoader.hide("slow");
});

/* To header section (bio object follows immediately);
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
hoover();

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
		"location" : "Chicago, IL, U.S.A."
		},
	"welcomeMessage" : "Welcome!<br><br>I fell for Front End Web Development because it allows me to unite two long separated strands of my mind and life: my visual sences which love art and design, and my trained analytical brain which equally loves to systematically identify and solve problems.",
	"skills" : [
		"Analysis",
		"Project Management",
		"Teaching",
		"Team Player",
		"User Oriented"
		],
	"biopic" : "src='images/DSC0007cutedsw300w.JPG' alt='My picture'",
	"display" : function() {
		var contactHeader, contactFooter;
		contactHeader = $("#header");
		contactFooter = $("#footer");
		contactHeader.append(HTMLcontactTopnode);
		contactFooter.append(HTMLcontactFootertitle, HTMLcontactFooternode);

		var contactTop, contactBottom;
		contactTop = $("#topContacts");
		contactBottom = $("#footerContacts");

		var formMobile, formEmail, formGithub, formLocation;
		formMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		formEmail = HTMLemail.replace("%data%", bio.contacts.email);
		formGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		formLocation = HTMLlocation.replace("%data%", bio.contacts.located);

		contactTop.append(formMobile, formEmail, formGithub, formLocation);
		contactBottom.append(formMobile, formEmail, formGithub, formLocation);
		contactFooter.find("span").addClass("white");

		var welcomeSelect, formWelcome;
		welcomeSelect = $("#bigpicContent");
		formWelcome = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
		welcomeSelect.prepend(formWelcome);

		var skillsSelect;
		skillsSelect = $("#featured");
		skillsSelect.prepend(HTMLskillsNode);
		if (bio.skills.length >= 1) {
			for (var skill in bio.skills) {
				var selectSkills, formSkills;
				selectSkills = $("#skills");
				formSkills = HTMLskills.replace("%data%", bio.skills[skill]);
				selectSkills.append(formSkills);
			}
		}
	
		var glanceSelect;
		glanceSelect = $("#skills");
		glanceSelect.prepend(HTMLglanceText);
	}
};
bio.display();

/*  Media queries adjusting for screen size in css.
	(They use the same break points; thus it seemed more 
	efficient to add some css to existing media queries.)*/


/*	Section 'featured'
	prepared for diff. use, here: Online Resume;

1)	The 1st main <div id='skills'> is appended in 'bio.display()'.
2)	The 2nd main <div id='featuredItems'> contains 4 'tiles' (with
	images) set up as event handlers to provide the other required
	P3 objects (work experience, education, projects) plus, 4th,
	the map 'on click'.
3)	The 3rd main <div id='itemsDisplay' provides the 'anchor' to
	append, in js, further 'boxes' and their display content.

	The main 'display functions' for the 4 types of content have
	the same basic structure:
1)	Display content with event handlers at the end which allow to
	either close or, with more extended content:
2)	append more content, again with event handlers at the end which
	allow to 'close section' or 'read less'.
*/

function replaceTitle() {
	var selectTitle;
	selectTitle = $("#featured").children("h1").first();
	selectTitle.replaceWith('<h1 class="titleBox">Resumé</h1>');
}
replaceTitle();

// The 'work object' (2)

var work = {
	"jobs" : [
		{
			"employer" : "Family Time",
			"title" : "Health Care and Estate Management", 
			"location" : "Chicago, IL, U.S.A.",
			"dates" : "2013 - current",
			"description" : "Caring for my husband after he was diagnosed with stage 3 cancer; still caring for his estate and charting a new life after he passed away."
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
			"location" : "Schwelm and Frankfurt/Main, Germany; Chicago, IL, U.S.A.",
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
			"location" : "Frankfurt/Main, Germany",
			"dates" : "1995 - 2004",
			"description" : "Teaching methods of social sciences, managing research projects and grants, editing publications, and organising conferences."
		},
		{
			"employer" : "J. W. Goethe University, Department of Social Sciences",
			"title" : "Office and Project Assistant",
			"location" : "Frankfurt/Main, Germany",
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
		var basicSelect, selectDisplay1;
		basicSelect = $("#itemsDisplay");
		basicSelect.append(HTMLfeaturedDisplay);
		selectDisplay1 = basicSelect.children().filter(":eq(0)");
		selectDisplay1.append(HTMLdisplayWork);

		for (i = 0; i < 5; i++) {
			var selectWork, myWork, lastWork;
			selectWork = $("#work");
			myWork = selectWork.append(HTMLentryStart);
			lastWork = myWork.children(".item-entry:last");

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
		selectWork.append(HTMLdivMoreless);

		var selectMoreless;
		selectMoreless = selectWork.find(".readMoreless");
		selectMoreless.append(HTMLclosePage + " " + HTMLreadMore);
		selectWork.append(HTMLdisplayMore);

		for (i = 5; i < work.jobs.length; i++) {
			var selectReadmore, moreWork, finalWork;
			selectReadmore = selectWork.find(".boxReadmore");
			moreWork = selectReadmore.append(HTMLentryStart);
			finalWork = moreWork.children(".item-entry:last");

			var formEmployer, formTitle, formLocation, formDates, formDescription;
			formEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			formTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			formLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			formDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			formDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
//	acc. JSHint 'already defined'--but 'out of scope' in following when not defined (->defined again)

			finalWork.append(formEmployer);
			finalWork.append(formTitle);
			finalWork.append(HTMLformalInfo).append(formLocation + " " + formDates);
			finalWork.append(formDescription);
		}
		selectReadmore.append(HTMLdivClosemore);

		var selectClosefinal;
		selectClosefinal = selectReadmore.find(".closeReadmore");
		selectClosefinal.append(HTMLclosePages + " " + HTMLreadLess);

//	scrolling effect as follows courtesy Cory LaViska
//	http://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2/
//	bug: does not work properly on repeated clicks (and neither in overflow elements)

		function displayRecent() {
			var selectItem1;
			selectItem1 = $(".item-box:eq(0)");

			selectItem1.click(function() {
				var basicSelect, selectDisplay1, scrollStart, targetDisplay1;
				basicSelect = $("#itemsDisplay");
				selectDisplay1 = basicSelect.children().filter(":eq(0)");
				scrollStart = $("html, body");
				targetDisplay1 = selectDisplay1.find("h1");

				selectDisplay1.attr("style", "display: block");

				scrollStart.animate({
					scrollTop: targetDisplay1.offset().top
				}, 1200);
			});
		}
		displayRecent();

//	currently in work below object.

		function closeRecent() {
			var selectWork, selectClose;
			selectWork = $("#work");
			selectClose = selectWork.find("span:contains('Close...')");

			selectClose.click(function() {
				var basicSelect, selectDisplay1;
				basicSelect = $("#itemsDisplay");
				selectDisplay1 = basicSelect.children().filter(":eq(0)");

				selectDisplay1.slideUp(1000);

				var mq550, scrollStart, targetTop, targetFeatured;
				mq550 = window.matchMedia("(min-width: 550px)");
				scrollStart = $("html, body");
				targetTop = $("#header");
				targetFeatured = $("#featured");

				if (mq550.matches) {
					scrollStart.animate({
						scrollTop: targetTop.offset().top
					}, 1500);
				} else {
					scrollStart.animate({
						scrollTop: targetFeatured.offset().top
					}, 1500);
				}
			});//closes click(function)
		}
		closeRecent();

		function displayMorework() {
			var selectWork, selectMore;
			selectWork = $("#work");
			selectMore = selectWork.find("span:contains('Read more...')");

			selectMore.click(function() {
				var selectWork, displayMore;
				selectWork = $("#work");
				displayMore = selectWork.find(".boxReadmore");

				displayMore.attr("style", "display: block");

				var basicSelect, selectDisplay1, targetWorkmore;
				basicSelect = $("#itemsDisplay");
				selectDisplay1 = basicSelect.children().filter(":eq(0)");
				targetWorkmore = selectDisplay1.find(".boxReadmore");
console.log(targetWorkmore);
				selectDisplay1.animate({
					scrollTop: targetWorkmore.position().top
				}, 1200);
			});//closes click(function)
//	bug: does not scroll to intended target/position (-> still in state of trials;
//	some left over in work below object). 
//
			function closeWorkfinal() {
			var selectWork, selectClose;
			selectWork = $("#work");
			selectClose = selectWork.find("span:contains('Close all...')");

				selectClose.click(function() {
					var basicSelect, selectDisplay1;
					basicSelect = $("#itemsDisplay");
					selectDisplay1 = basicSelect.children().filter(":eq(0)");

					selectDisplay1.slideUp(1000);

					var mq550, scrollStart, targetTop, targetFeatured;
					mq550 = window.matchMedia("(min-width: 550px)");
					scrollStart = $("html, body");
					targetTop = $("#header");
					targetFeatured = $("#featured");

					if (mq550.matches) {
						scrollStart.animate({
							scrollTop: targetTop.offset().top
						}, 1500);
					} else {
						scrollStart.animate({
							scrollTop: targetFeatured.offset().top
						}, 1500);
					}
				});//closes click(function)
			}
			closeWorkfinal();

			function closeMorework() {
				var selectWork, selectMore;
				selectWork = $("#work");
				selectMore = selectWork.find("span:contains('Read less...')");

				selectMore.click(function() {
					var basicSelect, selectDisplay1, selectCloseMore;
					basicSelect = $("#itemsDisplay");
					selectDisplay1 = basicSelect.children().filter(":eq(0)");
					selectCloseMore = selectDisplay1.find(".boxReadmore");

					selectCloseMore.slideUp(1000);
				});
			}
			closeMorework();
		}
		displayMorework();

	}//closes 'display: function' in object
}//closes object
work.display();

// JSONLint: object valid JSON (without function)
// JSHint for function: ok exept for external defined variables and issues commented upon

// Work on scrolling into/in overflow containers
// 1) into (for 'displayRecent')

/*	function myTest() {
		var selectItem1;
			selectItem1 = $(".item-box:eq(0)");

		selectItem1.click(function() {
			document.getElementById("displayItem1").style.display = "block";

			$("#displayItem1").scrollTop($("#displayItem1").scrollTop()+$("h1.titleBox").position().top);
		console.log($("h1.titleBox"));
		});
		}
		myTest();*/

// 2) within (for/in 'displayMore')

/*	function myTest2() {
		var basicSelect, selectDisplay1, selectMore;
		basicSelect = $("#itemsDisplay");
		selectDisplay1 = basicSelect.children().filter(":eq(0)");
		selectMore = selectDisplay1.find("#more");

		selectMore.click(function() {
			document.getElementById("ShowMore").style.display = "block";

			$("#displayItem1").scrollTop($("#displayItem1").scrollTop()+$(".readMoreless").position().top);
		console.log($(".readMoreless"));
		});
	}
	myTest2();*/


/*The education object (to 'id item1' ?):

Preface on presenting my education:
a) The structure and degrees in the German educational system
   are (were: this is changing) not directly comparable to the
   American system, i.e. I do not have completed majors, though
   I have a PhD. Thus I need to adjust the given set-up.
b) A PhD in Germany did not require attending a program, and
   there was no formal start date. In academics, a PhD is listed
   usually just with the year of it's accomplishment.
   In a longer life and career, exact dates become anyway
   less relevant. In a common resume formate, I give the year
   in which a formal degree was received; and I give month and
   year for more recent online courses.*/


var education = {
	"schools" : [
		{
			"name" : "J W Goethe University, Department of Social Sciences",
			"location" : "Frankfurt/Main, Germany",
			"dates" : "2008",
			"url" : "http://www.fb03.uni-frankfurt.de/39791667/international",
			"degree" : "PhD in Sociology",
			"major" : "(With a thesis on Methodology)"
		},
		{
			"name" : "J W Goethe University, Department of Social Sciences",
			"location" : "Frankfurt/Main, Germany",
			"dates" : "1996",
			"url" : "http://www.fb03.uni-frankfurt.de/39791667/international",
			"degree" : "Certificate of Equivalence in Political Science",
			"major" : "(of previous studies; see next)"
		},
		{
			"name" : "Ruhr University Bochum, Faculty of Social Sciences",
			"location" : "Bochum, Germany",
			"dates" : "1988",
			"url" : "http://www.sowi.rub.de/index.html.en",
			"degree" : "Diploma in Social Sciences",
			"major" : "(Roughly equivalent to a major in sociology)"
		},
		{
			"name" : "Märkisches Gymnasium",
			"location" : "Schwelm, Germany",
			"dates" : "1976",
			"url" : "http://www.mgs-schwelm.de/",
			"degree" : "University-Entrance Diploma",
			"major" : "(on a 'stem path' avant le lettre)"
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
			"dates" : "2/2016-3/2016",
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
	],
	"display" : function() {
		var basicSelect, selectDisplay2, selectEdu;
		basicSelect = $("#itemsDisplay");
		basicSelect.append(HTMLfeaturedDisplay);
		selectDisplay2 = basicSelect.children().filter(":eq(1)");
		selectDisplay2.append(HTMLdisplayEdu);
		selectEdu = $("#edu");

		for (var degree in education.schools) {
			var myEdu, lastEdu;
			myEdu = selectEdu.append(HTMLentryStart);
			lastEdu = myEdu.children(".item-entry:last");

			var formSchoolname, formDegree, formMajor, formLocation, formDates, formEduurl;
			formSchoolname = HTMLschoolName.replace("%data%", education.schools[degree].name);
			formDegree = HTMLschoolDegree.replace("%data%", education.schools[degree].degree);
			formMajor = HTMLschoolMajor.replace("%data%", education.schools[degree].major);
			formLocation = HTMLschoolLocation.replace("%data%", education.schools[degree].location);
			formDates = HTMLschoolDates.replace("%data%", education.schools[degree].dates);
			formEduurl = HTMLeduUrl.replace("%data%", education.schools[degree].url);

			lastEdu.append(formSchoolname);
			lastEdu.append(formDegree);
			lastEdu.append(formMajor);
			lastEdu.append(HTMLformalInfo).append(formLocation + " " + formDates);
			lastEdu.append(formEduurl);
		}// 'for in' not wrapped in 'if' because wrapped in object

		selectEdu.append(HTMLdivMoreless);

		var selectMoreless;
		selectMoreless = selectEdu.find(".readMoreless");
		selectMoreless.append(HTMLclosePage + " " + HTMLreadMore);
		selectEdu.append(HTMLdisplayMore);

		var selectOnlineedu, onlineHeader;
		selectOnlineedu = selectEdu.find(".boxReadmore");
		onlineHeader = selectOnlineedu.append(HTMLonlineHeader);

		for (var taken in education.onlineCourses) {
			var myOnline, lastOnline;
			myOnline = selectOnlineedu.append(HTMLentryStart);
			lastOnline = myOnline.children(".item-entry:last");

			var formOnlinetitle, formOnlineschool, formOnlinedates, formOnlineurl;
			formOnlinetitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[taken].title);
			formOnlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[taken].school);
			formOnlinedates = HTMLonlineDates.replace("%data%", education.onlineCourses[taken].dates);
			formOnlineurl = HTMLonlineUrl.replace("%data%", education.onlineCourses[taken].url);

			lastOnline.append(formOnlinetitle);
			lastOnline.append(formOnlineschool);
			lastOnline.append(formOnlinedates);
			lastOnline.append(formOnlineurl);
		}// 'for in' not wrapped in 'if' because wrapped in object

		selectOnlineedu.append(HTMLdivClosemore);

		var selectClosefinal;
		selectClosefinal = selectOnlineedu.find(".closeReadmore");
		selectClosefinal.append(HTMLclosePages + " " + HTMLreadLess);

//	scrolling effect as follows courtesy Cory LaViska
//	http://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2/
//	bug: does not work properly on repeated clicks (and neither in overflow elements)

		function displayFormaledu() {
			var selectItem2;
			selectItem2 = $(".item-box:eq(1)");

			selectItem2.click(function() {
				var basicSelect, selectDisplay2, scrollStart, targetDisplay2;
				basicSelect = $("#itemsDisplay");
				selectDisplay2 = basicSelect.children().filter(":eq(1)");
				scrollStart = $("html, body");
				targetDisplay2 = selectDisplay2.find("h1");

				selectDisplay2.attr("style", "display: block");

				scrollStart.animate({
					scrollTop: targetDisplay2.offset().top
				}, 1200);
			});

		}
		displayFormaledu();

		function closeFormaledu() {
			var selectEdu, selectClose;
			selectEdu = $("#edu");
			selectClose = selectEdu.find("span:contains('Close...')");

			selectClose.click(function() {
				var basicSelect, selectDisplay2;
				basicSelect = $("#itemsDisplay");
				selectDisplay2 = basicSelect.children().filter(":eq(1)");

				selectDisplay2.slideUp(1000);

				var mq550, scrollStart, targetTop, targetFeatured;
				mq550 = window.matchMedia("(min-width: 550px)");
				scrollStart = $("html, body");
				targetTop = $("#header");
				targetFeatured = $("#featured");

				if (mq550.matches) {
					scrollStart.animate({
						scrollTop: targetTop.offset().top
					}, 1500);
				} else {
					scrollStart.animate({
						scrollTop: targetFeatured.offset().top
					}, 1500);
				}
			});//closes click(function)
		}
		closeFormaledu();

		function displayMoreedu() {
			var selectEdu, selectMore;
			selectEdu = $("#edu");
			selectMore = selectEdu.find("span:contains('Read more...')");

			selectMore.click(function() {
				var selectEdu, displayMore;
				selectEdu = $("#edu");
				displayMore = selectEdu.find(".boxReadmore");

				displayMore.attr("style", "display: block");

				var basicSelect, selectDisplay2, targetEdumore;
				basicSelect = $("#itemsDisplay");
				selectDisplay2 = basicSelect.children().filter(":eq(1)");
				targetEdumore = basicSelect.find(".item-entry:eq(0)");

				selectDisplay2.animate({
					scrollTop: targetEdumore.position().top
				}, 1200);
	
			});//closes click(function)
//	bug: does not scroll to intended target/position...
//	(this was 'approximate compromise' before--I'm not sure what I thought;
//	started new trials in work section...: the whole concept of what is
//	'scrollStart' and what 'target' seems very unclear!!!);

			function closeEdufinal() {
			var selectEdu, selectClose;
			selectEdu = $("#edu");
			selectClose = selectEdu.find("span:contains('Close all...')");

				selectClose.click(function() {
					var basicSelect, selectDisplay2;
					basicSelect = $("#itemsDisplay");
					selectDisplay2 = basicSelect.children().filter(":eq(1)");

					selectDisplay2.slideUp(1000);

					var mq550, scrollStart, targetTop, targetFeatured;
					mq550 = window.matchMedia("(min-width: 550px)");
					scrollStart = $("html, body");
					targetTop = $("#header");
					targetFeatured = $("#featured");

					if (mq550.matches) {
						scrollStart.animate({
							scrollTop: targetTop.offset().top
						}, 1500);
					} else {
						scrollStart.animate({
							scrollTop: targetFeatured.offset().top
						}, 1500);
					}
				});//closes click(function)
			}
			closeEdufinal();

			function closeMoreedu() {
				var selectEdu, selectMore;
				selectEdu = $("#edu");
				selectMore = selectEdu.find("span:contains('Read less...')");

				selectMore.click(function() {
					var basicSelect, selectDisplay2, selectCloseMore;
					basicSelect = $("#itemsDisplay");
					selectDisplay2 = basicSelect.children().filter(":eq(1)");
					selectCloseMore = selectDisplay2.find(".boxReadmore");

					selectCloseMore.slideUp(1000);
				});
			}
			closeMoreedu();
		}
		displayMoreedu();
	}//closes 'display: function' in object
}//closes object
education.display();

//	JSONLint: valid JSON (without function)
//	JSHint for function: ok exept for external defined variables and issues commented upon


/*	The projects object (extension of 'featured items 3' ?)

One remark ahead:
I cannot, for the hell of me, relate to (more or less precise)
start and end "dates" for a project. There might be some concept
in the background which I do not get yet. But as I use 'placeholder'
anyway for the time being, I settle on a 'release date' (without
hyphen--but I trust to show than I could add a hyphen if necessary).*/

var projects = {
	"locum" : [
		{
			"title" : "'Vom Text zum Wissen'",
			"released" : "Konstanz, Germany, 2008",
			"description" : "Phd Thesis ('From Text To Knowledge') on Theories and Problems Of Qualitative Social Research",
			"projectImage" : ["images/2009_Diss-fromAmazon4x3_300w.JPG"]
		},
		{
			"title" : "Performance is...? Short Cuts on Voice and Other Metaphors",
			"released" : "Urbana-Champaign (IL), 2010",
			"description" : "1st publication in the U.S.A.",
			"projectImage" : ["images/2010_IRQR-PerformanceIs4x3_300w.JPG"]
		}
	],
	"display" : function() {
		var basicSelect, selectDisplay3, selectProjects;
		basicSelect = $("#itemsDisplay");
		basicSelect.append(HTMLfeaturedDisplay);
		selectDisplay3 = basicSelect.children().filter(":eq(2)");
		selectDisplay3.append(HTMLdisplayProjects);
		selectProjects = $("#projects");

		if (projects.locum.length >= 1) {
			for (var project in projects.locum) {
				var myProject, lastProject;
				myProject = selectProjects.append(HTMLentryStartflex);
				lastProject = myProject.children(".item-entry:last");

				var formProjecttitle, formProjectdates, formProjectdescription, formProjectimage;
				formProjecttitle = HTMLprojectTitle.replace("%data%", projects.locum[project].title);
				formProjectdates = HTMLprojectDates.replace("%data%", projects.locum[project].released);
				formProjectdescription = HTMLprojectDescription.replace("%data%", projects.locum[project].description);
				formProjectimage = HTMLprojectImage.replace("%data%", projects.locum[project].projectImage);

				lastProject.append(HTMLflexItem1of2);
				lastProject.append(HTMLflexItem2of2);
				lastProject.children(".itemdisplay-pic").append(formProjectimage);
				lastProject.children(".itemdisplay-text").append(formProjecttitle);
				lastProject.children(".itemdisplay-text").append(HTMLformalInfo).append(formProjectdates);
				lastProject.children(".itemdisplay-text").append(formProjectdescription);
			}
		}

		selectProjects.append(HTMLdivMoreless);

		var selectMoreless;
		selectMoreless = selectProjects.find(".readMoreless");
		selectMoreless.append(HTMLclosePage);
		
//	scrolling effect as follows courtesy Cory LaViska
//	http://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2/
//	bug: does not work properly on repeated clicks (and neither in overflow elements)

		function displayFormalprojects() {
			var selectItem3;
			selectItem3 = $(".item-box:eq(2)");

			selectItem3.click(function() {
				var basicSelect, selectDisplay3, scrollStart, targetDisplay3;
				basicSelect = $("#itemsDisplay");
				selectDisplay3 = basicSelect.children().filter(":eq(2)");
				scrollStart = $("html, body");
				targetDisplay3= selectDisplay3.find("h1");

				selectDisplay3.attr("style", "display: block");

				scrollStart.animate({
					scrollTop: targetDisplay3.offset().top
				}, 1200);
			}); // closes click function

		}
		displayFormalprojects();

		function closeFormalprojects() {
			var selectProjects, selectClose;
			selectProjects = $("#projects");
			selectClose = selectProjects.find("span:contains('Close...')");

			selectClose.click(function() {
				var basicSelect, selectDisplay3;
				basicSelect = $("#itemsDisplay");
				selectDisplay3 = basicSelect.children().filter(":eq(2)");

				selectDisplay3.slideUp(1000);

				var mq550, scrollStart, targetTop, targetFeatured;
				mq550 = window.matchMedia("(min-width: 550px)");
				scrollStart = $("html, body");
				targetTop = $("#header");
				targetFeatured = $("#featured");

				if (mq550.matches) {
					scrollStart.animate({
						scrollTop: targetTop.offset().top
					}, 1500);
				} else {
					scrollStart.animate({
						scrollTop: targetFeatured.offset().top
					}, 1500);
				}
			});//closes click(function)
		}
		closeFormalprojects();
	}//closes 'display: function' in object
}//closes object
projects.display();

//	JSONLint: valid JSON (without function)
/*	JSHint for function: ok exept for external defined variables and not identifying
	that 'for in' is wrapped in 'if' statement*/


/*	"console.log information about click locations":
	I had to rearrange the "code shell" provided in helper.js a bit to get it working here
*/

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function logClicks(x,y) {
	var clickLocations = [];
	clickLocations.push(
		{
			x: x,
			y: y
		}
	);
	console.log('x location: ' + x + '; y location: ' + y);
}
//	JSHint: two functions; no comment besides metrics


//	Last fun part: Google maps:

/*	Faced by the challenge that different German locations do not display
	well on a more global scale, invoced by my more recent US location, I try
	to reuse the previous 'read more' set-up to display a 2nd, more deteiled
	map.
	As far as I see by now, the standard implementation of Google maps API
	defines the map as a global variable which does not work for more than
	one map displaying at the same time. I try to solve this by determining
	which map is initialized at which user action.
*/

function displayMaps() {
	var basicSelect, selectDisplay4, selectMaps, selectMoreless, adaptReadmore;

	basicSelect = $("#itemsDisplay");
	basicSelect.append(HTMLfeaturedDisplay);

	selectDisplay4 = basicSelect.children().filter(":eq(3)");
	selectDisplay4.append(HTMLdisplayMaps);

	selectMaps = $("#googleMaps");
	selectMaps.append(HTMLgoogleMap1, HTMLdivMoreless);

	selectMoreless = selectMaps.find(".readMoreless");
	selectMoreless.append(HTMLclosePage + " " + HTMLlinkmap2);
	selectMaps.append(HTMLfeaturedDisplay);

	function displayMap1() {
		var selectItem4;
		selectItem4 = $(".item-box:eq(3)");

		selectItem4.click(function() {
			var basicSelect, selectDisplay4, scrollStart, targetDisplay4;
			basicSelect = $("#itemsDisplay");
			selectDisplay4 = basicSelect.children().filter(":eq(3)");
			scrollStart = $("html, body");
			targetDisplay4 = selectDisplay4.find("h1");

			selectDisplay4.attr("style", "display: block");

			scrollStart.animate({
				scrollTop: targetDisplay4.offset().top
			}, 1200);
		}); // closes click function
	}
	displayMap1();

	function closeMap1() {
		var selectMapbox, selectClose;
		selectMapbox = $("#googleMaps");
		selectClose = selectMapbox.find("span:contains('Close...')");

		selectClose.click(function() {
			var basicSelect, selectDisplay4;
			basicSelect = $("#itemsDisplay");
			selectDisplay4 = basicSelect.children().filter(":eq(3)");

			selectDisplay4.slideUp(1000);

			var mq550, scrollStart, targetTop, targetFeatured;
			mq550 = window.matchMedia("(min-width: 550px)");
			scrollStart = $("html, body");
			targetTop = $("#header");
			targetFeatured = $("#featured");

			if (mq550.matches) {
				scrollStart.animate({
					scrollTop: targetTop.offset().top
				}, 1500);
			} else {
				scrollStart.animate({
					scrollTop: targetFeatured.offset().top
				}, 1500);
			}
		});//closes click(function)
	}
	closeMap1();

	function makeMap1() {

		// declaring a local map variable:
		var map;

		//	InitializeMap() is called 'on click' (see below):

		function initializeMap() {

			var mapOptions = {
				disableDefaultUI: true
			};

			map = new google.maps.Map(document.querySelector("#map1"), mapOptions);

			// Returning array of locations from bio, work, and education JSON objects
			function locationFinder() {
    
				var locations = [];// declares empty array

				locations.push(bio.contacts.location);// adds single location from bio to array:

				for (i = 5; i < work.jobs.length; i++) {
					locations.push(work.jobs[i].location);
				}// selects + adds locations in work object to array

				for (i = 3; i < education.schools.length; i++) {
					locations.push(education.schools[i].location);
				}// same for edu object

				return locations;
			}
			locations = locationFinder();
//	console.log(locations); confirms array of locations from objects

			// function for running Google Places search to create map pins with results
			// (in object/s 'placeData'):
			function createMapMarker(placeData) {

				// Saves location data from search result object to local variables:
				var lat = placeData.geometry.location.lat();  // latitude from place service (see below)
				var lon = placeData.geometry.location.lng();  // longitude from place service
				var name = placeData.formatted_address;   // name of the place from place service
				var bounds = window.mapBounds;            // current boundaries of the map window

				// marker is an object with additional (kind of?) data about the pin for a single location
				var marker = new google.maps.Marker({
					map: map,
					position: placeData.geometry.location,
					title: name
				});

				// infoWindows equivalent of what opens on hoover or click alert:
				var infoWindow = new google.maps.InfoWindow({
					content: name //They usually contain more information about a location: can I add more ?
				});

				// Opens infoWindow on click:
				google.maps.event.addListener(marker, 'click', function() {
					infoWindow.open(map, marker);
				});

				// this is where the pin actually gets added to the map.
				// bounds.extend() takes in a map location object
				bounds.extend(new google.maps.LatLng(lat, lon));
				// fit the map to the new marker
				map.fitBounds(bounds);
				// center the map
				map.setCenter(bounds.getCenter());
			}// closes createMapMarker(placeData)


			// callback(results, status) makes sure the search returned results for a location.
			// If so, it creates a new map marker for that location [i.e. 'calls' createMapMarker()].

			function callback(results, status) {
				if (status == google.maps.places.PlacesServiceStatus.OK) {
					createMapMarker(results[0]);
				}
			}

			/*
			pinPoster(locations) takes in the array of locations created by locationFinder()
			and fires off Google place searches for each location
			*/
			function pinPoster(locations) {

				// creates a Google place search service object. PlacesService does the work of
				// actually searching for location data.
				var service = new google.maps.places.PlacesService(map);

				// Iterates through the array of locations, creates a search object for each location
				for (var place in locations) {

					// the search request object
					var request = {
					query: locations[place]
					};

					// Actually searches the Google Maps API for location data and runs the callback
					// function with the search results after each search.
					service.textSearch(request, callback);
				}
			}
			pinPoster(locations);

			// Sets the boundaries of the map based on pin locations
			window.mapBounds = new google.maps.LatLngBounds();

		}//	closes initializeMap() function

		// Calls the initializeMap() function 'on click'
		// 'on load' did not work, I suppose because display is set to 'none' at page load.
		document.getElementById("item4").addEventListener("click", initializeMap);

		// Vanilla JS way to listen for resizing of the window
		// and adjust map bounds + Make sure the map bounds
		// get updated on page resize
		window.addEventListener('resize', function(e) {
			map.fitBounds(mapBounds);
		});
	}
	makeMap1();

	function makeMap2() {

		// declaring a local map variable:
		var map;

		//	InitializeMap() is called 'on click' (see below):
		function initializeMap() {

			var mapOptions = {
				disableDefaultUI: true
			};
/*	'zoom' does not work in current setting but seems to be code for map size display
	(see: http://www.w3schools.com/googleapi/google_maps_basic.asp */
			map = new google.maps.Map(document.querySelector("#map1"), mapOptions);

			// Returning array of locations from bio, work, and education JSON objects
			function locationFinder() {
    
				var locations = [];// declares empty array

				for (i = 5; i < work.jobs.length; i++) {
					locations.push(work.jobs[i].location);
				}// collects + adds locations in work object to array

				for (i = 3; i < education.schools.length; i++) {
					locations.push(education.schools[i].location);
				}// same for edu object

				return locations;
			}
			locations = locationFinder();
//	console.log(locations); confirms array of locations from objects

			// function for running Google Places search to create map pins with results
			// (in object/s 'placeData'):
			function createMapMarker(placeData) {

				// Saves location data from search result object to local variables:
				var lat = placeData.geometry.location.lat();  // latitude from place service (see below)
				var lon = placeData.geometry.location.lng();  // longitude from place service
				var name = placeData.formatted_address;   // name of the place from place service
				var bounds = window.mapBounds;            // current boundaries of the map window

				// marker is an object with additional (kind of?) data about the pin for a single location
				var marker = new google.maps.Marker({
					map: map,
					position: placeData.geometry.location,
					title: name
				});

				// infoWindows equivalent of what opens on hoover or click alert:
				var infoWindow = new google.maps.InfoWindow({
					content: name //They usually contain more information about a location: can I add more ?
				});

				// Opens infoWindow on click:
				google.maps.event.addListener(marker, 'click', function() {
					infoWindow.open(map, marker);
				});

				// this is where the pin actually gets added to the map.
				// bounds.extend() takes in a map location object
				bounds.extend(new google.maps.LatLng(lat, lon));
				// fit the map to the new marker
				map.fitBounds(bounds);
				// center the map
				map.setCenter(bounds.getCenter());
			}// closes createMapMarker(placeData)


			// callback(results, status) makes sure the search returned results for a location.
			// If so, it creates a new map marker for that location [i.e. 'calls' createMapMarker()].

			function callback(results, status) {
				if (status == google.maps.places.PlacesServiceStatus.OK) {
					createMapMarker(results[0]);
				}
			}

			/*
			pinPoster(locations) takes in the array of locations created by locationFinder()
			and fires off Google place searches for each location
			*/
			function pinPoster(locations) {

				// creates a Google place search service object. PlacesService does the work of
				// actually searching for location data.
				var service = new google.maps.places.PlacesService(map);

				// Iterates through the array of locations, creates a search object for each location
				for (var place in locations) {

					// the search request object
					var request = {
					query: locations[place]
					};

					// Actually searches the Google Maps API for location data and runs the callback
					// function with the search results after each search.
					service.textSearch(request, callback);
				}
			}
			pinPoster(locations);

			// Sets the boundaries of the map based on pin locations
			window.mapBounds = new google.maps.LatLngBounds();

		}//	closes initializeMap() function

		// Calls the initializeMap() function 'on click'
		// 'on load' did not work, I suppose because display is set to 'none' at page load.
		document.getElementById("showMap2").addEventListener("click", initializeMap);

		// Vanilla JS way to listen for resizing of the window
		// and adjust map bounds + Make sure the map bounds
		// get updated on page resize
		window.addEventListener('resize', function(e) {
			map.fitBounds(mapBounds);
		});
	}
	makeMap2();

/*	function displayMap2() {

		var selectMaps, selectMore;
		selectMaps = $("#googleMaps");
		selectMore = selectMaps.find("#showMap2");

		selectMore.click(function() {
			var basicSelect, selectDisplay4, targetDisplay4;
			basicSelect = $("#itemsDisplay");
			selectDisplay4 = basicSelect.children().filter(":eq(3)");
			targetDisplay4 = selectDisplay4.find("h1");

			selectDisplay4.attr("style", "display: none");
*/
/*			var selectMaps, displayMore;
			selectMaps = $("#googleMaps");
			displayMore = selectMaps.find(".displayCanvas");

			displayMore.attr("style", "display: block");

			var basicSelect, selectDisplay4, targetmoreMap;
			basicSelect = $("#itemsDisplay");
			selectDisplay4 = basicSelect.children().filter(":eq(3)");
			targetmoreMap = selectDisplay4.find("h2");

			selectDisplay4.animate({
				scrollTop: targetmoreMap.position().top
			}, 1200);
	
		});//closes click(function)


	}
	displayMap2();

*/

}
displayMaps();


