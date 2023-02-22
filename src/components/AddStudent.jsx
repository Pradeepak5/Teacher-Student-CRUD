import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import stdData from './Studentdata';
import {v4 as uuid} from "uuid";

export default function AddStudent() {

    let histroy = useNavigate();

    const handleButton = (e)=>{
        e.preventDefault();
        const id = uuid();
        let uniqueId = id.slice(0,1);
        let Name = name, Standard = standard, Address = address, Attendance = attendance, Phone = phone;

        stdData.push({
            id:uniqueId,
            name:Name,
            standard:Standard,
            address:Address,
            attendance:Attendance,
            phone:Phone
        });
        histroy('/');

    }

    const [name,setName]=useState("");
    const [standard,setStandard]=useState("");
    const [address,setAddress]=useState("");
    const [attendance,setAttendance]=useState("");
    const [phone,setPhone]=useState("");
  return (
    <div>
        <Navbar />    
        <Form className='d-grid gap-2' style={{margin:'11rem'}}>
            <Form.Group className='mb-3'>
                <Form.Control type='text' placeholder='Enter name' onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Control type='number' placeholder='Standard' onChange={(e)=>setStandard(e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Control type='text' placeholder='Address' onChange={(e)=>setAddress(e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Control type='number' placeholder='Attendance Percentage' onChange={(e)=>setAttendance(e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Control type='number' placeholder='Phone Number' onChange={(e)=>setPhone(e.target.value)}/>
            </Form.Group>
            <div style={{display:'flex'}}>
            <Button type='submit' onClick={(e)=>handleButton(e)}>Add Student</Button>
            &nbsp;
            <Link to="/"><Button variant="danger" type='submit'>Cancel</Button></Link>
            </div>
        </Form>  
    </div>
  )
}
