const connection = require('../db-config/dbconfig');

const createController = (req, res) =>{
    const { EmployeeID, FirstName, LastName, Position } = req.body;

    const query= `INSERT INTO Employees (EmployeeID, FirstName, LastName, Position, HireDate ) VALUES ('${EmployeeID}', '${FirstName}', '${LastName}','${Position}', NOW())`;

    connection.query(query, (err, result) => {
        if(err){
            console.error('error the quering database', err);
            return res.status(404).json({messaeg : 'error query in database'});
            
        }
        else{
           return res.status(200).json({message : "employee created successfully"});
        }

        
    })
}

module.exports = createController;