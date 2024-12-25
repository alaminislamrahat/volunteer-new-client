import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = async () => {
        setLoading(true);
        await signOut(auth);
        // Clear JWT token on logout
        await axios.post('http://localhost:5000/logout', {}, { withCredentials: true });
        setUser(null);
        setLoading(false);
    };

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setLoading(true);  // Always set loading to true until we know the user state

            if (currentUser) {
                try {
                    const { data } = await axios.post('http://localhost:5000/jwt', { email: currentUser.email }, { withCredentials: true });
                    console.log(data); // JWT received
                    // Set the user along with the JWT token in your state or store
                    setUser({ ...currentUser, token: data.token }); // Store JWT token
                } catch (error) {
                    console.error('Error fetching JWT:', error);
                    setUser(null); // Handle the error, reset user state
                }
            } else {
                // If no user, logout the user on the server side
                await axios.post('http://localhost:5000/logout', {}, { withCredentials: true });
                setUser(null); // Ensure the user state is reset
            }
            setLoading(false); // Set loading to false after process completion
        });

        // Cleanup function to unsubscribe from the auth state change listener
        return () => unsubscribe();
    }, []);

    const info = {
        user,
        loading,
        createUser,
        signIn,
        updateUserProfile,
        logOut,
    };

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
