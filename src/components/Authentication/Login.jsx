import React, { useRef, useState } from "react";
import Header from "../Header/Header";
import { checkValidData } from "../../utils/Valid";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { addUser } from "../../utils/userslice";
import { useDispatch } from "react-redux";
import { BANNER_IMAGE, DICEBEAR_AVATAR_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import { BiLock, BiUser } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [showSignInForm, setShowSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  const handleButtonClick = () => {
    if (
      !showSignInForm &&
      password.current.value !== confirmPassword.current.value
    ) {
      setErrorMessage("Passwords do not match");
      return;
    }
    const message = checkValidData(
      email.current.value,
      password.current.value,
      userName.current ? userName.current.value : " ",
    );
    setErrorMessage(message);
    if (message) return;

    if (!showSignInForm) {
      const seed = encodeURIComponent(
        userName.current.value + email.current.value,
      );
      const avatarURL = `${DICEBEAR_AVATAR_URL}${seed}`;
      const fullName = userName.current.value;

      // Sign Up Logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: fullName,
            photoURL: avatarURL,
          })
            .then(async () => {
              // Profile updated successfully
              await user.reload();
              const updatedUser = auth.currentUser;
              dispatch(
                addUser({
                  uid: updatedUser.uid,
                  email: updatedUser.email,
                  displayName: updatedUser.displayName,
                  photoURL: updatedUser.photoURL,
                }),
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
        password.current.value,
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
        className="absolute bg-black/80 md:w-4/12 text-white p-12 my-20 m-5 md:mx-auto mx-10 right-0 left-0 rounded-2xl"
      >
        <h1 className="text-3xl font-bold my-2">
          {showSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!showSignInForm && (
          <div className="relative my-4">
            <BiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              ref={userName}
              type="text"
              placeholder="User Name"
              className="p-4 pl-12 w-full rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-rose-500"
            />
          </div>
        )}

        <div className="relative my-4">
          <CiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="p-4 pl-12 w-full rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-rose-500"
          />
        </div>

        <div className="relative my-4">
          <BiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            ref={password}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="p-4 pl-12 w-full rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-rose-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          >
            {showPassword ? (
              <FiEyeOff className="w-5 h-5" />
            ) : (
              <FiEye className="w-5 h-5" />
            )}
          </button>
        </div>

        {!showSignInForm && (
          <div className="relative my-4">
            <BiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              ref={confirmPassword}
              type="password"
              placeholder="Confirm Password"
              className="p-4 pl-12 w-full rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-rose-500"
            />
          </div>
        )}

        <p className="py-3 text-rose-400">{errorMessage}</p>

        <button
          type="submit"
          className="bg-gradient-to-br from-red-400 via-red-500 to-red-600 text-white text-lg 
              font-semibold p-3 my-4 w-full rounded-lg cursor-pointer 
              transform hover:scale-105 transition-transform duration-300"
          onClick={handleButtonClick}
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
          {showSignInForm && (
            <p className="text-white cursor-pointer my-3 hover:underline">
              Forgot Password
            </p>
          )}
        </Link>
      </form>
    </div>
  );
};

export default Login;
