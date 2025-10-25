import { Routes, Route } from "react-router-dom";
import Login from "@/components/Authentication/Login";
import Browse from "../Browse/Browse";
import PasswordReset from "../Authentication/PasswordReset";

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
