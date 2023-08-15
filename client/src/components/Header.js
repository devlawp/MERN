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
            setLoginUser(user)
        }
    })
    const logoutHandler=()=>{
        localStorage.removeItem("user")
        message.success("Logout Successful")
        navigate("/login");
    }
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link className="navbar-brand" to="/" >Expense Tracker</Link>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <p className="nav-link">{loginUser && loginUser.name}</p>
                    </li>
                    <li className="nav-item">
                    <button className="btn btn-primary" onClick={logoutHandler}>Logout</button>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Header