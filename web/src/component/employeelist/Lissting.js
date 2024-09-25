import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Pagination, PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Lissting.css'; 
import React, { useState } from 'react';
import { useLanguage } from '../languageSelector/LanguageContext';

function Lissting(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 8;


    const { translate } = useLanguage(); 

    // Calculate the index of the first and last rows
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentEmployees = props.employee.slice(indexOfFirstRow, indexOfLastRow);

    // Calculate total pages
    const totalPages = Math.ceil(props.employee.length / rowsPerPage);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className="table-responsive">
            <table className="container table table-striped table-hover">
                <thead>
                    <tr className='header'>
                        <th>{translate('Sr NO.')}</th>
                        <th>{translate('EmployeeID')}</th>
                        <th>{translate('First Name')}</th>
                        <th>{translate('Last Name')}</th>
                        <th>{translate('Position')}</th>
                        <th>{translate('Hire Date')}</th>
                        <th colSpan="2" className="text-center">{translate('Actions')}</th>
                    </tr>
                </thead>
                <tbody className='tablebody'>
                    {Array.isArray(currentEmployees) && currentEmployees.length > 0 ? (
                        currentEmployees.map((user, index) => (
                            <tr key={index}>
                                <td>{indexOfFirstRow + index + 1}</td>
                                <td>{user.EmployeeID}</td>
                                <td>{user.FirstName}</td>
                                <td>{user.LastName}</td>
                                <td>{user.Position}</td>
                                <td>{new Date(user.HireDate).toLocaleDateString()}</td>
                                <td className="text-center">
                                    <button 
                                        className="btn btn-sm btn-warning"
                                        title="Edit"
                                        onClick={() => props.onUpdateClick(user)}
                                    >
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                </td>
                                <td className="text-center">
                                    <button 
                                        className="btn btn-sm btn-danger"
                                        title="Delete"
                                        onClick={() => props.onDeleteClick(user.id)}
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="text-center">{translate('No employees found.')}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                renderItem={(item) => (
                    <PaginationItem
                        slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                        {...item}
                    />
                )}
                className="pagination"
            />
        </div>
    );
}

export default Lissting;
