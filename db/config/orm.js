const connection = require("./connection.js");

const orm = {
    selectAll: function(tableName) {
      const queryString = "SELECT * FROM ??";
      const query = connection.query(queryString, [tableName], (err, result) => {
        if (err) throw err;
  
        console.log("\n", query.sql); // display the final query string above the results
        console.log(result);
      });
    },
    insertOne: function(burg_name, devoured_val) {
      const queryString = "INSERT INTO burguers (burguer_name, devoured) VALUES ( ??, ?)";
      const query = connection.query(queryString, [burg_name, devoured_val], (err, result) => {
        if (err) throw err;
  
        console.log("\n", query.sql); // display the final query string above the results
        console.log(result);
      });
    },
    //HARD MODE: It's ok if you don't understand this query
    updateOne: function(burg_name, , devoured_val) {
      ///We're using template literals to break our query into multiple lines and make it easier to read
      const queryString =
      `
      UPDATE 
        burguers 
      SET 
        devoured = ?
      WHERE
        burguer_name = ??`;
      
      //Once we have our query string defined, substitute in the necessary values and send the query to the database
      const query = connection.query(
      queryString,
      [burg_name, , devoured_val],
      (err, result) => {
        if (err) throw err;
        console.log("\n", query.sql); // display the final query string above the results
        console.log(result);
      }
      );
    }
  };
  
  module.exports = orm;
  