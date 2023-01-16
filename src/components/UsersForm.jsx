import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const UsersForm = ({ getUsers, userSelected, selectUser }) => {
  const { handleSubmit, register, reset } = useForm();

  const emptyUser = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
  };

  useEffect(() => {
    if (userSelected) {
      reset(userSelected);
    } else {
      reset(emptyUser);
    }
  }, [userSelected]);

  const upload = (data) => {
    console.log(data);
    if (userSelected) {
      axios
        .put(`https://users-crud.academlo.tech/users/${userSelected.id}/`, data)
        .then(() => {
          getUsers();
          selectUser(null);
        });
    } else {
      axios.post(`https://users-crud.academlo.tech/users/`, data).then(() => {
        getUsers();
        reset(emptyUser);
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(upload)}>
      <h2>New User</h2>
      <div className="input-container">
        <div className="input-container-box1">
          <div className="box1">
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              id="first_name"
              placeholder="first name"
              {...register("first_name")}
            />
          </div>
          <div className="box2">
            <input
              type="text"
              id="last_name"
              placeholder="last name"
              {...register("last_name")}
            />
          </div>
        </div>

        <div>
          <i className="fa-solid fa-envelope"></i>
          <input
            type="text"
            id="email"
            placeholder="email"
            {...register("email")}
          />
        </div>
        <div>
          <i className="fa-solid fa-lock"></i>
          <input
            type="password"
            id="password"
            placeholder="password"
            {...register("password")}
          />
        </div>
        <div>
          <i className="fa-solid fa-cake-candles"></i>
          <input type="date" id="birthday" {...register("birthday")} />
        </div>
        <button className="btn-upload">upload</button>
      </div>
    </form>
  );
};

export default UsersForm;
