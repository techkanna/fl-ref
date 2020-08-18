const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const connectDb = require('./config/dbConnect');

const msgEndPoints = require('./router/msgRouter');

require('dotenv').config();
connectDb();
// middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api/msg/', msgEndPoints);

app.get('/', (req, res) => {
  res.json({ msg: 'welcome Home 🏠' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
