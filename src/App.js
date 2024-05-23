import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const[value,SetValue] = useState(0)
  const fetchData = async ()=>{
    const res = await axios.get('https://data-school.onrender.com/api/students').then(data=>console.log(data.data)).catch(err=>console.log(err.toJSON().message))
  }

  return (
    <div>
      <button title='test' onClick={()=>fetchData()}/>
    </div>
  );
}

export default App;
