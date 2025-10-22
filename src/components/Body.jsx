import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import PasswordReset from "./PasswordReset";

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/passwordreset" element={<PasswordReset />} />
      <Route path="/browse" element={<Browse />} />
    </Routes>
  );
};

export default Body;
