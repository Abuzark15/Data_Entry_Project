const connection = require('../db-config/dbconfig'); 

const getSearchController = (req, res) => {
    const searchTerm = req.query.q;
    if (!searchTerm) {
        return res.status(400).json({ error: 'Search term is required' });
    }

    const query = `
        SELECT * FROM Employees
        WHERE EmployeeID LIKE ? OR
              FirstName LIKE ? OR
              LastName LIKE ? OR
              Position LIKE ?
    `;
    
    connection.query(query, 
        [`%${searchTerm}%`, `%${searchTerm}%`, `%${searchTerm}%`, `%${searchTerm}%`],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Database query error' });
            }
            res.json(results);
        }
    );
};

module.exports = getSearchController;
