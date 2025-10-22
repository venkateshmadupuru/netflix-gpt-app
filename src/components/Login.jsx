import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Valid";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userslice";
import { useDispatch } from "react-redux";
import { BANNER_IMAGE, DICEBEAR_AVATAR_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Login = () => {
  const [showSignInForm, setShowSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);

  const handlebuttonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      firstName.current ? firstName.current.value : " ",
      lastName.current ? lastName.current.value : " "
    );
    setErrorMessage(message);
    if (message) return;

    if (!showSignInForm) {
      const avatarURL = `${DICEBEAR_AVATAR_URL}`;
      const fullName = `${firstName.current.value} ${lastName.current.value}`;

      // Sign Up Logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: fullName,
            photoURL: avatarURL,
          })
            .then(() => {
              // Profile updated successfully
              dispatch(
                addUser({
                  uid: user.uid,
                  email: user.email,
                  displayName: fullName,
                  photoURL: avatarURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setShowSignInForm(!showSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="min-h-screen object-cover"
          src={BANNER_IMAGE}
          alt="Netflix Banner Logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black/80 md:w-4/12 text-white p-12 md:my-36 my-19 md:mx-auto mx-10 right-0 left-0 rounded-2xl"
      >
        <h1 className="text-3xl font-bold my-2">
          {showSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!showSignInForm && (
          <>
            <input
              ref={firstName}
              type="name"
              placeholder="First Name"
              className="p-4 my-4 w-full rounded-lg bg-gray-700 focus:outline focus:outline-red-500"
            />
            <input
              ref={lastName}
              type="name"
              placeholder="Last Name"
              className="p-4 my-4 w-full rounded-lg bg-gray-700 focus:outline focus:outline-red-500"
            />
          </>
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-lg bg-gray-700 focus:outline focus:outline-red-500"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" p-4 my-4 w-full rounded-lg bg-gray-700 focus:outline focus:outline-red-500"
        />
        <p className="py-3 text-rose-400">{errorMessage}</p>
        <button
          type="submit"
          className="bg-gradient-to-br from-red-400 via-red-500 to-red-600 text-white text-lg 
                    font-semibold p-3 my-4 w-full rounded-lg cursor-pointer 
                    transform hover:scale-105 transition-transform duration-300"
          onClick={handlebuttonClick}
        >
          {showSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <span
          className="text-white cursor-pointer mb-2 hover:text-red-300"
          onClick={toggleSignInForm}
        >
          {showSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a member? Sign In"}
        </span>
        <Link to="/passwordreset">
          <p className="text-white cursor-pointer my-3 hover:underline">
            Forgot Password
          </p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
