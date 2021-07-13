import styles from "./ModalWindow.module.css";
import "./ModalWindow.module.css"

const ModalWindow = props => {

    return (
        <div className={styles.modal}>
            <div className={styles.window}>
                <h2 className={styles.heading}>Invalid input</h2>
                <p className={styles.message}>{props.message}</p>
                <button className={styles.close} onClick={props.invalidInput}>Okay</button>
            </div>
        </div>
    );
};

export default ModalWindow;