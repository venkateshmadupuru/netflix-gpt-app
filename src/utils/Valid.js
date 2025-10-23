export const checkValidData = (email, password, firstname, lastname) => {
    const isEmailValid =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isFirstNameValid = /^[a-zA-Z\s]+$/.test(firstname);
    const isLastNameValid = /^[a-zA-Z\s]+$/.test(lastname);

    if (!isEmailValid) {
        return "Please enter a valid email address.";
    }
    if (!isPasswordValid) {
        return "Password is not Valid, it should contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.";
    }
    if (!isFirstNameValid) {
        return "First name can only contain letters and spaces.";
    }
    if (!isLastNameValid) {
        return "Last name can only contain letters and spaces.";
    }
    return null;
};
