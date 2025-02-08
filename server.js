const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON request bodies

app.post('/echo', (req, res) => {
    const receivedText = req.body.text;
    if (!receivedText) {
        return res.status(400).json({ error: "No text provided" });
    }
    res.json({ echo: receivedText });
});

app.listen(port, () => {
    console.log(Echo server running at http://localhost:${port});
});