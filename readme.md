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

### Fetch all asks
Method: `GET`
```
http://localhost:5000/api/v1/asks?pag=1&limit=5
```
Endpoint to fetch asks.
Query parameters; `page` and `limit` provide pagination parameters for which page to show and how many elements to display.
Returns a list of of asks based on `page` number and `limit`. 
```
{
    "success": true,
    "message": "fetch operation succesful",
    "asks": [
        {
            "id": "643791b25e5e075183257f15",
            "message": "I need brand new Pixel 4xl 128GB in Buea Asap",
            "expirationDate": "Sat Apr 15 2023",
            "createdAt": "Thu Apr 13 2023",
            "locaton": "Limbe",
            "imageUrl": "path/to/askImage.png",
            "categoryId": "64383abb4413b4561f3b9d33",
            "userId": "64378d001c6d5c18ddd79514",
            "status": "visible",
            "activities": []
        },
        {
            "id": "6447f64195d4a63c6eac9827",
            "message": "I need a Modem in Bamenda around City Chemist. It should be new and in good condition.",
            "expirationDate": "Tue Apr 25 2023",
            "createdAt": "Tue Apr 25 2023",
            "locaton": "Bamenda",
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/whoget-assets.appspot.com/o/images%2Feyong_vanisiah.jpg?alt=media&token=bcaa0792-e2f1-4d5b-b219-16bce322a1f3",
            "categoryId": "64476a85589087b65a20cd05",
            "userId": "64378d001c6d5c18ddd79514",
            "status": "visible",
            "activities": []
        }
    ]
}
```

If no asks are found, the server returns an empty array.
```
{
    "success": true,
    "message": "fetch operation succesful",
    "asks": []
}
```

### Fetch one Ask by ID
Method: `GET`
```
localhost:5000/api/v1/asks/643791b25e5e075183257f15
```
Endpoint to fetch a single ask by ID. It takes the user ID as a request parameter and response with a JSON object which looks like below.
```
{
    "success": true,
    "message": "get ask operation successful",
    "ask": {
        "id": "643791b25e5e075183257f15",
        "message": "I need brand new Pixel 4xl 128GB in Buea Asap",
        "expirationDate": "Sat Apr 15 2023",
        "createdAt": "Thu Apr 13 2023",
        "locaton": "Limbe",
        "imageUrl": "path/to/askImage.png",
        "categoryId": "64383abb4413b4561f3b9d33",
        "userId": "64378d001c6d5c18ddd79514",
        "status": "visible",
        "activities": []
    }
}
```
If the `ask` with given ID is not found it returns a `404` error response.
```
{
    "success": false,
    "message": "the request params is not valid"
}
```
### Create an Ask
Method: `POST`
```
localhost:5000/api/v1/asks
```
This endpoint is used to create an Ask. It takes a payload (Ask object), use it to create an Ask document on the database and returns a new Ask ojbect
Example request body 👇
```
{
    "message": "I need a Full Stack Web developer. He should be based in Bamenda, has at least 2 years of experience in React, Redux, Express, MongoDB. Knowledge of PostGreSQL is a plus.",
    "categoryId": "644a978cf4bb74db2e2806f8",
    "location": "Bemenda",
    "imageUrl": "https://firebasestorage.googleapis.com/v0/b/whoget-assets.appspot.com/o/images%2Feyong_vanisiah.jpg?alt=media&token=bcaa0792-e2f1-4d5b-b219-16bce322a1f3",
    "expirationDate": "Tue Apr 25 2023",
    "status": "visible",
    "userId": "64378d001c6d5c18ddd79514"

}
```
This endpoint returns an object with a success massage and the newly created ask as below 👇

```
{
    "success": true,
    "message": "ask successfully created",
    "newAsk": {
        "id": "644a97b7f4bb74db2e2806fb",
        "message": "I need a Full Stack Web developer. He should be based in Bamenda, has at least 2 years of experience in React, Redux, Express, MongoDB. Knowledge of PostGreSQL is a plus.",
        "categoryId": "644a978cf4bb74db2e2806f8",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/whoget-assets.appspot.com/o/images%2Feyong_vanisiah.jpg?alt=media&token=bcaa0792-e2f1-4d5b-b219-16bce322a1f3",
        "location": "Bemenda",
        "userId": "64378d001c6d5c18ddd79514",
        "createdAt": "2023-04-27T15:41:43.106Z"
    }
}
```
