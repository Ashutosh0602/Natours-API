const fs = require('fs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });
const Tour = require('./../../models/tourModel');
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
    // console.log(con.connections);
    console.log('database connected successfully');
  });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data successfully loaded');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('data successfully deleted');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
// console.log(process.argv);
