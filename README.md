# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.
- **Bonus**: Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.

### Screenshot

![](./Screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

This project was designed with the goal of optimising and reinforcing my knowledge on responsive design as well as gaining a deeper understanding of DOM manipulation using Vanilla Javascript. The project was designed with the mobile design in view first and whilst this lead to the layout of the design being less of a hassle, it did create problems down the line by not thinking through appropriate class names and id's needed to select specific elements during the functionality of the project, leading to going back to the HTML later and making appropriate changes. Taking a more holistic approach to both the mobile and the desktop layout in the future is definitely something I'll look at to make the functionality easier and create more consistency between the class naming approach.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla Javascript


### What I learned

Whilst a bit weighty and messy, making this project really helped me gain a better understanding of creating new elements through the DOM and inserting them into the HTML. It was a challenge
trying to the same functionality to both the desktop version and mobile version of the same button as they were created as separate elements but I felt as if the forEach method of looping through elements was extremely helpful in this regard.

The styling and HTML of the comments was far larger than I originally anticipated due to the layout changes related to both the desktop and mobile layout. Perhaps with smarter styling and markup, these elements wouldn't had to be repeated for the different layouts but the functionality ended up working in the end.

I also learned and gained a greater understanding on (if) chains and boolean values. It was a real challenge trying to implement the upvote/downvote system whilst also juggling reflecting changes made via the desktop layout to correspond to the mobile layout as they were separate elements. Whilst my solution feels quite long and verbose, I'm very pleased that it works and that I achieved the result by myself.

### Continued development

This challenge has really pushed me to continue my Javascript learning. From here, I really would like to focus on understanding how to work with JSON and knowing how to dynamically create/add content based off of JSON data.  It was a step too far for me on this project but is something I will be looking at for the next project. Learning about local storage and how to store values is also something I am very interested in. Re-visiting this project in the future is definitely something I will consider to learn more about local storage.


### Useful resources

- No specific examples unfortunately, just StackOverflow posts about creating IF statement chains really helped me piece together the upvote/downvote system piece by piece.


## Author

- Frontend Mentor - [@Kieran27](https://www.frontendmentor.io/profile/yourusername)
