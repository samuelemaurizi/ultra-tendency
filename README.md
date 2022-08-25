#### Tasks:

#1 - implement the look and feel for the screens

#2 - try to separate the UIs into different components when possible

#3 - compile the views into a single page application

#4 - implement routing in the application to show the different views

## Introduction

The App has been divided into three views: Register, Trending and Explore. The views have components in common, the Footer that is present in all the views and the Navbar that is present in Trending and Explore. Other elements that are repeated within the app or that could be reused are the Avatar, Comment, Social login, Card, User Profile and Logo component.

On the first page there are three ways of accessing the app, with Facebook or Google account or the form to create a new one. In this phase I used the localStorage to check if the user has already logged in or not, if the response is positive, the user is redirected to the second page, otherwise the localStorage is updated as soon as the user logs in with the access methods mentioned above.
By checking the login status it is possible to conditionally display the Navbar component.

In the second view, the central part of the content was arranged using the Grid layout. In the mobile view two elements are swapped as to create a more balanced layout.
The data displayed in the comments section, as well as those of the logged in user, come from two contexts, simulating a call to the database.

In the Explore view, the use of the Grid layout is used to organize the individual cards in three possible scenario view modes, such as mobile, tablet and laptop / desktop.
Also here, the number of avatars and other data shown in the individual cards are passed by a context provider.

#### [Here](https://angry-hoover-c3537b.netlify.app) you can find a demo deployed on Netlify

## Techs

- React
- React Router Dom
- React Hooks
- Context Api
- Javascript (es6)
- Vanilla CSS
- Flexbox
- Grid
- LocalStorage
- Fontawesome

## Quick Start

Install dependencies

```
npm install
```

Run React from root

```
npm run dev
```

## App Info

#### Author

[Samuele Maurizi](https://samuelemaurizi.net/)

#### Version

1.0.0

#### License
MIT
