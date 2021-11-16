const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.port || 8080;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
	console.log(`Running in Port: http://localhost:${PORT}`);
});
