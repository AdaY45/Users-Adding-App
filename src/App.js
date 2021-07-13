import React, { useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import styles from "./App.module.css";

function App() {
  const [users, setUsers] = useState([]);

  const saveUserHandler = (user) => {
    setUsers((prevState) => {
      return [user, ...prevState];
    });
  };

  return (
    <div className={styles.container}>
      <UserForm onSaveUsersData={saveUserHandler} />
      {users.length > 0 && <Users users={users} />}
    </div>
  );
}

export default App;
