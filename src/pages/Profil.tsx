import React from "react";
import { useAppSelector } from "../redux/hook";
import { Navigate } from "react-router-dom";
import { useEditNameForm } from "../utils/useEditNameForm";
import FormEditUserInfo from "../components/FormEditUserInfo";

const Profil = () => {
  const { firstName, lastName } = useAppSelector(
    (state) => state.user.value.userInfo
  );

  const { isLogged } = useAppSelector((state) => state.user.value.login);
  const { isEditName, toogleEditName } = useEditNameForm();

  if (!isLogged) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col bg-purple-900 h-screen">
      <div className=" mx-auto  text-white  text-center  ">
        <h1 className="font-bold mt-4 text-2xl mb-4">
          Welcome back {firstName} {lastName} !
        </h1>
        <button
          onClick={toogleEditName}
          className=" bg-green-600 p-2 font-semibold"
        >
          Edit Name
        </button>
        {isEditName && <FormEditUserInfo toogleEditName={toogleEditName} />}
      </div>

      <div className="m-10 bg-white">
        <div className=" p-10 flex justify-between items-center">
          <div className=" text-lg font-medium flex-col flex gap-2">
            <p>Argent Bank Checking (x8349)</p>
            <p className=" text-4xl font-bold">$2,082.79</p>
            <p>Available Balance</p>
          </div>
          <button className="bg-green-600 text-white h-1/2 p-4 text-lg font-bold">
            view transactions
          </button>
        </div>
      </div>

      <div className="m-10 bg-white">
        <div className=" p-10 flex justify-between items-center">
          <div className=" text-lg font-medium flex-col flex gap-2">
            <p>Argent Bank Savings (x6712)</p>
            <p className=" text-4xl font-bold">$10,928.42</p>
            <p>Available Balance</p>
          </div>
          <button className="bg-green-600 text-white h-1/2 p-4 text-lg font-bold">
            view transactions
          </button>
        </div>
      </div>

      <div className="m-10 bg-white">
        <div className=" p-10 flex justify-between items-center">
          <div className=" text-lg font-medium flex-col flex gap-2">
            <p>Argent Bank Credit Card (x8349)</p>
            <p className=" text-4xl font-bold">$184.30</p>
            <p>Current Balance</p>
          </div>
          <button className="bg-green-600 text-white h-1/2 p-4 text-lg font-bold">
            view transactions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profil;
