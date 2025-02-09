const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON request bodies

app.post('/echo', (req, res) => {
    const receivedText = req.body.text;
    if (!receivedText) {
        return res.status(400).json({ error: "No text provided" });
    }
    res.json({ echo: receivedText });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});