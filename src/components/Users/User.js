import React from 'react';
import male from "../../images/man.svg";
import female from "../../images/woman.svg";
import styles from "./User.module.css";

const User = (props) => {
    return (
        <li className={styles.user}>
            <img className={styles['user-item']} src={props.sex === 'Male' ? male : female} alt="sex"/>
            <h3 className={styles.heading}>{props.name}</h3>
            <h3 className={styles.heading}>{props.age} years old</h3>
        </li>
    );
};

export default User;