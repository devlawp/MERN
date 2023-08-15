import React from "react";
import Layout from "../components/Layout";
import Form from "../components/Form";
import List from "../components/List";

const HomePage=()=>{
    return(
    <Layout>
        <div div className='container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800' >
            <div className='grid md:grid-cols-2 gap-4'>
                <Form/>
                <List/>
            </div>
        </div>
    </Layout>
    )}
export default HomePage;