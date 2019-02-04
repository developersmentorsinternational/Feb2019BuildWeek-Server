# Febuary 2019 Build Week

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored Testing. During this Sprint, you studied Introduction to Automated Testing, Testing React Applications & Testing Web APIs. In your challenge this week, you will demonstrate proficiency by creating an application that follows the TDD pattern to create a simple Web API using Node.js and Express.

## Minimum Viable Product for Backend

Your finished project must include all of the following requirements:

- [ ] MVP work - Project should incorporate all of the listed MVP features
- [ ] Team contribution
- [ ] Data model is normalized
- [ ] The API incorporates authentication
- [ ] Project has automated testing suites covering Endpoints and Business Logic 
- [ ] API is deployed to the web
- [ ] Secrets are protected using environment variables

| Objective  | 1 | 2 | 3 |
|---|---|---|---|
| MVP work - Project should incorporate all of the listed MVP features | Student did not achieve all of the MVP features of the project. | Student's work demonstrates that all MVP features were built | Student's work demonstrates that all MVP features were built and the student went above and beyond the project. |
| Team contribution | Little to no contributions were made by this team member. | Team member was collaborative, able to work in a team environment | Pair programmed with the Web UI and Web Architect |
| Student should have built a CRUD API using Node/Express | Student did not build a CRUD API with all of the required endpoints, or the endpoints that exist don't work | Student built a CRUD API using Node and Express, code is clean and organized. | Student built a CRUD API using Node and Express, code is clean and organized. Student organized code using a patern similar to MVC, the usage of Routes and controllers and middleware is present and property incorperated throughout the project's backend |
| Data model is normalized | Student created a data model that exhibits data repetition and does not take advantage of foreign key constraints. | Student built a normalized data model where each entity is tracked in it's own table and where appropriate made use of Foreign Key constraints to ensure data integrity and consistency. | Student incorporated Knex migration and or seeding scripts to their solution. |
| The API incorporates authentication | Student did not add a way to authenticate users and restrict access to endpoints to only logged in users. | Student added authentication and restricted endpoints to be accessible only by logged in users. | Student added authorization and a way to restrict endpoints to users with that are authorized to access them. This could be as simple as using roles and restricting endpoints to a particular role. |
| Project has automated testing suites covering Endpoints and Business Logic  | The solution does not have any automated testing in place. | The core business logic is tested using unit tests. | The project has unit and integration tests that include end to end testing using a test database. |
| API is deployed to the web | The API is not deployed and only runs on localhost. | The API is not deployed and only runs on localhost. | The API is deployed on the web and can be accessed from anywhere, but the deployment is done manually. |
| Secrets are protected using environment variables | Any secrets like API keys and hashing secrets are hard-coded in the source code | Secrets are extracted out into environment variables using .env files that most be manually changed when deploying. | The project is configured to dynamically load the appropriate secrets based on the environment it's running on. |


## Project Set Up

Login/Signup Pages: A mentor can login in to an existing account with Username, and Password and a Phone Number or a user can sign up for an account with a username, and password and phone number. An e-mail address should be connected with an account creation.

Home Page: on login a user is sent to a list view page where they can see a list of their recent messages they’ve created, and a list of the schedules they’ve created.

Message Page: User can login and create the text or voice messages to be sent. For the MVP you do not need to include the ability to create new contacts.

Scheduling Page: User can create a message schedule to be automatically sent by adding a group of contacts, date to be sent, and selecting the message to be sent.  

Notifications: When it's time for the message to be sent, recipient will receive text notifications through Twilio sent to their phone or whatsapp number entered by the mentor.

Edit Message Schedule Page: user can edit and/or delete a message from their schedule.

Stretch: Allow a mentor to create/import contact information for the clients they mentor. Allow a 2nd user type (board member) to be able to log in and see trainer’s profiles based on an invitation. They can also Create, Read, Update and Delete messages to send client groups.

## To-Do

- [ ] Fix/implement cookie validation
- [ ] Seeding data to the database
- [ ] Dynamically create secret using randomizer
- [ ] Add many-many relationship for messages and contacts (maybe)
- [ ] Unit testing server code
- [ ] Use JWT as access token in cookie
- [ ] Form validation using JOI
- [ ] Unit testing JOI form validation
- [ ] Set up database stored user sessions. Allow for multiple sessions
- [ ] Implement picture upload for the profile picture