import React from 'react';
import Navbar from './Navbar';
import { Button, Table } from 'react-bootstrap';
import stdData from './Studentdata';
import { Link, useNavigate } from 'react-router-dom';

export default function Student() {
    let history = useNavigate();

    const handleEdit = (name,standard,address,attendance,phone,id)=>{
        localStorage.setItem('Name',name);
        localStorage.setItem('Standard',standard);
        localStorage.setItem('Address',address);
        localStorage.setItem('Attendance',attendance);
        localStorage.setItem('Phone',phone);
        localStorage.setItem('Id',id);
    }
    const handleDelete =(id)=>{
        var index = stdData.map((e)=>{
            return e.id;
        }).indexOf(id);
        stdData.splice(index,1);

        history('/');
    }
  return (
    <div>
      <Navbar />
      <div style={{margin:'5rem'}}>
        <h1 style={{color:'red',marginLeft:'35%',marginBottom:'30px'}}>Students Data</h1>
        <Table striped bordered hover size='lg'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Standard</th>
                    <th>Address</th>
                    <th>Attendance</th>
                    <th>Contact</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                    {
                        stdData && stdData.length > 0 ?
                        stdData.map((e,i)=>{
                            return (
                                <tr key={i}>
                                    <td>{e.name}</td>
                                    <td>{e.standard}</td>
                                    <td>{e.address}</td>
                                    <td>{e.attendance}</td>
                                    <td>{e.phone}</td>
                                    <td>
                                        <Link to="/studentEdit"><Button onClick={()=>handleEdit(e.name,e.standard,e.address,e.attendance,e.phone,e.id)}>Edit</Button></Link>
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
        <Link className='d-grid gap-2' to="/createstudent"><Button>Create</Button></Link>
      </div>
    </div>
  )
}
