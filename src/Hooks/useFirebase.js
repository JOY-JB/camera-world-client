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
    const [admin, setAdmin] = useState(false);

    // user register function
    const registerUser = (email, password, displayName, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                // save user
                saveUser(displayName, email);

                const newUser = { email, displayName }
                setUser(newUser);
                history.push("/");
                setError("");

                updateProfile(auth.currentUser, {
                    displayName
                }).then((user) => {

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

    // user login function
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

    // user observer
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

    // user logout function
    const logoutUser = () => {
        setLoading(true);
        signOut(auth).then(() => {
            setError("");
        }).catch((error) => {
        })
            .finally(() => setLoading(false));
    }


    //save user to database
    const saveUser = (displayName, email) => {
        const user = { displayName, email };

        fetch("http://localhost:5000/adduser", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
    }

    //check for admin
    useEffect(() => {
        fetch(`http://localhost:5000/user/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [user.email])

    return {
        user,
        admin,
        loading,
        error,
        registerUser,
        loginUser,
        logoutUser,

    }
}

export default useFirebase;
