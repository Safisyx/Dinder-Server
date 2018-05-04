# Dinder-Server
Class15/projectWeek/backend

A backend for https://github.com/Safisyx/Dinder-Client  
This was a group project.

## To run it
First you need [Node.js](https://nodejs.org/en/), and configure the database link in src/db.js (we are using [postgreSQL](https://www.postgresql.org/)).  
Run ```npm install``` to install the dependencies, you may want to use [yarn](https://yarnpkg.com/en/) as it is a ultra fast dependency manager :smile:  
Run ```node_modules/.bin/sequelize db:migrate``` or simply ```npm run migrate``` to create the tables.  
Run ```node .``` to start the api
