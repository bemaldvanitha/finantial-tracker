import React from "react";
import styles from './Home.css';
import { useFirestore } from "../../hooks/useFirebase";

const TransactionList = ({ transactions }) => {
    const { deleteDocument } = useFirestore('transactions')

    return (
        <ul className={'transactions'}>
            {transactions.map((transaction) => (
                <li key={transaction.id}>
                    <p className={styles.name}>{transaction.name}</p>
                    <p className={styles.amount}>${transaction.amount}</p>
                    <button onClick={() => deleteDocument(transaction.id)}>x</button>
                </li>
            ))}
        </ul>
    )
}

export default TransactionList;