const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Parse JSON request bodies
app.use(bodyParser.json());

// Initialize our menu
let menu = [
  {
    id: 1,
    name: 'Cheeseburger',
    ingredients: ['beef patty', 'cheese', 'lettuce', 'tomato', 'onion', 'bun'],
    available: true,
    quantity: 10,
  },
  {
    id: 2,
    name: 'Pizza',
    ingredients: ['dough', 'tomato sauce', 'cheese', 'pepperoni'],
    available: true,
    quantity: 5,
  },
];

// Route to get the menu
app.get('/menu', (req, res) => {
  const availableMenu = menu.filter((meal) => meal.available);
  res.json(availableMenu);
});

app.get('/meal', (req, res) => {
  res.json(menu);
});

// Route to create a new meal
app.post('/menu', (req, res) => {
  const meal = req.body;
  meal.id = menu.length + 1;
  menu.push(meal);
  res.json(meal);
});

// Route to update the availability of a meal
app.put('/menu/:id', (req, res) => {
  const mealId = parseInt(req.params.id);
  const meal = menu.find((m) => m.id === mealId);
  if (!meal) {
    res.status(404).json({ message: 'Meal not found' });
  } else {
    meal.available = req.body.available;
    meal.quantity = req.body.quantity;
    res.json(meal);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
