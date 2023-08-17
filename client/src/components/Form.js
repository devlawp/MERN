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
            resetField('category')
            resetField('amount')
            resetField('date')
        }catch(error){
            setLoading(false)
            message.error('failed to add Transaction')
        }
    }
    return(
        <div className="form-cs">
        <div className="form mx-auto mt-4 w-96 ">
            <h1 className="font-bold py-4 text-xl fs-1">EXPENSES</h1>
            <form id="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-3">
                    <label className="head mt-3 font-bold text-2xl  ">Category</label>
                    <div className="input-group mx-4">
                        <input type="text" {...register('category')} placeholder="  Salary, Food, Rent" className="form-input shadow-lg w-60 p-2 mx-5 bg-body rounded"></input>
                    </div>
                    <label className="head mt-2 font-bold text-2xl ">Amount</label>
                    <div className="input-group mx-4">
                        <input type="text" {...register('amount')} placeholder="  Amount " className="shadow-lg p-2 mx-5 w-60 bg-body rounded"></input>
                    </div>
                    <label className="head mt-2 font-bold text-2xl ">Date</label>
                    <div className="input-group mx-4 ">
                        <input type="date" {...register('date')} className=" shadow-lg p-2 mx-5 w-60 bg-body rounded"></input>
                    </div>
                    <div className="btn btn primary ">
                        {loading && <Spinner/>}  <button className="border mt-3 py-2 font-bold text-while bg-indigo-500 w-100 rounded">Add Transaction</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Form;


