import { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import UsersList from "./components/UsersList";
import UsersForm from "./components/UsersForm";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((res) => setUsersList(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((res) => setUsersList(res.data));
  };

  const selectUser = (user) => {
    setUserSelected(user);
  };

  console.log(userSelected);

  return (
    <div className="App">
      <UsersForm
        getUsers={getUsers}
        userSelected={userSelected}
        selectUser={selectUser}
      />
      <UsersList
        usersList={usersList}
        selectUser={selectUser}
        getUsers={getUsers}
      />
    </div>
  );
}

export default App;
