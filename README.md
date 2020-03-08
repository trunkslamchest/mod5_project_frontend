
<p align="center"><img width=75% src="https://github.com/trunkslamchest/mod5_project_frontend/blob/dev-win64-0.6/src/assets/index_logo_blue3.png"></p>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![CSS](https://img.shields.io/badge/CSS-3.0-1572B6) ![HTML](https://img.shields.io/badge/HTML-5.2-E34F26) ![Javascript](https://img.shields.io/badge/Javascript-1.8.5-F7DF1E) ![PostgresQL](https://img.shields.io/badge/Postgresql-12.1-336791) ![ReactJS](https://img.shields.io/badge/React.JS-16.12.0-61DAFB) ![Ruby](https://img.shields.io/badge/Ruby-2.6.5-CC342D) ![Ruby On Rails](https://img.shields.io/badge/Ruby%20On%20Rails-6.0.2.1-cc0600)
&nbsp;

<p align="center">
  <img align="center" src="https://img.shields.io/badge/Status-Work%20In%20Progress-000000">
  <a href="https://github.com/trunkslamchest/mod5_project_frontend/tree/dev-win64-0.7"><img align="center" src="https://img.shields.io/badge/Most%20Recent%20Branch-dev--win64--0.7-000000"></a>
  <a href="https://github.com/trunkslamchest/mod5_project_backend/"><img align="center" src="https://img.shields.io/badge/Backend%20Repository%20-Click%20Here-000000"></a>

</p> 

# Contents
- [Introduction](#introduction)
  - [Description](#description)
  - [Key Features](#key-features)
  - [Goals](#goals)
  - [Challenges](#challenges)
- [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [First Start](#first-start)
- [Summary Of Files](#summary-of-files)
  - [Internal File Structure](#internal-file-structure)
  - [External Dataset](#external-dataset)
- [Credits](#credits)

&nbsp;

# Introduction
  ### Description
  SmartApp is a trivia application designed for people who love trivia, love to test their knowledge, and/or religiously watch Jeopardy. SmartApp was also developed with an administrative panel that collects user traffic and browsing data in real time, an in-browser database editor. SmartApp utilizes the Open Trivia Database for it's trivia dataset.
  
  ### Key Features
  - 250 trivia questions to answer
  - 3 difficulty levels
  - 20 categories
  - Statisically generated user ratings
  - Login/Signup secured with bcrypt & JWT Auth
  - Easy to access API functionality using FastJSON API for derivated work
  - Access Restricted administrative panel featuring realtime page & element tracking & in-browser database editor
  - Vote/Comment on trivia questions after answering a question
  - Conditional rendering and keyframe animations  
  - Message other users (TBA)
  - Challenge other users to answer questions (TBA)
  - Custom Statisically Analytics Queries for Administrators/Developers (TBA)
  - Fun for the whole family
  
  ### Goals
  The two main goals of the project is to develop an application that was engaging to the end user, as well as explore potentialities to collect and curate user generated data in real time. 
  
  ### Challenges
  - Creating an effective workflow to get MVP and deliverables completed before a set deadline
  - Developing an application that is engaging enough for a user to generate enough traffic to collect on the administrative panel
  - Designing a gameplay loop that is easy to follow as well as a visual style that is legible and non intrusive
  - Refactoring large portions of the administrative panel to utilize as little communication between the frontend and backend as possible
  - Deployment
  
&nbsp;

<a href="https://github.com/trunkslamchest/mod5_project_frontend/blob/master/README.md#contents"><img src="https://img.shields.io/badge/^-Back%20To%20Top-000000"></a>

&nbsp;

# Installation
  ### Prerequisites
  Smart App is built using React, Ruby, Ruby on Rails & PostgresQL. Make sure you have the latest versions of all four components installed before cloning this repo. You can find their official installation guides below:
  - [React](https://reactjs.org/docs/getting-started.html)
  - [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
  - [Ruby On Rails](https://guides.rubyonrails.org/v5.0/getting_started.html)
  - [PostgresQL](https://www.postgresqltutorial.com/)
  
&nbsp;

  ### Frontend
  - Clone the most recent branch in this repository
  - Run `npm install` in your bash-enabled terminal to make sure all dependancies are installed
  
  You can run `npm start` but you will not be able to login and use the application correctly. 
  
  **The Backend Repository is a required component of SmartApp**
  
&nbsp;  

  ### Backend
  The Backend Repository can be found [here](https://github.com/trunkslamchest/mod5_project_backend)
  
  #### Windows Installation
  - Add the line `gem 'wdm', '>= 0.1.0'` to Gemfile before running `bundle install`
  
  #### MacOS Installation
  - Remove the line `gem 'wdm', '>= 0.1.0'` from Gemfile before running `bundle install`
 
  #### Universal Installation
  - Clone the most recent branch from The Backend Repository
  - Run `rvm use Ruby-2.6.5` to make sure you are using the correct version of Ruby 
  - Run `bundle install` to install all gems/dependancies required for SmartApp 
  - Run `rails db:create mod5-fp` to create a local PostgresQL database
  - Run `rails db:migrate` to create the tables/columns required for proper SmartApp functionality
  - Run `rails db:seed` to populate the columns with rows of "real" data
  

&nbsp;
  ### First Start
   If you have not received any errors/resolve any errors you have encountered during Frontend/Backend Installation, you are ready to start SmartApp for the first time.
    
  First:
  - Run `rails s -p 3001` to start the backend server on port 3001. 
  
  The server must run on 3001 as all the fetch requests on the frontend point to port 3001. If you can not or do not want to run the backend server on port 3001, you will need to update all frontend fetch requests accordingly. 
  
  Second:
  - Run `npm start` **in a separate bash terminal window** to start the frontend server on port 3000
  
  Third:
  - You can now access Frontend portion of SmartApp by visiting: `http://localhost:3000` 
  - You can now access Backend portion of SmartApp by visiting: `http://localhost:3001` 
  
  Thats it! Have fun breaking/fixing/doing whatever you want with SmartApp. The world is your oyster!

&nbsp;

   **If you have recieved any errors during this process, feel free to contact me so I can help you and update this readme accordingly**
  
&nbsp;
  
<a href="https://github.com/trunkslamchest/mod5_project_frontend/blob/master/README.md#contents"><img src="https://img.shields.io/badge/^-Back%20To%20Top-000000"></a>

&nbsp;

# Summary Of Files
  ### Internal File Structure
  - [docs](https://github.com/trunkslamchest/mod5_project_frontend/tree/dev-win64-0.7/docs): Documents for Development Purposes
  - [public](https://github.com/trunkslamchest/mod5_project_frontend/tree/dev-win64-0.7/public): Various Assets for General Purposes
  - [src](https://github.com/trunkslamchest/mod5_project_frontend/tree/dev-win64-0.7/src): Root Frontend
    - [admin](https://github.com/trunkslamchest/mod5_project_frontend/tree/dev-win64-0.7/src/admin): Administrative Panel
      - [db_edit](https://github.com/trunkslamchest/mod5_project_frontend/tree/dev-win64-0.7/src/admin/db_edit): In Browser Database Editor
      - [rtv](https://github.com/trunkslamchest/mod5_project_frontend/tree/dev-win64-0.7/src/admin/rtv): Real Time Traffic Viewer
    - [assets](https://github.com/trunkslamchest/mod5_project_frontend/tree/dev-win64-0.7/src/assets): Art Assets
    - [css](https://github.com/trunkslamchest/mod5_project_frontend/tree/dev-win64-0.7/src/css): CSS stylesheets
    - [docs](https://github.com/trunkslamchest/mod5_project_frontend/tree/dev-win64-0.7/src/docs): Terms Of Service/Privacy Policy/Disclaimer
    - [question](https://github.com/trunkslamchest/mod5_project_frontend/tree/dev-win64-0.7/src/question): Core Gameplay Loop Functionality
    - [user](https://github.com/trunkslamchest/mod5_project_frontend/tree/dev-win64-0.7/src/user): All files pertaining to User Specific Actions
      - [dashboard](https://github.com/trunkslamchest/mod5_project_frontend/tree/dev-win64-0.7/src/user/dashboard): User Dashboard Functionality
  - [package.json](https://github.com/trunkslamchest/mod5_project_frontend/blob/dev-win64-0.7/package.json): Prerequisite Modules/Dependancies
  
&nbsp;

  ### External Dataset

  - [Open Trivia Database API](https://opentdb.com/api_config.php): Initial Source of local question database
  
&nbsp;
  
<a href="https://github.com/trunkslamchest/mod5_project_frontend/blob/master/README.md#contents"><img src="https://img.shields.io/badge/^-Back%20To%20Top-000000"></a>

&nbsp;

# Credits
  - [The Flatiron School](https://flatironschool.com/)
  - [bcrypt](https://www.npmjs.com/package/bcrypt)
  - [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
  - [Fast JSON API](https://github.com/Netflix/fast_jsonapi)
  - [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [JWT Auth](https://jwt.io/introduction/)
  - [Open Trivia Database](https://opentdb.com/)
  - [PostgresQL](https://www.postgresql.org/)
  - [React](https://reactjs.org/)
  - [React Router](https://reacttraining.com/react-router/)
  - [Ruby](https://www.ruby-lang.org/en/)
  - [Ruby On Rails](https://rubyonrails.org/)
  
&nbsp;
  
<a href="https://github.com/trunkslamchest/mod5_project_frontend/blob/master/README.md#contents"><img src="https://img.shields.io/badge/^-Back%20To%20Top-000000"></a>

&nbsp;
