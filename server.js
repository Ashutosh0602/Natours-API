const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });
const app = require('./app');
mongoose
  .connect(
    `mongodb+srv://natours:${
      process.env.PASSWORD
    }@cluster0.kylf9c1.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true
    }
  )
  .then(con => {
    console.log('database connected successfully');
  });

// const testTour = new Tour({
//   name: 'The Forest Hiker',
//   rating: 4.5,
//   price: 712
// });
// testTour.save().then(doc => {
//   console.log(doc);
// });

const port = process.env.PORT || 3300;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
