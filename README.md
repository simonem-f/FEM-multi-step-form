# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Links

- Frontend Mentor solution [here](https://your-solution-url.com)
- Live Site solution [here](https://your-live-site-url.com)

## My process

A very basic Angular project setup: no routing, no services (no REST API however) and other cool stuff, because I only wanted to experiment with Angular reactive forms.

I also didn't add any other component beyond app component, a thing instead I definetly should have done (very long template... 😅), but typescript logic was very easy with form builder and ui kit libraries, so I decideded to keep the things simple, in one place.

I started with page layout (sidebar + content) and made it response (mobile first and then desktop) with carousel skeleton and forms content.
After that I focused on the dynamic behaviour (typescript): steps navigation and forms validation / summary.
In the end I styled fine details.

### Built with

- HTML5
- SCSS
- Typescript
- Mobile-first workflow
- [Angular](https://angular.io/) - Web Dev Framework
- [NG Bootstrap](https://ng-bootstrap.github.io/) - Bootsrap for Angular (carousel without a common slide template)
- [Prime NG](https://primeng.org/setup) - Ready to use UI components for simple use cases (forms & inputs)

### What I learned

Basically I wanted to experiment with Angular reactive forms, which I never tried before, so to me this was the goal of this challenge. A very very handy, practical and powerful way to design forms.

### Useful resources

- [Kevin Powell](https://www.youtube.com/@KevinPowell) - A true CSS master, you can find modern CSS techniques and cool tips on responsive layouts and accessibilty
- [Angular Doc](https://angular.io/docs) - Obviously Angular documentation, very handy. Always read the instructions 😉


## Author

- Linkedin - [Simone Marco Fumagalli](https://www.linkedin.com/in/simone-marco-fumagalli/)
- Frontend Mentor - [@simonem-f](https://www.frontendmentor.io/profile/simonem-f)

