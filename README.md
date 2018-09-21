## Progress Tracker
Do you struggle with setting and meeting deadlines? 
Progress Tracker lets you set daily goals and track your actual daily progress to meet your deadline. 

## Description
This app allows users to set their daily goals and enter a deadline. Users can then enter their daily progress and Progress Tracker will update their progress and daily goal so they know how much they need to do each day to meet their deadline. 

## Link to Application
https://progress-tracker-app-client.herokuapp.com/

### Dummy user account for demo purposes
First name: user
Last name: user
Username: user (case sensitive)
Password: password12

## Screenshots
![homepage mobile viewport](https://user-images.githubusercontent.com/39287373/45904243-1b05e680-bdb2-11e8-97af-b0c724f60e8e.png)

This is the first page the user interacts with. They can click the info button at any time while using the app to see how to use it. 

![info section mobile viewport](https://user-images.githubusercontent.com/39287373/45901878-23f2ba00-bdaa-11e8-8213-18c7ee2ccd2a.png)

This is the info section where the user can find out how to use the app. 

![signup form mobile viewport](https://user-images.githubusercontent.com/39287373/45904350-63250900-bdb2-11e8-9278-0c1905453ba5.png)

New users will have to sign up to use the app by entering their first name, last name, username, password, and password confirmation.

![setup form mobile viewport](https://user-images.githubusercontent.com/39287373/45901877-23f2ba00-bdaa-11e8-88be-8dbfa344356c.png)

The user will be shown this page only once in order to enter their daily goal and days until deadline. 

![display goal mobile viewport](https://user-images.githubusercontent.com/39287373/45904507-df1f5100-bdb2-11e8-84fb-2da2f5d1fcdd.png)

The user will be prompted to enter their daily progress. The app will use that information to update and display their daily goal and total progress. 

### Sign-up/Login Page: 
New users can sign up. Users who’ve signed up can login. Potential users can read about how the app works. 
### Setup Page: 
Users who’ve signed up can enter their daily goal and days until deadline.
### Display Goal: 
Users who’ve entered their daily goal and days until deadline can enter their daily progress. Users can then see their updated progress and new daily goal. 
## Tech Stack
### Front-end: 
React is used for the client-side, with Redux for state management. React-router is used for connecting components and setting up routes. 
### Back-end: 
Node.js is used for the backend-server, with mongo for the database. 
## Key Parts
The main components are: App, Registration Form, Login Form, Dashboard, and Display Goal.
These and all other components are in the src/components/directory

App: This component handles periodic refresh of authentication and the routes for the other components.

Registration Form: This component handles the user signup and logs in the user once they have signed up. 

Login Form: This component handles the user login and validation of username and password.

Dashboard: This component handles the automatic log-out after the user has been inactive for 10 minutes and renders the components for the user to set their goal and enter their progress
