import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/Firebase.config';
import useAxiouPublic from '../hooks/useAxiouPublic';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const axiosPublic = useAxiouPublic()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google sign in
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // sign Out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // update user profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }



    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current user --->', currentUser)
            // token store and remove
            if(currentUser){
               const userInfo = { email: currentUser.email }
               axiosPublic.post('/jwt', userInfo)
               .then(res => {
                if(res.data.token){
                    localStorage.setItem('access-token', res.data.token)
                    setUser(currentUser)
                    setLoading(false)
                }
               })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;