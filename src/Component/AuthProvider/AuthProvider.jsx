import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

        const [user,setUser] = useState()
        console.log(user);
        const [loading,setLoading] = useState(true)
    const auth = getAuth(app)

    const createUser=(email,password,name,image)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password,name,image)
    }
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
               setUser(currentUser)
               setLoading(false)
        })
        return()=>{
            unSubscribe()
        }
    })

    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }


     const authInfo = {
          createUser,
          signInUser,
          user,
          logOut,
          loading
     }

    return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;