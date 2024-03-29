import { useState, useEffect } from 'react';
import { useFirestore } from '../../hooks/useFirebase';

const TransactionForm = ({ uid }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const { addDocument, response } = useFirestore('transactions');

    useEffect(() => {
        if(response.success){
            setAmount('');
            setName('');
        }
    },[response.success]);

    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument({
            uid: uid,
            name,
            amount,
        })
    }

    return (
        <>
            <h3>Add a Transaction</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Transaction name:</span>
                    <input
                        type="text"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </label>
                <label>
                    <span>Amount ($):</span>
                    <input
                        type="number"
                        required
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                    />
                </label>
                <button>Add Transaction</button>
            </form>
        </>
    )
}

export default TransactionForm;