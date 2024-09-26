import React, { useRef, useState } from "react";
import { LOGIN_PAGE_BG } from "../utils/constants";
import Validate from "../utils/Validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    const message = Validate(email.current.value, password.current.value);
    setErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <div className="absolute">
        <img className="" src={LOGIN_PAGE_BG}></img>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" bg-black w-1/4 absolute my-36 mx-auto right-0 left-0 text-white h-3/4 bg-opacity-80"
      >
        <h1 className="mt-12 mb-6 mx-10 font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className=" bg-gray-300
        p-2  w-3/4 mx-10 my-2"
            type="text"
            placeholder="Full Name"
          ></input>
        )}
        <input
          ref={email}
          className=" bg-gray-300 p-2  w-3/4 mx-10 my-2 "
          type="text"
          placeholder="email address"
        ></input>
        <input
          ref={password}
          className=" bg-gray-300
        p-2  w-3/4 mx-10 my-2"
          type="text"
          placeholder="Password"
        ></input>
        <p className="px-10 text-red-700 font-bold">{errorMessage}</p>

        <button
          onClick={handleClick}
          className="p-4 mx-10 mt-10 w-3/4 bg-red-700 mb-5 rounded-md"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="mx-10 ">
          {isSignIn
            ? "new to UberEats? Sign up now"
            : "already a user? Sign in Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
