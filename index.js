// require('dotenv').config();
// require('./src/config/dbconnect').connect();
//
// const express = require('express');
//
// const ProductRouter = require('./src/routes/ProductRoutes');
//
// const app = express();
//
// // middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
//
// app.use('/', ProductRouter);
//
// const PORT = process.env.NODE_PORT;
//
// app.listen(PORT, () => {
//   console.log(`App running on Port: ${PORT}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const routes = require('./routes');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/', routes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
})
