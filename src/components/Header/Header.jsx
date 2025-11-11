import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SUPPORTED_LANGUAGES } from "../../utils/constants";
import { toggleGptSearchView } from "../../utils/gptSlice";
import { changeLanguage } from "../../utils/configSlice";
import { useState } from "react";
import { SiNetflix } from "react-icons/si";
const Header = () => {
  const user = useSelector((state) => state.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        alert("Failed to sign out. Please try again.");
      });
  };

  const handleGptSearchView = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute py-2 px-8 bg-gradient-to-b from-black z-10 w-full flex items-center justify-between">
      <SiNetflix className="text-4xl sm:text-5xl text-red-600" />
      {user && (
        <div className="flex items-center justify-between">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-800 text-white rounded-lg cursor-pointer"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-gradient-to-br from-rose-600 via-red-600 to-pink-700 
            transform hover:scale-105 transition-all duration-300
             text-white font-semibold py-2 px-5 rounded-lg mx-2 cursor-pointer"
            onClick={handleGptSearchView}
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>

          <div
            className="relative"
            tabIndex={0}
            onFocus={() => setDropdownOpen(true)}
            onBlur={() => setDropdownOpen(false)}
          >
            <img
              src={user.photoURL}
              alt="user-avatar"
              className="w-10 h-10 rounded-full object-cover cursor-pointer"
            />

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-neutral-700/50 text-white rounded-lg shadow-xl text-sm z-50">
                <div className="px-4 py-3 border-b border-white">
                  <p className="font-semibold truncate">
                    {user?.displayName || "User"}
                  </p>
                  <p className="text-white text-xs truncate">{user?.email}</p>
                </div>
                <button
                  className="w-full text-left px-4 py-2 text-white font-semibold transform
                   hover:bg-red-600 transition-transform duration-300 cursor-pointer"
                  onMouseDown={handleSignOut}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
