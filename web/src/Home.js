import { useEffect, useState } from "react";
import axios from "axios";
import Lissting from "./component/employeelist/Lissting";
import Header from "./component/header/Header";
import DeleteModal from "./component/delete/DeleteModal";
import UpdateModal from "./component/update/UpdateModal";
import CreateModal from "./component/create/CreateModal";
import Footer from "../src/component/footer/Footer"
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"; 
import 'react-toastify/dist/ReactToastify.css';
import { useLanguage } from '../src/component/languageSelector/LanguageContext';

function Home() {
    const [employee, setEmployee] = useState([]);
    const [error, setError] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const [isDeleteOpenModal, setisDeleteOpenModal] = useState(false);
    const [isUpdateOpenModal, setisUpdateOpenModal] = useState(false);
    const [ isCreateOpenModel, setIsCreateOpenModel] = useState(false)
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
    const[selectedUser , setselectedUser] = useState({id:"",EmployeeID: "", FirstName: "", LastName : "", Position: "" });
    const[ createEmployee, setCreateEmployee] = useState({EmployeeID: "", FirstName: "", LastName : "", Position: "" });
    const navigate = useNavigate();


    const { translate } = useLanguage(); 

    
    useEffect(() => {

        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:4001/api/getemployee/');
            console.log("API Response:", response.data); 
            setEmployee(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false); 
        }
    };
    const handleSearch = async (searchTerm) => {
        if (!searchTerm) {
           
            fetchUsers(); 
            return;
        }
        
        try {
            const response = await axios.get(`http://localhost:4001/api/search?q=${searchTerm}`);
            setEmployee(response.data);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleCancel = () =>{
        setisDeleteOpenModal(false);
        setisUpdateOpenModal(false);
        setIsCreateOpenModel(false);
        fetchUsers();
    }


    const handleDeleteClick = (id) =>{
        setSelectedEmployeeId(id);
        setisDeleteOpenModal(true);
    }

    const handleUpdateClick = (user) => {
        setselectedUser(user);
        setisUpdateOpenModal(true);
        console.log(selectedUser);
        
    } 

    const handleAddClick =() =>{
        setIsCreateOpenModel(true);
        
    }


    const handleConfirmDelete = async () => {
        if (selectedEmployeeId) {
            try {
                await axios.delete(`http://localhost:4001/api/deleteEmployee/${selectedEmployeeId}`);
                setEmployee(fetchUsers());
                toast.success(translate('Employee delete successfully!'));
                
            } catch (err) {
                setError(err.message);
                toast.error('Failed to delete employee.');
            } finally {
                setisDeleteOpenModal(false); 
                setSelectedEmployeeId(null); 
            }
        }
    };

    const handleConfirmUpdate = async () => {
        try {
            const { id, EmployeeID, FirstName, LastName, Position } = selectedUser; 
            await axios.patch(`http://localhost:4001/api/updateEmployee/${id}`, {
                EmployeeID,
                FirstName,
                LastName,
                Position,
            });
            toast.success('Employee updated successfully!');
            fetchUsers(); 
        } catch (error) {
            setError(error.message);
            toast.error('Failed to updated employee.');
        } finally {
            setisUpdateOpenModal(false);
        }
    };


    const handleCreate = async() => {
      try {
        const { EmployeeID, FirstName, LastName, Position } = createEmployee;
        await axios.post('http://localhost:4001/api/createEmployee', {
            EmployeeID,
            FirstName,
            LastName,
            Position,
        });
        toast.success('Employee created successfully!');
        //setCreateEmployee({ EmployeeID: "", FirstName: "", LastName: "", Position: "" });
        fetchUsers();
      
      } catch (error) {
        setError(error.message);
        toast.error('Failed to create employee.');
        console.log(error);
        
      } finally {
      
        setIsCreateOpenModel(false);
      }
    }
    

    const handleLogOut = () =>{
        navigate('/'); 
    }
     
    

    if (loading) return <div>Loading...</div>; 
 

    return (
        <> 
            <ToastContainer/>
             <Header onSearch={handleSearch} onCancle={handleCancel} onAddClick={handleAddClick} onLogout = {handleLogOut}/>
            <Lissting employee={employee} onDeleteClick ={handleDeleteClick} onUpdateClick ={handleUpdateClick} />
           
            <DeleteModal
            isOpen ={isDeleteOpenModal}
            onClose ={handleCancel}
            onConfirm ={handleConfirmDelete}
            message ={translate("Are you sure you want to delete this employee?")}
            />
          
            <UpdateModal
            isOpen ={isUpdateOpenModal}
            onClose ={handleCancel}
            setselecteduser = {setselectedUser}
            selecteduser={selectedUser}
            onConfirm = {(id)=>handleConfirmUpdate(id)}
            />
          
            < CreateModal
            isopen = {isCreateOpenModel}
            onClose ={handleCancel}
            setcreateemployee = {setCreateEmployee}
            createemployee = {createEmployee}
            onCreate = {handleCreate}
            />

            <Footer/>
        </>
    );
}

export default Home;
