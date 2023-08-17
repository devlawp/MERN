import React,{useState,useEffect} from "react";
import {Form,Input,message} from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Spinner from "../components/Spinner";
const Register=()=>{
    const navigate =useNavigate();
    const [loading,setLoading]=useState(false)
    const submitHandler=async(values) =>{
        try{
            setLoading(true)
            await axios.post('/users/register',values)
            message.success("Registration Successfull")
            setLoading(false)
            navigate('/login')
        }catch(error){
            setLoading(false)
            message.error('something went wrong')
        }
    };
    useEffect(()=>{
        if(localStorage.getItem('user')){
            navigate('/')
        }
    },[navigate]);
    return(
    <div className="register-cs">
    <div className="register-page">
        {loading && <Spinner />}
        <div className="rp">
        <Form layout="vertical" onFinish={submitHandler}>
                <h1 className="font-bold mx-8">REGISTER</h1>
                <Form.Item className="font-bold mx-1 " label="Name" name="name">
                <Input/>
            </Form.Item>
            <Form.Item className="font-bold mx-1" label="Password" name="password">
                <Input type="password"/>
            </Form.Item>
            <div>
                <Link className="font-bold mx-2" to="/login">Already Register?</Link>
                <button className="btn btn-primary border mt-3 py-2 text-while bg-dark w-100 rounded">Register</button>
            </div>
        </Form></div>
    </div>
    </div>
    )}
export default Register;