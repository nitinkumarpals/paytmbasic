// index.js
import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());


import mainRouter from './routes/index.js';
const PORT =  3000;

app.use("/api/v1", mainRouter);

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
