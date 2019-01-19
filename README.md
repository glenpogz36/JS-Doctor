#  _Doctor Search & Condition_

#### _Single Webpage for Epicodus, 1.18.2019_

#### By _Glen Sale_

## Description

_A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query. A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)_

* A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.

* A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.

* If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).

* If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.

* Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user’s life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.

* If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)


### Specs
| Spec | Input | Output |
| :-------------    | :------------- | :-------------|
| Program uses API of User| Input in .env: exports.apiKey = "[Your API]" | Output: key=${process.env.exports.apiKey} |
| Program uses API for Doctor Search| Input: "Name" | Output: "A list of Doctor info"  |
| Program uses API for Condition| Input: "Illness" |Output: "Recommended Doctor" |
| Program uses API for returning Error Message| Input: 1234 | Output: Invalid |
| Program uses API for that checks if a criteria is met| Input: "Test" | Output: "No doctors meet the criteria" |



### Creating API Keys

_You will need to make an account and an API key. Do not use someone else’s API key. Avoid making excessive API calls (ie: accidental infinite loops) during development. And be sure to enter Epicodus as your Organization/Company name when signing up, because BetterDoctor grants Epicodus students higher rate limits for free._

* Visit https://developer.betterdoctor.com/ API site and click “Get a free API key”.
* Fill out the form, listing Epicodus as the Organization/Company Name.
* Your API key should be listed on the front page (ex: “a2c356ibgh44…..”) or under My Account > Applications.

## Setup/Installation Requirements
* _Clone Repository._
* _Place your token in an .env file at the top level of your directory. (For grading purposes, name your API key variable exports.apiKey in .env. Keep spelling and capitalization identical, as it considerably speeds up the grading process.)_
* _Include .env in .gitignore._
* _Use at least two JavaScript files: One to receive form input and another to make an API request and display results._
* _Download all packages by typing "npm install" in the terminal._
* _To run the program, first navigate to the location: npm run build then, npm run start._
* _Open http://localhost:8080 in web browser._




## Technologies Used
* _Javascript_
* _Node Package Manager (NPM)_
* _JSON_
* _Webpack_
* _eslintrc_
* _.env_
* _gitignore_
* _Jasmine and Karma (testing)_
* _Babel_
* _Terminal_
* _VS Code_
* _GitHub_


### License

*This software is licensed under the MIT license.*

Copyright (c) 2019  _Glen Sale_
