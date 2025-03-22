const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

// Dummy event data
let events = [
    { id: 1, name: "Tech Talk", time: "3:00 PM" }
];

// API to get events
app.get('/api/events', (req, res) => {
    res.json(events);
});

// Start the server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
