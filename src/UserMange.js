import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";



const UserMange = ()=>{
    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        const response = await axios.post("http://localhost/user-pos/index",inputs);
       
        if (response.status === 200) {
            alert("Success Add Empolyee");
       
            window.location.reload();

        }
        console.log(inputs);
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
                <h2 className="k1">Manage Users</h2>
            </div>

            <div class="card mx-5 mb-5 border border-secondary rounded-3">
                <h5 class="card-header card-header text-center fw-bold bg-secondary text-white">Add Users</h5>
                <div class="card-body">
                    <form onSubmit={handleSubmit}>
                        <label className="form-label">
                             Name
                        </label>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" onChange={handleChange} name="name" placeholder=" Name" required />
                        </div>
                       
                        <label className="form-label">
                            Email
                        </label>
                        <div className="form-group mb-3">
                            <input type="email" className="form-control" onChange={handleChange} name="email" placeholder="Email" required />
                           
                        </div>

                       

                        <button type="submit" className="btn btn-success">Save User</button>
                    </form>

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

export default UserMange;