const connection = require('../db-config/dbconfig'); 

const userController = (req, res) => {
    const query = 'SELECT * FROM Employees';
  
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error querying the database:', err);
        return res.status(500).send('Database query error');
      }
      res.json(results); 
    });
  };

module.exports = userController;