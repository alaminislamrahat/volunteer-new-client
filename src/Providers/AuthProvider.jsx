import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import useAxiosSecure from "../Hooks/useAxiosSecure";

// import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
// const provider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }


    // sign in 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }


    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }






    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth, currentUser => {

            // setUser(currentUser);
            // setLoading(false);
            // console.log(currentUser);

            // const userEmail = currentUser.email || user.email;
            // const loggedUser = {email : userEmail}

            if(currentUser){
                const {data} = axiosSecure.post('/jwt',{email : currentUser.email});
                console.log(data)
                setUser(currentUser)
            }

            else{
                const {data} = axiosSecure.post('/logout')
                .then(()=>{
                    console.log('logout successfull')
                })
                .catch(err => console.log(err,'login faild'))

                console.log(data)
                setUser(currentUser)
            }
            setLoading(false)

        })

        return () => {
            return unsubsribe();
        }
    }, [])

    const info = {
        user,
        loading,
        createUser,
        signIn,
        updateUserProfile,
        logOut
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;