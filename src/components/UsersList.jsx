import React from "react";
import axios from "axios";

const UsersList = ({ usersList, selectUser, getUser }) => {
  const usersListOrd = usersList.sort((a, b) =>
    a.first_name.localeCompare(b.first_name)
  );

  const deleteUser = (user) => {
    axios
      .delete(`https://users-crud.academlo.tech/users/${user.id}/`)
      .then(() => getUser());
  };

  return (
    <div>
      <ul className="users-list">
        <h2>Users List</h2>
        {usersList.map((user) => (
          <li key={user.id}>
            <ul>
              <li>
                <b>Name: </b>
                {user.first_name} {user.last_name}
              </li>
              <li>
                <b>Email: </b>
                {user.email}
              </li>

              <li>
                <b>Birthday: </b>
                {user.birthday}
              </li>
              <div className="buttons">
                <button onClick={() => selectUser(user)}>select</button>
                <button onClick={() => deleteUser(user)}>delete</button>
              </div>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
