import React, { useState, useEffect} from 'react';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import stdData from './Studentdata';

export default function Studentedit() {
    let histroy = useNavigate();

    const [name,setName]=useState("");
    const [standard,setStandard]=useState("");
    const [address,setAddress]=useState("");
    const [attendance,setAttendance]=useState("");
    const [phone,setPhone]=useState("");
    const [id,setId]=useState("");

    var index = stdData.map((e)=>{
      return e.id;
    }).indexOf(id);

    const handleButton = (e)=>{
      e.preventDefault();
      let data = stdData[index];

      data.name = name;
      data.standard = standard;
      data.address = address;
      data.attendance = attendance;
      data.phone = phone;

      histroy('/');
    }

    useEffect(()=>{
      setName(localStorage.getItem('Name'));
      setStandard(localStorage.getItem('Standard'));
      setAddress(localStorage.getItem('Address'));
      setAttendance(localStorage.getItem('Attendance'));
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
                <Form.Control type='number' placeholder='Standard' value={standard} onChange={(e)=>setStandard(e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Control type='text' placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Control type='number' placeholder='Attendance Percentage' value={attendance} onChange={(e)=>setAttendance(e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Control type='number' placeholder='Phone Number' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            </Form.Group>
            <Button type='submit' onClick={(e)=>handleButton(e)}>Update Student</Button>
        </Form> 
    </div>
  )
}
