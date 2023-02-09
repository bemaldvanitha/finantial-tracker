import React from "react";
import TransactionForm from "./TransactionForm";
import './Home.css';

const Home = () => {
    return(
        <div className={'container'}>
            <div className={'content'}>
                list
            </div>
            <div className={'sidebar'}>
                <TransactionForm/>
            </div>
        </div>
    )
}

export default Home;