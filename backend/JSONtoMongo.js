'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
import * as fs from 'fs';
import mongoose from 'mongoose';
import testModel from './Schema.js';
import config from './config.js';

let data;
const uri = config.db.uri

mongoose.connection.on("connected", function(){
  console.log("Connected");
});

mongoose.connection.on("error", function(err){
  console.log("Error");
});

mongoose.connection.on("disconnected", function(){
  console.log("Disconnected");
});

process.on("SIGNIT", function(){
  mongoose.connection.close(function(){
    console.log("Terminated");
    process.exit(0);
  });
});

/* Connect to your database using mongoose */
//see https://mongoosejs.com/docs/connections.html
//See https://docs.atlas.mongodb.com/driver-connection/

const Connect = () =>{
  mongoose.set('useUnifiedTopology', true);
  mongoose.connect(uri, {useNewUrlParser: true});
};

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
  //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

  Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
 */

// var del = ListingSchema.deleteMany();
// del.exec();

fs.readFile('pieData.json', 'utf8', (err, data) => {
  if (err) throw err;
  data = JSON.parse(data);
  Connect();
  testModel.insertMany(data.entries)
  .then(disconnect => mongoose.disconnect());
});

/*  
  Check to see if it works: Once you've written + run the script, check out your local MongoDB database to ensure that
  it saved everything correctly. 
 */
