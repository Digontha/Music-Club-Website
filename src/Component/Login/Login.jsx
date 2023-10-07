import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

import swal from "sweetalert";



const Login = () => {
    
  const {signInUser,user} = useContext(AuthContext)
  console.log(user);

  const location = useLocation()
  const navigate = useNavigate()

  const handleLogin = (e) =>{
         e.preventDefault();
         const email = e.target.email.value     
         const password = e.target.password.value  
         console.log(email, password);

        
         
            signInUser(email, password)
            .then(()=>{
         
             swal("Logged", "You login successfully", "success");
             e.target.reset()
             navigate(location?.state? location.state : "/")
           
            })
            .catch(()=>{
            
             swal("Error", "something went wrong", "error");
            })
          
          
         
       
         
  }


    return (
     <>
        <div className='flex flex-col justify-center items-center mt-10 lg:h-[70vh]'>
            <h1 className="text-2xl font-semibold py-3">Login</h1>
              <div className="card w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <Link className="text-center" to="/register"><p>Haven't any account? <span className="font-bold btn btn-link">register</span></p></Link>
          </div>
        </div>
     
     </>
       
    );
};

export default Login;