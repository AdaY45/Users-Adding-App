import React, { useState } from 'react';
import ModalWindow from "../ModalWindow/ModalWindow";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [message, setMessage] = useState('');

    const checkIsValid = val => {
        if(val.trim().length > 0) {
            setIsValid(true);
        }
    };

    const nameChangeHandler = (event) => {
        checkIsValid(event.target.value);
        setName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        checkIsValid(event.target.value);
        setAge(event.target.value);
    };

    const sexChangeHandler = (event) => {
        checkIsValid(event.target.value);
        setSex(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(name + " ," + age + " ," + sex);

        if(+age < 0) {
            setIsValid(false);
            setMessage('Please enter a valid age (> 0).');
            return;
        } else if(name.trim().length === 0 | age.trim().length === 0 | sex.trim().length === 0) {
            setIsValid(false);
            setMessage('Please enter a valid name and age (non-empty values).');
            return;
        }

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

    const invalidInputHandler = () => {
        setIsValid(true);
        setMessage('');
    };

    return (
        <div className={styles['form-container']}>
            {!isValid && <ModalWindow invalidInput={invalidInputHandler} message={message}/>}
            <form onSubmit={submitHandler}>
                <div className={styles['form-control']}>
                    <label htmlFor="username">Username</label>
                    <input id="username" value={name} type="text" onChange={nameChangeHandler}/>
                </div>
                <div className={styles['form-control']}>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" value={age} type="number" onChange={ageChangeHandler}/>
                </div>
                <div className={styles['form-control']}>
                    <label htmlFor="sex">Sex</label>
                    <select id="sex" className={styles.sex} onChange={sexChangeHandler}>
                        <option value="Male" selected disabled hidden>Choose an option</option>
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