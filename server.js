const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON request bodies

app.post('/echo', (req, res) => {
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});