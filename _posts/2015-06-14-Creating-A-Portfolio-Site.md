---
published: true
layout: default_blog
title: Creating a Portfolio Site
---
{{page.title}}
==============

This week I have finally been able to dedicate some time to creating a portfolio site! I taught myself HTML, CSS and Javascript on my placement year while developing [Missile Mania](http://luckielordie.github.io/portfolio.html) and converting some old HTML apps to work on the Gear 2 smart watch.

Bootstrap was extremely helpful when trying to ensure that the site would still look good on mobile devices. Classes for responsive images and the navbar shrinking when the device window is too small to show a full navbar really help give the site a polished finish.

Github provides a really easy way to host a web page with Git-Pages (which is why this site is .github.io). Another thing that they also provide is an application called [Jekyll](http://jekyllrb.com/). Jekyll is a static site generator written in Ruby that can take templates and markdown and convert those files into HTML. This post is actually written in a Markdown format and given a layout defined in the header of the file. Jekyll then used the HTML template I wrote and created a static HTML page that you see right now!

In order to implement the projects page I created a JSON file that contains an array of portfolio projects and contains all the information needed to fill the short description on the portfolio page and the full project page that you get taken to when the *View Project*  button is pressed. When the button is pressed the project JSON is saved out to a cookie that can then be loaded on the following page and the project html can be populated. JQuery was really helpful(when is it not?) in providing me with the functions necessary to populate the HTML tags I created the page with.

Overall I am very happy with what I was able to generate with my limited experience with the technologies. Future work involves moving the site over to my own personal server once I have had a chance to use my Digital Ocean voucher (thanks Github student pack!). A more professional domain is also on the cards since the current url (luckielordie.github.io) uses my ten year old username. A final modifcation for now would be to use Javascript to create some interesting transitions between pages on the site by tweening the content wells on and off the page.

This is definitely a project that I will be coming back to tweak again and again . . .
