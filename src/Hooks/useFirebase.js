import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

// initialize firebase 
initializeAuthentication();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const registerUser = (email, password, displayName, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const newUser = { email, displayName }
                setUser(newUser);
                setUser(user);
                history.push("/");
                setError("");

                updateProfile(auth.currentUser, {
                    displayName
                }).then(() => {

                }).catch((error) => {

                });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => setLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                const destination = location?.state?.from || "/"
                history.push(destination);
                setError("");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode);
            })
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
        });
    }, [])

    const logoutUser = () => {
        setLoading(true);
        signOut(auth).then(() => {
            setError("");
        }).catch((error) => {
        })
            .finally(() => setLoading(false));
    }


    return {
        user,
        loading,
        error,
        registerUser,
        loginUser,
        logoutUser,

    }
}

export default useFirebase;
