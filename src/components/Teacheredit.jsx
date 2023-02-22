import React, { useState, useEffect} from 'react';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import teacherdata from './Teacherdata';

export default function Teacheredit() {

    const[name,setName]=useState("");
    const[subject,setSubject]=useState("");
    const[address,setAddress]=useState("");
    const[doj,setDoj]=useState("");
    const[phone,setPhone]=useState("");
    const[id,setId]=useState("");

    let histroy = useNavigate();
    var index = teacherdata.map((e)=>{
        return e.id;
    }).indexOf(id);

    const handleButton = (e)=>{
        e.preventDefault();
        var data = teacherdata[index];

        data.name = name;
        data.subject = subject;
        data.address = address;
        data.doj = doj;
        data.phone = phone;

        histroy('/teacher');
    }
    useEffect(()=>{
        setName(localStorage.getItem('Name'));
        setSubject(localStorage.getItem('Subject'));
        setAddress(localStorage.getItem('Address'));
        setDoj(localStorage.getItem('Doj'));
        setPhone(localStorage.getItem('Phone'));
        setId(localStorage.getItem('Id'));
    },[]);
    

  return (
    <div>
      <Navbar />
      <Form className='d-grid gap-2' style={{margin:'11rem'}}>
            <Form.Group className='mb-3'>
                <Form.Control type='text' placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Control type='text' placeholder='Subject' value={subject} onChange={(e)=>setSubject(e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Control type='text' placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Control type='text' placeholder='Attendance Percentage' value={doj} onChange={(e)=>setDoj(e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Control type='number' placeholder='Phone Number' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            </Form.Group>
            <Button type='submit' onClick={(e)=>handleButton(e)}>Update</Button>
        </Form>
    </div>
  )
}
