const connection = require('../db-config/dbconfig');

const updateController = (req, res) => {
    const id = req.params.id;
    console.log('Attempting to update user with id:', id);
    const { EmployeeID, FirstName, LastName, Position } = req.body;

   
    const query = `UPDATE Employees SET EmployeeID = ?, FirstName = ?, LastName = ?, Position = ? WHERE id = ?`;

    connection.query(query, [EmployeeID, FirstName, LastName, Position, id], (err, result) => {
        if (err) {
            console.error('Error updating the records', err);
            return res.status(500).json({ error: "Database query error" });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User updated successfully' });
    });
}

module.exports = updateController;
