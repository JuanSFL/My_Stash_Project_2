# StashHouse
## Description
StashHouse is a full-stack web application that allows users to buy, sell and collect various items such as cards, toys, and rare goods. Users can create an account, browse through different categories, add items to their cart, and complete a transaction.

## Technologies Used
* Node.js
* Express.js
* Handlebars.js
* MySQL
* Sequelize ORM
* Passport.js
* bcrypt.js
* dotenv
* Bootstrap
* jQuery
* Heroku

## Installation
To install and run this application on your local machine, please follow these steps:

* ***Clone*** this repository to your local machine
* ***Run npm install*** to install all the required dependencies
* ***Create a .env file*** in the root directory of your project and add the following lines:
* python
* ***Copy code***
DB_NAME='your_db_name'
DB_USER='your_db_username'
DB_PW='your_db_password'
* ***Run mysql*** -u root -p to enter MySQL shell
* ***Enter your MySQL password***
* ***Run source*** db/schema.sql; to create the database
* ***Run quit;*** to exit MySQL shell
* ***Run npm*** run seed to seed the database with some data
* ***Run npm*** start to start the server
* ***Open your browser*** and navigate to http://localhost:3001

## Features
* User authentication (login and signup)
* Create, read, update and delete items
* Search for items by category and keywords
* Add items to cart
* Checkout and complete transactions
* View transaction history
* Responsive design
* Future Development
* Implement a rating and review system
* Add social sharing options
* Include a recommendation engine
* Enhance the UI with animations and effects

## Links
* ***Deployed Application:*** https://stash-house.herokuapp.com/
* ***GitHub Repository:*** https://github.com/JuanSFL/My_Stash_Project_2
* ***Portfolio:*** TBD
