import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, useNavigate} from "react-router-dom"
import {useState,  useEffect } from 'react';
import axios from 'axios';

function Home(){

    const [todos, setTodos] = useState([])


    useEffect(()=>{
        const fecthAllTodo = async ()=>{
          try{
            const res = await axios.get("http://localhost:8000/datas")
            setTodos(res.data);
          }catch(err){
            console.log(err)
          }
        }
        fecthAllTodo()
      }, []);


      const handleDelete = async (id) => {
       try{
        await axios.delete("http://localhost:8000/datas/"+id)
        window.location.reload()
       }
       catch(err){
        console.log(err);
       }
      }
      


    return(
        <div>
            <div style={{margin:"2rem"}}>
                <Table striped bordered hover size="sm">
                    <thread>
                        <div style={{display: 'flex'}}>
                            <p style={{marginRight:"88%"}}>Subject</p>
                            <p style={{marginRight:"50%"}}>Info</p>
                            <p style={{marginLeft:"50%"}}>Action</p>
                        </div>
                    </thread>
                    <tbody>
                        {
                            todos.map((todo) =>{
                                return (
                                
                                    <tr key={todo.id}>
                                        <td>
                                            {todo.subject}
                                        </td>
                                        <td>
                                            {todo.infor}
                                        </td>
                                        <td>
                                            <Link to={'/edit'}>
                                            <Button style={{background: "#00d2ac"}}>EDIT</Button>
                                            </Link>
        
                                            <Button style={{background: "#00d2ac"}} onClick= {()=>handleDelete(todo.id)}>DELETE</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                            
                       
                    </tbody>
                </Table>
                <br>
                </br>
                <Link className='d-grid gap-2' to="/create">
                    <Button style={{background: "#00d2ac"}} size='lg'>CREATE</Button>
                </Link>
            </div>
        </div>
    )
}

export default Home;