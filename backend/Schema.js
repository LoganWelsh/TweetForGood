import mongoose from 'mongoose';

/* Create your schema for the data in the listings.json file that will define how data is saved in your database
     See https://mongoosejs.com/docs/guide.html for examples for creating schemas
     See also https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
  */

const testSchema = new mongoose.Schema({
    name: {type: String, required: true},

//Check out - https://mongoosejs.com/docs/guide.html
});

const pieDataSchema = new mongoose.Schema({
  name: {type: String, required: true},
  percentage: {type: Number, required: true}
});

/* Export the model to make it avaiable to other parts of your Node application */
//Check out - https://mongoosejs.com/docs/guide.html#models
export default {
  webModel: mongoose.model('test', testSchema),
  pieDataModel: mongoose.model('pieData', pieDataSchema),
  // backToFront: mongoose.model(),
};