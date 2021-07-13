import React from "react";
import User from "./User";

import styles from "./Users.module.css";

const Users = (props) => {
    return (
        <ul className={styles.users}>
            {props.users.map(el => (
                <User 
                    key={el.id}
                    name={el.name}
                    age={el.age}
                    sex={el.sex}
                />
            ))}
        </ul>
    );
};

export default Users;