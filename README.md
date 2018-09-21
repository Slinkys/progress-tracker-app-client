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
![homepage 1600px](https://user-images.githubusercontent.com/39287373/45892866-0ebc6200-bd8f-11e8-86ad-9fd61e366519.png)
![info section 1600px](https://user-images.githubusercontent.com/39287373/45892865-0ebc6200-bd8f-11e8-89ad-d29d22c44359.png)
![signup form 320px](https://user-images.githubusercontent.com/39287373/45892863-0e23cb80-bd8f-11e8-8adb-95abbbd8f2d6.png)
![setup page 320px](https://user-images.githubusercontent.com/39287373/45892862-0e23cb80-bd8f-11e8-9fe2-0318f4952106.png)
![enter progress 320px](https://user-images.githubusercontent.com/39287373/45892861-0e23cb80-bd8f-11e8-954b-e4553ba03b78.png)
![display goal 320px](https://user-images.githubusercontent.com/39287373/45892860-0e23cb80-bd8f-11e8-9aca-768741432da4.png)

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
## Key Parts
The main components are: App, Registration Form, Login Form, Dashboard, and Display Goal.
These and all other components are in the src/components/directory

App: This component handles periodic refresh of authentication and the routes for the other components.

Registration Form: This component handles the user signup and logs in the user once they have signed up. 

Login Form: This component handles the user login and validation of username and password.

Dashboard: This component handles the automatic log-out after the user has been inactive for 10 minutes and renders the components for the user to set their goal and enter their progress
