// import React, { createContext, useEffect, useState } from 'react';
// import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import app from "../firebase/firebase.config";

// export const AuthContext = createContext();
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({children}) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const apiUrl = import.meta.env.VITE_API_URL;

//     // Create an account
//     const createUser = async (email, password) => {
//         setLoading(true);
//         try {
//             return await createUserWithEmailAndPassword(auth, email, password);
//         } catch (error) {
//             console.error("Error creating user:", error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Sign up with Gmail
//     const signUpWithGmail = async () => {
//         setLoading(true);
//         try {
//             return await signInWithPopup(auth, googleProvider);
//         } catch (error) {
//             console.error("Error with Gmail sign up:", error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Login using email & password
//     const login = async (email, password) => {
//         setLoading(true);
//         try {
//             return await signInWithEmailAndPassword(auth, email, password);
//         } catch (error) {
//             console.error("Login error:", error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Logout
//     const logOut = async () => {
//         try {
//             return await signOut(auth);
//         } catch (error) {
//             console.error("Logout error:", error.message);
//         }
//     };

//     // Update user profile
//     const updateUserProfile = async (name, photoURL) => {
//         try {
//             return await updateProfile(auth.currentUser, {
//                 displayName: name, 
//                 photoURL: photoURL
//             });
//         } catch (error) {
//             console.error("Error updating profile:", error.message);
//         }
//     };

//     // Check signed-in user
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//             const userInfo ={email: currentUser.email}
//             axios.post(`${apiUrl}/jwt`, userInfo)
//               .then( (response) => {
//                 // console.log(response.data.token);
//                 if(response.data.token){
//                     localStorage.setItem("access-token", response.data.token)
//                 }
//               })
//             setLoading(false);
//         });

//         return () => unsubscribe();
//     }, []);

//     const authInfo = {
//         user,
//         createUser,
//         signUpWithGmail,
//         login,
//         logOut,
//         updateUserProfile,
//         loading,
//     };

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;



/* eslint-disable react/prop-types */
// import React from 'react';
// import { createContext } from 'react';
// import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import app from '../firebase/firebase.config';
// import axios from 'axios';

// export const AuthContext = createContext();
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();
// const apiUrl = import.meta.env.VITE_API_URL;


// const AuthProvider = ({children}) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);
//     }

//     const signUpWithGmail = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider);
//     }

//     const login = (email, password) =>{
//         return signInWithEmailAndPassword(auth, email, password);
//     }

//     const logOut = () =>{
//         localStorage.removeItem('access-token');
//         return signOut(auth);
//     }

//     // update your profile
//     const updateUserProfile = (name, photoURL) => {
//       return  updateProfile(auth.currentUser, {
//             displayName: name, photoURL: photoURL
//           })
//     }

//     useEffect( () =>{
//         const unsubscribe = onAuthStateChanged(auth, currentUser =>{
//             // console.log(currentUser);
//             setUser(currentUser);
//             if(currentUser){
//                 const userInfo ={email: currentUser.email}
//                 axios.post(`${apiUrl}/jwt`, userInfo)
//                   .then( (response) => {
//                     // console.log(response.data.token);
//                     if(response.data.token){
//                         localStorage.setItem("access-token", response.data.token)
//                     }
//                   })
//             } else{
//                localStorage.removeItem("access-token")
//             }
           
//             setLoading(false);
//         });

//         return () =>{
//             return unsubscribe();
//         }
//     }, [])

//     const authInfo = {
//         user, 
//         loading,
//         createUser, 
//         login, 
//         logOut,
//         signUpWithGmail,
//         updateUserProfile
//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;


import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from 'axios';  // Added axios import
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiUrl = import.meta.env.VITE_API_URL;  // Ensure this is defined in your .env file

    // Create an account
    const createUser = async (email, password) => {
        setLoading(true);
        try {
            return await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Error creating user:", error.message);
        } finally {
            setLoading(false);
        }
    };

    // Sign up with Gmail
    const signUpWithGmail = async () => {
        setLoading(true);
        try {
            return await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error("Error with Gmail sign up:", error.message);
        } finally {
            setLoading(false);
        }
    };

    // Login using email & password
    const login = async (email, password) => {
        setLoading(true);
        try {
            return await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Login error:", error.message);
        } finally {
            setLoading(false);
        }
    };

    // Logout
    const logOut = async () => {
        try {
            localStorage.removeItem('access-token');  // Clean up localStorage
            return await signOut(auth);
        } catch (error) {
            console.error("Logout error:", error.message);
        }
    };

    // Update user profile
    const updateUserProfile = async (name, photoURL) => {
        if (auth.currentUser) {  // Check if user is authenticated
            try {
                return await updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoURL,
                });
            } catch (error) {
                console.error("Error updating profile:", error.message);
            }
        } else {
            console.error("No authenticated user found.");
        }
    };

    // Check signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axios.post(`${apiUrl}/jwt`, userInfo)
                    .then((response) => {
                        if (response.data.token) {
                            localStorage.setItem("access-token", response.data.token);
                        }
                    })
                    .catch((error) => console.error('Error fetching token:', error.message))
                    .finally(() => setLoading(false));
            } else {
                localStorage.removeItem("access-token");
                setLoading(false);
            }
        });

        return () => unsubscribe();  // Cleanup the listener
    }, []);

    const authInfo = {
        user,
        createUser,
        signUpWithGmail,
        login,
        logOut,
        updateUserProfile,
        loading,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
