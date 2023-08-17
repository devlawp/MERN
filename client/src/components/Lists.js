import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'boxicons';
function List() {
    const [loading, setLoading] = useState(false);
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        fetchHistory();
    }, []);
    const fetchHistory = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            setLoading(true);
            
            const response = await axios.post('/transactions/get-transaction', { userid: user._id });
            setTransactions(response.data); 
            
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }
    return (
        <div className="flex flex-col py-6 gap-3 m-5">
            <h1 className="pt-3 font-bold text-2xl">Expense History</h1>
            {loading ? (
                <p>Loading...</p>   
            ) : (
                transactions.map((transaction, index) => (
                    <Transaction key={index} transaction={transaction} />
                ))
            )}
        </div>
    );
}
function Transaction({ transaction }) {
    if (!transaction) return null;
    
    return (
        <div className="item flex w-90 justify-center shadow-lg p-2 bg-body rounded">
            <span className="block mx-auto font-bold text-l">
            {transaction.category ?? "Category"} 
            </span>
            <span className="block mx-auto font-bold text-l">
            {transaction.amount ?? "Amount"}
            </span>
            <span className="block mx-auto font-bold text-l">
            {transaction.date ?? "Date"}
            </span>
        </div>
    );
}

export default List;
