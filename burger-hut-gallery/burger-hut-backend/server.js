const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Sample data for menu, reviews, and locations
const menuItems = [
    { id: 1, name: 'Classic Burger', description: 'A classic beef burger with lettuce, tomato, and cheese.', price: 8.99, image: 'burger1.jpg' },
    { id: 2, name: 'Chicken Burger', description: 'Grilled chicken breast with lettuce, tomato, and mayo.', price: 9.99, image: 'burger2.jpg' },
    { id: 3, name: 'Veggie Burger', description: 'A delicious veggie patty with lettuce, tomato, and avocado.', price: 7.99, image: 'burger3.jpg' }
];

const reviews = [
    { id: 1, author: 'John Doe', comment: 'Great burgers, will come again!', rating: 5 },
    { id: 2, author: 'Jane Smith', comment: 'Loved the chicken burger.', rating: 4 },
    { id: 3, author: 'Sam Wilson', comment: 'Best veggie burger I have ever had!', rating: 5 }
];

const locations = [
    { id: 1, address: '123 Burger Lane, Food City', phone: '(123) 456-7890', hours: 'Mon-Sun 11am-10pm' }
];

// Middleware to parse JSON
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Burger Hut API!');
});

app.get('/menu', (req, res) => {
    res.json(menuItems);
});

app.get('/reviews', (req, res) => {
    res.json(reviews);
});

app.get('/locations', (req, res) => {
    res.json(locations);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
