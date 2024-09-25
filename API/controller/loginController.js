const connection = require('../db-config/dbconfig');

const login = (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM admin WHERE username = ? AND password = ?';
    const values = [username, password];

    connection.query(query, values, (err, results) => {
        if (err) {
            console.error('Error during login:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (results.length > 0) {
          
            return res.status(200).json({ message: 'Login successful!' });
        } else {
          
            return res.status(401).json({ message: 'Invalid username or password' });
        }
    });
};

module.exports = login;
