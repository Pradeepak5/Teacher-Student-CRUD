import './App.css';
import { Routes, Route } from 'react-router-dom';
import Student from './components/Student';
import Teacher from './components/Teacher';
import Studentedit from './components/Studentedit';
import AddStudent from './components/AddStudent';
import Teacheredit from './components/Teacheredit';
import AddTeacher from './components/AddTeacher';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Student />}/>
        <Route path='/teacher' element={<Teacher />} />
        <Route path='/studentEdit' element={<Studentedit />} />
        <Route path='/createstudent' element={<AddStudent />}/>
        <Route path='/teacherEdit' element={<Teacheredit />}/>
        <Route path='/createteacher' element={<AddTeacher />} />
      </Routes>
    </div>
  );
}

export default App;
