import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from './../Pages/Login/Firebase/firebase.init';

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        })
        .finally(() => setIsLoading(false));
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {})
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false))
    }

    // Observe user state change
    useEffect( () => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
    }, [])

    return {
        user,
        signInWithGoogle,
        logOut, 
        isLoading
    }
}

export default useFirebase;