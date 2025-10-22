import React, { useEffect } from "react";
import "./index.css";
import Body from "./components/Body";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./utils/userslice";
import { useNavigate } from "react-router-dom";
import { auth } from "./utils/firebase";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      // Cleanup the subscription on unmount
      unsubscribe();
    };
  }, []);

  return <Body />;
};

export default App;
