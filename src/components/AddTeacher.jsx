import React, { useState } from 'react';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import teacherdata from './Teacherdata';

export default function AddTeacher() {
    const[name,setName]=useState("");
    const[subject,setSubject]=useState("");
    const[address,setAddress]=useState("");
    const[doj,setDoj]=useState("");
    const[phone,setPhone]=useState("");

    let histroy = useNavigate();

    const handleButton = (e)=>{
        e.preventDefault();

        const id = uuid();
        let uniqueId = id.slice(0,1);
        let Name = name, Subject = subject, Address= address, Doj = doj, Phone = phone;
        
        teacherdata.push({
            id:uniqueId,
            name:Name,
            subject:Subject,
            address:Address,
            doj:Doj,
            phone:Phone
        })

        histroy('/teacher');

    }
  return (
    <div>
      <Navbar />
      <Form className='d-grid gap-2' style={{margin:'11rem'}}>
            <Form.Group className='mb-3'>
                <Form.Control type='text' placeholder='Enter name' onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Control type='text' placeholder='Subject' onChange={(e)=>setSubject(e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Control type='text' placeholder='Address' onChange={(e)=>setAddress(e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Control type='date' placeholder='Attendance Percentage' onChange={(e)=>setDoj(e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Control type='number' placeholder='Phone Number' onChange={(e)=>setPhone(e.target.value)}/>
            </Form.Group>
            <div style={{display:'flex'}}>
            <Button type='submit' onClick={(e)=>handleButton(e)}>Add Teacher</Button>
            &nbsp;
            <Link to="/teacher"><Button variant="danger" type='submit'>Cancel</Button></Link>
            </div>
        </Form>  
    </div>
  )
}
