import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState(null);

  // Fetch user data from Firestore
  const fetchUserData = async (userId) => {
    if (!userId) return;

    try {
      const docRef = doc(db, "Users", userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log("User details: ", docSnap.data());
      } else {
        console.log("No user data found in Database.");
        setUserDetails(null); // Clear user details if no data is found
      }
    } catch (error) {
      console.error("Error fetching user data: ", error);
      setUserDetails(null); // Clear user details on error
    } finally {
      setLoading(false); // Ensure loading is set to false after fetching
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchUserData(currentUser.uid); // Fetch user data only if user is logged in
      } else {
        setUser(null); // Clear user state if no user is logged in
        setUserDetails(null); // Clear user details
        setLoading(false); // Set loading to false if no user is logged in
      }
    });

    return unsubscribe; // Cleanup subscription on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, userDetails }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
