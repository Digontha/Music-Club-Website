import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

import { updateProfile } from "firebase/auth";
import swal from "sweetalert";

const Register = () => {
        
  const {createUser} = useContext(AuthContext)

  const handleRegister = (e) =>{

     e.preventDefault();
     const name = e.target.name.value
     const image = e.target.image.value
     const email = e.target.email.value
     const password = e.target.password.value
     console.log(name ,image, email, password);

    if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`])[A-Za-z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`]{7,}$/.test(password)){
     
      swal("error", "password must be at least 6 characters one capital letter and one special letter", "error");
    }else{
      createUser(email, password,name, image)
      .then(res=>{
       console.log(res.user);
       swal("success", "Your account create successfully", "success");
       updateProfile(res.user, { displayName: name, photoURL: image })
                    .then(()=> {
                      
                    })
          e.target.reset()
      })
      .catch(()=>{
     
       swal("error", "something went wrong", "error");
      })
    }

   
     
     
  }


    return (
      <>
        <div>
            <div className='flex flex-col justify-center items-center mt-10 lg:h-[70vh]'>
            <h1 className="text-2xl font-semibold py-3">Register</h1>
              <div className="card w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input type="text" placeholder="Image URL" name="image" className="input input-bordered"  />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <Link className="text-center" to="/login"><p>Have a account? <span className="font-bold btn btn-link">login</span></p></Link>
          </div>
        </div>
        </div>
   
      </>
        
    );
};

export default Register;