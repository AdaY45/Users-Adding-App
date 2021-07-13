import React, { useState } from 'react';
import styles from "./UserForm.module.css";

const UserForm = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    };

    const sexChangeHandler = (event) => {
        console.log(event.target.value + typeof(event.target.value));
        setSex(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const usersData = {
            id: Math.random().toString(),
            name: name,
            age: age,
            sex: sex
        }
        console.log(usersData);

        props.onSaveUsersData(usersData);
        
        setName('');
        setAge('');
        setSex('');
    }

    return (
        <div className={styles['form-container']}>
            <form onSubmit={submitHandler}>
                <div className={styles['form-control']}>
                    <label>Username</label>
                    <input type="text" onChange={nameChangeHandler}/>
                </div>
                <div className={styles['form-control']}>
                    <label>Age (Years)</label>
                    <input type="number" onChange={ageChangeHandler}/>
                </div>
                <div className={styles['form-control']}>
                    <label>Sex</label>
                    <select className={styles.sex} onChange={sexChangeHandler}>
                        <option value="nonValid" hidden>Choose an option</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <button type="submit" className={styles.button}>Add User</button>
            </form>
        </div>
    );
};

export default UserForm;