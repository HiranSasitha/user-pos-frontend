import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    const[user,setUser] = useState(null);
    useEffect(() => {
        getAllUsers();
      }, [])

    const getAllUsers = async()=>{
        const response = await axios.get("http://localhost/user-pos/index");
        console.log(response);
        console.log(response.data);
        setUser(response.data);
    }


  return (
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

      <table className="custom-table table table-success table-striped  mb-5 ">
        <thead>
          <tr>
            <th>Name</th>
            
            <th>Email</th>
            <th>Details</th>
            
          </tr>
        </thead>
        <tbody>
          {user && user.map((us) =>
            <tr>
              <td>{us.name}</td>
              <td>{us.email}</td>
             
               
              <td>
                <Link type='button' class="btn btn-outline-primary" to={`/user/${us.id}`} >
                  Details
                </Link>
              </td>

            </tr>


          )}

        </tbody>
      </table>

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

export default Home;