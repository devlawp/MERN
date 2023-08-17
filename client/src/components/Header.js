import React,{useEffect, useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import {message} from "antd";
import 'bootstrap/dist/css/bootstrap.min.css'
const Header=()=>{
    const[loginUser,setLoginUser]=useState(" ");
    const navigate=useNavigate();
    useEffect(()=>{
        const user =JSON.parse(localStorage.getItem('user'))
        if(user) {
            setLoginUser(user);
        }
    })
    const logoutHandler=()=>{
        localStorage.removeItem("user")
        message.success("Logout Successful")
        navigate("/login");
    }
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-dark py-1 ">
            <div className="container-fluid mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
                <Link className="navbar-brand fs-2 text-light" to="/" >Expense Tracker</Link>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item p-2 text-uppercase fw-bold">
                    <p className="nav-link antialiased fs-5 m-auto text-light">{loginUser && loginUser.name}</p>
                    </li>
                    <li className="nav-item p-2">
                    <button className="btn btn-primary bg-white text-black fs-auto my-1 py-0.25" onClick={logoutHandler}>Logout</button>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default Header