import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(user);
  


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const update = (name , image) => {
    return updateProfile(auth.currentUser,{
      displayName: name, photoURL: image
    })
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      setUser(result);
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const AuthInfo = {
    user,
    loading,
    login,
    logOut,
    setLoading,
    createUser,
    update
  };

  return <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
