import React from 'react';
import Navbar from './Navbar';
import teacherdata from './Teacherdata';
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


export default function Teacher() {
  let histroy = useNavigate();

  const handleEdit = (name,subject,address,doj,phone,id)=>{
        localStorage.setItem('Name',name);
        localStorage.setItem('Subject',subject);
        localStorage.setItem('Address',address);
        localStorage.setItem('Doj',doj);
        localStorage.setItem('Phone',phone);
        localStorage.setItem('Id',id);
  }
  const handleDelete = (id)=>{
    let index = teacherdata.map((e)=>{
      return e.id;
    }).indexOf(id);

    teacherdata.splice(index,1);

    histroy('/teacher');
  }
  return (
    <div>
        <Navbar /> 
        <div style={{margin:'5rem'}}>
        <h1 style={{color:'red',marginLeft:'35%',marginBottom:'30px'}}>Teachers Data</h1>
        <Table striped bordered hover size='lg'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>Address</th>
                    <th>Date of Join</th>
                    <th>Contact</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                    {
                        teacherdata && teacherdata.length > 0 ?
                        teacherdata.map((e,i)=>{
                            return (
                                <tr key={i}>
                                    <td>{e.name}</td>
                                    <td>{e.subject}</td>
                                    <td>{e.address}</td>
                                    <td>{e.doj}</td>
                                    <td>{e.phone}</td>
                                    <td>
                                        <Link to="/teacherEdit"><Button onClick={()=>handleEdit(e.name,e.subject,e.address,e.doj,e.phone,e.id)}>Edit</Button></Link>
                                        &nbsp;
                                        <Button onClick={()=>handleDelete(e.id)}>Delete</Button>
                                    </td>                                    
                                </tr>
                            )
                        })
                        :"No data available"
                    }
            </tbody>
        </Table>
        <Link className='d-grid gap-2' to="/createteacher"><Button>Create</Button></Link>
      </div>
     
    </div>
  )
}
