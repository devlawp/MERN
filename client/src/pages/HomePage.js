import React from "react";
import Layout from "../components/Layout";
import Form from "../components/Form";
import List from "../components/Lists";

const HomePage=()=>{
    return(
    <Layout>
        <div div className='container  drop-shadow-lg' >
            <div className='grid md:grid-cols-2 gap-4'>
                <Form/>
                <List/>
            </div>
        </div>
    </Layout>
    )}
export default HomePage;