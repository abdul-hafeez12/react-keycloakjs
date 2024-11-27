import toast from "react-hot-toast";
import keyclok from "./keyclock";
import {createContext, useContext,useEffect,useState } from "react";

// createing auth context

const AuthContext = createContext();

//creating auth provides


export const AuthProvider = ({children}) => {
    const [isAuthenticated,setIsAuthenticated] = useState(true);
    const [KeyCloakObject,setKeCloakObject] = useState(null);

// on component initialization 
  useEffect(() => {
    keyclok.init({
        onLoad:"check-sso",
    }).then((authenticated)=> {
        setIsAuthenticated(authenticated);
        setKeCloakObject(keyclok)
        if(authenticated){
         toast.success("Login success");
        }
    }).catch((error) => {
       toast.error("Login Faild");
       console.log(error);
    });
  },[]);
    return (
     <AuthContext.Provider
     value={{
        isAuthenticated:isAuthenticated,
        keyclok:KeyCloakObject
     }}
     >

      {children}
     </AuthContext.Provider>
    );

};

export const useAuth = () => useContext(AuthContext);