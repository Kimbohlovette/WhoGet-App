# WhoGet Server
This is a backend web service for the WhoGet mobile and web application. It exposes API endpoints where the mobile and web versions of the application can make CRUD operations to the application's database. The WhoGet backend server is developed with ExpressJS - a Nodejs Framework for writing application API's. The database management system is MongoDB and Mongoose is used as the object document mapper (ODM) for manipulating and querying the database.

## Installation

In order to setup this application on your local machine, you need to follow the steps below.

1. Clone the this repository to your local machine using the command below

```
git clone https://github.com/kimbohlovette/whoget-app-server.git
```
Navigate to the root directory with `cd whoget-app-server` command.

2. In the root directory, run `npm install` command to install all dependencies needed for the app to run.
3. **Setup a connection to MongoDB**. Create a `.env` file at the root folder and assign credientials to the variables as folllows
```
MONGODB_NAME='your user name'
MONGODB_PWD='password'
MONGODB_APPNAME='application name'
MONGODB_DBNAME='database name'
```
5. Run `npm run dev` start the development server.

## API endpoints


