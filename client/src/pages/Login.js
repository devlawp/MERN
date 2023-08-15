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
    <>
    <div className="login-page">
        {loading && <Spinner/>}
        <Form layout="vertical" onFinish={submitHandler}>
                <h1>Login Form</h1>
            <Form.Item label="Name" name="name">
                <Input/>
            </Form.Item>
            <Form.Item label="Password" name="password">
                <Input type="password"/>
            </Form.Item>
            <div>
                <Link to="/register">Not Register?</Link>
                <button className="btn btn-primary">login</button>
            </div>
        </Form>
    </div>
    </>
    )}
export default Login;