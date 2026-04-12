export const checkValidData = (email, password, username, isSignIn) => {
  const isEmailValid =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

  const trimmedUsername = username?.trim();

  const isUserNameValid = trimmedUsername
    ? /^[a-zA-Z0-9_]{3,30}$/.test(trimmedUsername)
    : false;

  if (!isEmailValid) {
    return "Please enter a valid email address.";
  }

  if (!isPasswordValid) {
    return "Password must be at least 8 characters and include uppercase, lowercase, and a number.";
  }

  if (!isSignIn) {
    if (!trimmedUsername) {
      return "Username is required.";
    }

    if (!isUserNameValid) {
      return "Username must be 3-30 characters and can only contain letters, numbers, and underscores.";
    }
  }

  return null;
};