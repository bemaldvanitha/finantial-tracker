import React from "react";
import TransactionForm from "./TransactionForm";
import { useCollection } from '../../hooks/useCollection';
import './Home.css';
import TransactionList from "./TransactionList";
import { useAuthContext } from "../../hooks/useAuthContext";

const Home = () => {
    const { user } = useAuthContext();
    const { documents, error } = useCollection(
        'transactions', ["uid", "==", user.uid], ['createdAt', 'desc']
    )

    return(
        <div className={'container'}>
            <div className={'content'}>
                { error && <p>{ error }</p> }
                { documents && <TransactionList transactions={documents} /> }
            </div>
            <div className={'sidebar'}>
                <TransactionForm uid={user.uid}/>
            </div>
        </div>
    )
}

export default Home;