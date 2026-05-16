const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('DevOps CI/CD with Node.js + Jenkins + Docker');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});