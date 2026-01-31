export const checkValidData = (email, password, username) => {
    const isEmailValid =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isUserNameValid = /^[a-zA-Z\s]+$/.test(username);

    if (!isEmailValid) {
        return "Please enter a valid email address.";
    }
    if (!isPasswordValid) {
        return "Password is not Valid, it should contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.";
    }
    if (!isUserNameValid) {
        return "Username can only contain letters and spaces.";
    }
    return null;
};
