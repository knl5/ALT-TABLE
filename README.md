# ALT-TABLE

This is a monolithic RESTful API for a restaurant service, built with Express and Node.js. This app can be easily extended to become a microservices app in the future.

## Features
Menu: The API has a menu of meals, each of which can have multiple ingredients.
Stock: The API can check if a meal is available based on the stock of its ingredients.
Create: The API can create a new meal and add it to the menu.
Update: The API can update the availability and quantity of a meal on the menu.

## Setup
Clone the repository and navigate to the project folder:
git clone https://github.com/knl5/ALT-TABLE.git

### Install the dependencies:
`npm install

### Start the server:
Start the app: `node server.js`
The server should be running on http://localhost:3000.



## API Documentation

### Get all the menu with only the meal that are available
**GET /menu**
This endpoint returns only the available meals on the menu.


### Get all meals
**GET /meal**
This endpoint returns the full menu of meals.

### Get a meal by ID
**GET /menu/:id**
This endpoint returns a specific meal by its ID.

### Create a new meal
**POST /menu**
This endpoint creates a new meal and adds it to the menu. The request body should include the name, description, price, availability, and ingredients of the meal.
Example:
`{
  "name": "Salad",
  "ingredients": ["lettuce", "tomato", "cucumber"],
  "available": true,
  "quantity": 7
}`

### Update a meal
**PUT /menu/:id**
This endpoint updates a meal on the menu. The request body should include the new availability and/or quantity of the meal.
To update the quantity of a meal, you can send a PUT request to /menu/:id with a request body that contains the new quantity value, like this:

example:
json
`{
  "available": true,
  "quantity": 3
}`
or 
`{
  "available": false,
  "quantity": 0
}`

#### Contributing
Contributions are welcome! To contribute, please create a pull request with your changes.
