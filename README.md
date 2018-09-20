## Progress Tracker
Do you struggle with setting and meeting deadlines? 
Progress Tracker lets you set daily goals and track your actual daily progress to meet your deadline. 

## Description
This app allows users to set their daily goals and enter a deadline. Users can then enter their daily progress and Progress Tracker will update their progress and daily goal so they know how much they need to do each day to meet their deadline. 

## Link to Application **

### Dummy user account for demo purposes
Username: user (case sensitive)
Password: password12

## Screenshots ** 
### Sign-up/Login Page: 
New users can sign up. Users who’ve signed up can login. Potential users can read about how the app works. 
### Setup-page: 
Users who’ve signed up can enter their daily goal and days until deadline.
### Display-goal: 
Users who’ve entered their daily goal and days until deadline can enter their daily progress. Users can then see their updated progress and new daily goal. 
## Tech Stack
### Front-end: 
React is used for the client-side, with Redux for state management. React-router is used for connecting components and setting up routes. 
### Back-end: 
Node.js is used for the backend-server, with mongo for the database. 
Testing** with mocha and chai. 
## Key Parts
The main components are: App, Registration Form, Login Form, Dashboard, and Display Goal.
These and all other components are in the src/components/directory

App: This component handles periodic refresh of authentication and the routes for the other components.

Registration Form: This component handles the user signup and logs in the user once they have signed up. 

Login Form: This component handles the user login and validation of username and password.

Dashboard: This component handles the automatic log-out after the user has been inactive for 10 minutes and renders the components for the user to set their goal and enter their progress
