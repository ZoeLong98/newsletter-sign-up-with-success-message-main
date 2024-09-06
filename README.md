# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](assets/images/Screenshot%202024-09-04%20at%204.16.51 PM.png)
![](assets/images/Screenshot%202024-09-04%20at%204.17.30 PM.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://zoelong98.github.io/newsletter-sign-up-with-success-message-main/)

## My process

### Built with

- Basic CSS and JS

### What I learned

Use "localStorage" to pass element through different HTML

```css
@media (max-width: 548px) {
}
```

```js
localStorage.setItem("email", email.value);
var email = localStorage.getItem("email");
```

### Continued development

more complex JS

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/ZoeLong98)
