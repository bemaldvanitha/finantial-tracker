import React from "react";
import TransactionForm from "./TransactionForm";
import { useAuthContext } from "../../hooks/useAuthContext";

import './Home.css';

const Home = () => {
    const { user } = useAuthContext();

    return(
        <div className={'container'}>
            <div className={'content'}>
                list
            </div>
            <div className={'sidebar'}>
                <TransactionForm uid={user.uid}/>
            </div>
        </div>
    )
}

export default Home;