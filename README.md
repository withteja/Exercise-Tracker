# Demo

![Demo1](https://github.com/withteja/Exercise-Tracker/blob/main/Readme%20Assets/1.png)
![Demo2](https://github.com/withteja/Exercise-Tracker/blob/main/Readme%20Assets/2.png)
![Demo3](https://github.com/withteja/Exercise-Tracker/blob/main/Readme%20Assets/3.png)
![Demo4](https://github.com/withteja/Exercise-Tracker/blob/main/Readme%20Assets/4.png)



# Getting Started with Create React App

Tech Stack: MERN [ MongoDB, Express, React, NodeJS ]

## npm packages need to install
  ``` npm install express mongoose dotenv bootstrap react-datepicker axios cors react-router-dom ```
  
  ``` sudo npm nodemon ```

## Create a MongoDB atlas cluster, after creating a cluster you get a connection string and add it to the .env file


Connection string looks like this:

``` mongodb+srv://Username:<password>@cluster0.jfukr.mongodb.net/<dbname>?retryWrites=true&w=majority Path : mern-exercise-tracker/backend ```

In .env file 
######   Eg: `ATLAS_URI='add connection string here'`
## How to run
#### Frontend `yarn start` or `npm start` in ``` ./src folder ```
####  Backend   `nodemon server` in ```./backend folder```
You need to install all the packages mentioned above and create a mongoDB atlas cluster for this to run.

### Runs the app in the development mode.\
 Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\

