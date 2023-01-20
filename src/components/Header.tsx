import React from "react";
import { Link } from "react-router-dom";
import argentBankLogo from "../assets/img/argentBankLogo.png";
import { useAppSelector, useAppDispatch } from "../redux/hook";
import { addlogout } from "../redux/UserSlice";

const Header = () => {
  const { isLogged } = useAppSelector((state) => state.user.value.login);
  const { firstName, lastName } = useAppSelector(
    (state) => state.user.value.userInfo
  );

  const dispatch = useAppDispatch();

  const logout = (): void => {
    dispatch(addlogout());
  };

  return (
    <div className="flex justify-between items-center px-4">
      <Link to="/">
        <img className="h-16" src={argentBankLogo} alt="logo" />
      </Link>
      <div className=" font-bold">
        {isLogged ? (
          <div>
            <span className="mr-4">{firstName}</span>
            <button
              onClick={logout}
              className=" bg-red-600 p-2 rounded-md text-white"
            >
              Sign out{" "}
            </button>
          </div>
        ) : (
          <Link to="/auth">Sign In</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
