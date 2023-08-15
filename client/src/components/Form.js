import React,{useState} from "react";
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { message } from "antd";
import Spinner from "../components/Spinner";
function Form(){
    const{register,handleSubmit,resetField}=useForm();
    const [loading,setLoading]=useState(false);
    const onSubmit=async(values)=>{
        try{
            const user=JSON.parse(localStorage.getItem('user'))
            setLoading(true)
            await axios.post('/transactions/add-transaction',{...values,userid:user._id})
            setLoading(false)
            message.success('Transacition Added Successfully')
        }catch(error){
            setLoading(false)
            message.error('failed to add Transaction')
        }
    }
    return(
        
        <div className="form max-w-sm mx-auto w-96">
            <h1 className="font-bold pb-4 text-xl">Transaction</h1>
            {loading && <Spinner/>}
            <form id="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4">
                    <label>Category</label>
                    <div className="input- group">
                        <input type="text" {...register('category')} placeholder="Salary,Food,Rent" className="form-input"></input>
                    </div>
                    <label>Amount</label>
                    <div className="input- group">
                        <input type="text" {...register('amount')} placeholder="Amount" className="form-input"></input>
                    </div>
                    <label>Date</label>
                    <div className="input- group">
                        <input type="date" {...register('date')} placeholder="Amount" className="form-input"></input>
                    </div>
                    <div className="btn btn primary">
                        <button className="border py-2 text-while bg-indigo-500 w-full">Add Transaction</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form;


