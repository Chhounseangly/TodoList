import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Task from './Task';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';

function Add() {
    const navigate = useNavigate()

    const [todos, setTodos] = useState({
        subject: "",
        infor: ""
    })

    

    const handleChange = (e) => {
        setTodos(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8000/datas", todos)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }
    console.log(todos);

    return (
        <div>
            <Form className='d-grid gap-2' style={{ margin: '15rem' }}>
                <input type="text" placeholder='Enter Subject' onChange={handleChange} name='subject' />
                <input type="text" placeholder='Enter Information' onChange={handleChange} name='infor' />
                <Button style={{ background: "#00d2ac" }} type='submit' onClick={handleClick}>SUBMIT</Button>
            </Form>
        </div>
    )
}

export default Add;