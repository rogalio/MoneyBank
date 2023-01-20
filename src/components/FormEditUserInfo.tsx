import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAppSelector } from "../redux/hook";
import { useEditNameForm } from "../utils/useEditNameForm";

const FormEditUserInfo = ({ toogleEditName }: any) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { token } = useAppSelector((state) => state.user.value.login);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const { handleNameEdit } = useEditNameForm();

  const firstNameUpdated: string = watch("firstNameUpdated");
  const lastNameUpdated: string = watch("lastNameUpdated");

  const onSubmit = (): void => {
    axios
      .put("http://localhost:3001/api/v1/user/profile", {
        firstName: firstNameUpdated,
        lastName: lastNameUpdated,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          handleNameEdit(firstNameUpdated, lastNameUpdated);
          toogleEditName();
        }
      });
  };

  return (
    <form
      className="flex flex-col gap-2 my-2 bg-black text-black"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        {...register("firstNameUpdated", { required: true })}
      />
      {errors.firstNameUpdated && <span>This field is required</span>}
      <input type="text" {...register("lastNameUpdated", { required: true })} />
      {errors.lastNameUpdated && <span>This field is required</span>}
      <button className="text-white" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormEditUserInfo;
