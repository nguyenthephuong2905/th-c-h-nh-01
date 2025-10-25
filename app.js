const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const productRoutes = require('./routes/productRoutes');

const app = express();

mongoose.connect('mongodb://localhost:27017/productdb')
  .then(() => console.log('✅ Connected MongoDB'))
  .catch(err => console.error(err));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use('/', productRoutes);

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
