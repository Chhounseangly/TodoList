import React, {useState, useEffect} from 'react';
import {Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, useLocation, useNavigate} from "react-router-dom";
import axios from 'axios';

function Edit(){
    const [todos, setTodos] = useState({
        subject: "",
        infor: ""
    })

    const navigate = useNavigate()
    const location = useLocation()

    console.log(location);

    const handleChange = (e) =>{
        setTodos((prev) => ({...prev, [e.target.name]: e.target.value}));
    }
    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.put("http://localhost:8000/datas/"+todos, todos)
            navigate("/")
        }catch(err){
            console.log(err);
        }
    }
    return(
        <div>
            <Form className='d-grid gap-2' style={{margin:'15rem'}}>
                <input type="text" placeholder='Update Subject' onChange={handleChange} name='subject' />
                <input type="text" placeholder='Update Information' onChange={handleChange} name='infor' />
                <Button style={{background: "#00d2ac"}} onClick={handleClick} type='submit'>UPDATE</Button>
            </Form>
        </div>
    )
}

export default Edit;