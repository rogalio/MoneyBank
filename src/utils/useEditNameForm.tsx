import { useState } from "react";
import { useAppDispatch } from "../redux/hook";
import { addUserInfo } from "../redux/UserSlice";

export const useEditNameForm = () => {
  const [isEditName, setIsEditName] = useState(false);
  const firstName: string = "";
  const lastName: string = "";

  const dispatch = useAppDispatch();

  const toogleEditName = () => {
    setIsEditName(!isEditName);
  };

  const handleNameEdit = (
    firstNameUpdated: string,
    lastNameUpdated: string
  ) => {
    dispatch(
      addUserInfo({
        firstName: firstNameUpdated,
        lastName: lastNameUpdated,
        email: "",
      })
    );
  };

  return {
    isEditName,
    toogleEditName,
    firstName,
    handleNameEdit,
    lastName,
  };
};
