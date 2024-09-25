const connection = require('../db-config/dbconfig');

const deleteController = (req, res) => {
    const id = req.params.id;
    console.log('Attempting to delete user with id:', id);


    const query = 'DELETE FROM Employees WHERE id = ?';

    connection.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error deleting the record: ', err);
            return res.status(500).json({ message: "Error deleting from database" });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    });
}

module.exports = deleteController;
