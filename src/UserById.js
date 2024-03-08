import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UserById = ()=>{
    const { id } = useParams();
    const [userById,setUserById] = useState(null);
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        
        getuserById();

    }, [])

    useEffect(() => {
        setInput();
    }, [userById]);

    const hadleName = (event) => {
        setName(event.target.value);
    }
    const hadleEmail = (event) => {
        setEmail(event.target.value);
    }

    const getuserById = async () => {
        
            const response = await axios.get(`http://localhost/user-pos/index/${id}`)
            setUserById(response.data);    
    }

    const setInput = () => {
        if (userById) {
            setName(userById.name); 
            setEmail(userById.email);
           
        }
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        

     const  input = {
         "name":name,
         "email":email,
         "id":id
              
            
        };
        const response = await axios.put(`http://localhost/user-pos/index/${id}`,input);
        if (response.status === 200) {
            alert("Success Upadte User");
       
            navigate("/");

        }
        
    }

    const deleteUser = async()=>{
        const response = await axios.delete(`http://localhost/user-pos/index/${id}`);
        if (response.status === 200) {
            alert("Success Delete Employee");
            navigate("/");
           
           

        }
    }
    


    return(
        <>
        
      <nav class="navbar navbar-expand-lg bg-body-tertiary mb-5 sticky-top" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold" href="#">App-Technology</a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>


          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-3">
              <li class="nav-item">
                <Link class="nav-link" to={"/"} > Home </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/user-save"} > User Manage </Link>
              </li>
              

            </ul>
          </div>
        </div>
      </nav>

      <div className="text-center my-4">
                <h2 className="k1">User Details</h2>
            </div>

            <div class="card mx-5 mb-5 border border-secondary rounded-3">
                <h5 class="card-header card-header text-center fw-bold bg-secondary text-white"> Users</h5>
                <div class="card-body">
                    <form onSubmit={handleSubmit}>
                        <label className="form-label">
                             Name
                        </label>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" onChange={hadleName} value={name} placeholder=" Name" required />
                        </div>
                       
                        <label className="form-label">
                            Email
                        </label>
                        <div className="form-group mb-3">
                            <input type="email" className="form-control" onChange={hadleEmail} value={email} placeholder="Email" required />
                           
                        </div>

                        <div className="card-body d-flex justify-content-between flex-column">
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>

                        
                    </form>

                    <div className="card-body d-flex justify-content-between flex-column">
                        <button type="button" className="btn btn-danger mt-3" onClick={deleteUser}>Delete</button>
                    </div>

                </div>
            </div>

      <div className="container-fluid">
                <div className='d2 row'>
                    <div className=' text-center'>
                        <img src='/image/logo.png' alt="Logo" width="200" height="100" class="d-inline-block align-text-top" />
                    </div>
                </div>

      <div className='d3 row'>
                    <div className=' text-center'>
                        <p className='mt-2'>Copyright © 2024 - All Rights Reserved. Concept, Design & Development By Hiran</p>
                    </div>
                </div>
           

                </div>
        
        </>
    )
}

export default UserById;