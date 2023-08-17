import React,{useEffect, useState} from "react";
import {Form,Input,message} from "antd";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
const Login=()=>{
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate()
    const submitHandler=async(values) =>{
        try{
            setLoading(true)
            const {data}= await axios.post('/users/login',values)
            setLoading(false)
            message.success('login success')
            localStorage.setItem('user',JSON.stringify({...data.user,password:''}))
            navigate('/')
        }catch(error){
            setLoading(false)
            message.error('Wrong Username or Password')
                    }
    }
    useEffect(()=>{
        if(localStorage.getItem('user')){
            navigate('/')
        }
    },[navigate]);
    return(
    <div className="login-cs">
    <div className="login-page">
        {loading && <Spinner/>}
        <div className="lp">
            <Form  layout="vertical" onFinish={submitHandler}>
                <h1 className="font-bold mx-8">LOGIN</h1>
            <Form.Item className="font-bold mx-1 " label="Name" name="name">
                <Input className="w-full"/>
            </Form.Item>
            <Form.Item className="font-bold mx-1" label="Password" name="password">
                <Input className="font-bold " type="password"/>
            </Form.Item>
            <div className="font-bold mx-8">
                <Link className="font-bold mx-2" to="/register">Not Register?</Link>
                <button className="btn btn-primary border mt-3 py-2 text-while bg-dark w-100 rounded">login</button>
            </div>
        </Form></div>
    </div></div>
    )}
export default Login;