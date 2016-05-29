P5 Online Resume. A Udacity FEND project

By current counting, this is my Udacity FEND project #5 (by previous and
personal count, it is my 3rd FEND project): It is applying 1st lessons in
js and jQuery -- as intended, with the support of prepared html, css, and
js files (see project instructions below).

I decided to push the envelope of this relatively narrow framework because,
having started pretty much from scratch, I needed more experience with using
js and, as it turned out, mostly jQuery in order to feel more comfortable 
with going forward into next projects.

To do so somewhat efficiently, I've build upon my previous "Build a Portfolio"
project (currently FEND project #4) -- with the flip side that the structures
in my html, css, and js files clearly show the marks of a step-by-step work
in progress (as compared to a thoroughly planned structure, as would be done
with more experience).

I changed little in the structure of the html and css which I 'imported' from
my 'Build a Portfolio' project, but I tried to apply lessons in 'swapping'
(i.e. currently: mostly adding) content with js and jQuery. Here is the basic
set-up for developing my 'Build a Portfolio' Project into my Online Resume
8project):

1) I kept my header (by desing: including the next 'big pic' section) as I
   regard these parts as a kind of 'brand presentation' which one would not
   want to swap. In the same time, I used the 'bio.object' and its 'display
   function' to add/swap information specifically called for in the current
   project.

2) I used the image/project 'tiles' as introduced in the previous 'Build a
   Portfolio' project to realize a 'display more detail on click' structure:
   Four main 'tiles' -- for work, education, projects, and 'where I lived and
   worked' -- display the associated content interactive (partly with supplying
   further information on a 2nd click).

My big feat is that I got my basic idea of an interactive 'display details on
click' structure working. But I also run into two issus which did not get
working satisfactorily:

- I could not yet solve a systematic bug (even with asking in the discussion
  forum): The automated scrolling 'into or within' an overflow element does
  not work yet as intended on repeated clicks.
  The overflow div tends to appear 'scrolled down' resp. 'as left after closing
  a 1st display' instead of reliably targeting the selected element.
  I am pretty sure that I still miss something very essential, either about
  overflow elements or about (overriding) default browsers behavior and I would
  welcome very much any advice in this respect as in any other!!

- The application of Google maps presented, of course, an intended challenge. My
  first more personal challenge came with a life course which called for a 2nd,
  more detailed map. As far as I gather by now, this is not an easy feat within
  the current Google Map Api. Thus I settled, for now, on the very reduced and
  rather clumsy solution to replay a first with a second map.

Last remarks:

I ignored console warnings for the time being which did not seem to affect the
performance at all: (1) the Google Maps Api warning of 'NoApiKeys' and (2) the
message "Uncaught TypeError: Cannot read property 'fitBounds' of undefined"
(which, additionally, seemed to regularly disappear upon repeated load).

I did not attempt at filling the maps's 'infoWindows' with additional information
as I had spent already a lot of time on introducing the interactive structure.

All images are in the image folder, but I draw most of them from preliminary
online storage on Codepen.io.

I should add, finally, that I tried to follow all explicit project instructions 
as closely as I could: the prescribed objects contain their 'display function'
and all other (array or object) elements. 
But the project instructions do NOT demand that all of these object elements
should be actually USED. Thus I do not use ('swap' resp. add) every element
in my 'bio object'. According to my guiding concept (see above), name and image
can be seen as part of a 'brand presentation' which one would not (want to) set
up for swapping.



Original Project Instructions (resp. 'README' as provided by Udacity):

## How do I complete this project?

1. Go to the [Javascript Basics course](https://www.udacity.com/course/ud804) and select "View Course Materials."
2. Go through the videos and assignments in this course to learn the JavaScript necessary to build your resume.
3. Review your work against the Project Rubric (on the next page).
4. When you are satisfied with your project, submit it according to the Submission Instructions on the next page.

### By the end:
Your resume will look something like this
![](http://i.imgur.com/pWU1Xbl.png)

And your repository will include the following files:

* **index.html**: The main HTML document. Contains links to all of the CSS and JS resources needed to render the resume, including resumeBuilder.js.
* **js/helper.js**: Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality. More on helper.js further down.
* **js/resumeBuilder.js**: This file is empty. You should write your code here.
* **js/jQuery.js**: The jQuery library.
* **css/style.css**: Contains all of the CSS needed to style the page.
* **README.md**: 
The GitHub readme file.
* and some images in the images directory.

## Your starting point...
### js/helper.js
Within helper.js, you’ll find a large collection of strings containing snippets of HTML. Within many snippets, you’ll find placeholder data in the form of `%data%` or `%contact%`.

Each string has a title that describes how it should be used. For instance, `HTMLworkStart` should be the first `<div>` in the Work section of the resume. `HTMLschoolLocation` contains a `%data%` placeholder which should be replaced with the location of one of your schools.

### Your process:
The resume has four distinct sections: work, education, projects and a header with biographical information. You’ll need to:

1. Build four JSON objects, each one representing a different resume section. The objects that you create need to follow the schema below exactly. Property names are case-sensitive. Make sure your JSON objects are formatted correctly using <a href="http://jsonlint.com/" target="_blank">JSONlint.com</a>.

* `bio` contains:
        
            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string 
                  github: string
                  twitter: string 
                  location: string
            welcomeMessage: string 
            skills: array of strings
            biopic: url
            display: function taking no parameters

* `education` contains:
      
            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: integer (graduation date)
                 url: string
            onlineCourses: array with
                 title: string
                 school: string
                 date: integer (date finished)
                 url: string
            display: function taking no parameters

* `work` contains
          
            jobs: array of objects with
                 employer: string 
                 title: string 
                 location: string 
                 dates: string (works with a hyphen between them)
                 description: string 
            display: function taking no parameters

* `projects` contains:

            projects: array of objects with
                  title: string 
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters

2. Iterate through each JSON object and append its information to index.html in the correct section.
 * First off, you’ll be using jQuery’s `selector.append()` and `selector.prepend()` functions to modify index.html. `selector.append()` makes an element appear at the end of a selected section. `selector.prepend()` makes an element appear at the beginning of a selected section.
   * Pay close attention to the ids of the `<div>`s in index.html and the HTML snippets in helper.js. They’ll be very useful as jQuery selectors for `selector.append()` and `selector.prepend()`
* You’ll also be using the JavaScript method `string.replace(old, new)` to swap out all the placeholder text (e.g. `%data%`) for data from your resume JSON objects.
* Here’s an example of some code that would add the location of one your companies to the page:
   * `var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);`
   * `$(".work-entry:last").append(formattedLocation);`
 * Use the mockup at the page of this document as a guide for the order in which you should append elements to the page.
3. The resume includes an interactive map. Do the following to add it. 
 * In resumeBuilder.js, append the googleMap string to `<div id=”mapDiv”>`.
 * In index.html, uncomment the Google script element: `<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places"></script>`
 * In helper.js, at the bottom of the file, uncomment code to initialize map and set fitBounds.
4. All of your code for adding elements to the resume should be within functions. And all of your functions should be encapsulated within the same objects containing your resume data. For instance, your functions for appending work experience elements to the page should be found within the same object containing data about your work experience.
5. Your resume should also `console.log()` information about click locations. On line 90 in helper.js, you’ll find a jQuery onclick handler that you’ll need to modify to work with the `logClicks(x,y)` function above it.
6. It’s possible to make additional information show up when you click on the pins in the map. Check out line 174 in helper.js and the Google Maps API to get started.
