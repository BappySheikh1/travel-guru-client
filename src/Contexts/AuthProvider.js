import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext=createContext() 
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState({})

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const userUpdateProfile=(name)=>{
    return updateProfile(auth.currentUser,{displayName:name})
    }

    const authInfo={user,createUser,loginUser,userUpdateProfile}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;