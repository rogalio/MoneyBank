import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hook";
import { addLoggedStatus, addUserInfo, addToken } from "../redux/UserSlice";

const Auth = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const email: string = watch("email");
  const password: string = watch("password");

  const onSubmit = (): void => {
    axios
      .post("http://localhost:3001/api/v1/user/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          dispatch(
            addUserInfo({
              firstName: response.data.body.user.firstName,
              lastName: response.data.body.user.lastName,
              email: response.data.body.user.email,
            })
          );
          dispatch(addLoggedStatus(true));
          dispatch(addToken(response.data.body.token));
          navigate("/profil");
        }
      });
  };

  return (
    <div className=" bg-violet-900 h-screen relative">
      <div className="bg-white absolute top-10 left-1/3 p-6 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-center font-bold text-2xl pb-4">Sign In</p>
          <div className=" font-semibold">
            <div>
              <p>Username</p>
              <input type="mail" {...register("email", { required: true })} />
              {errors.email && <span>This field is required</span>}
            </div>
            <div>
              <p>Password</p>
              <input
                type="password"
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <button
            className=" bg-green-500 text-white font-semibold p-2 w-full mt-4"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
function dispatch() {
  throw new Error("Function not implemented.");
}
