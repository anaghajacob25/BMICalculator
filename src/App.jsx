
import './App.css'
import { TextField } from '@mui/material'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';



function App() {
 
   const [age,setAge]=useState('')
   const [weight,setWeight]=useState('')
   const [height,setHeight]=useState('')
   const [gender,setGender]=useState('')
   const [BMI,setBMI]=useState('')
   const [message,setMessage]=useState('')


 
 
 const calculateBMI = (e) => {
  e.preventDefault()
  if (height && weight && gender && age) {
     const heightInMeters = height / 100;
     const BMIValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
     setBMI(BMIValue);

     // BMI Categories
     if (BMIValue < 18.5) {
        setMessage('Underweight');
     } else if (BMIValue >= 18.5 && BMIValue <= 24.9) {
        setMessage('Normal weight');
     } else if (BMIValue >= 25 && BMIValue <= 29.9) {
        setMessage('Overweight');
     } else {
        setMessage('Obesity');
     }
  }else{
    alert('Please fill all fields')
  }
};


const Reload=()=>{
  setAge('');
  setWeight('');
  setHeight('');
  setGender('');
  setBMI('');
  setMessage('');
 } 



  return (
    <>
      <div className="container-fluid d-flex align-items-center justify-content-center  " style={{height:'100vh'}}>
       
        <div className="calc p-4 border-5 rounded " >
            <h6 className='mt-1 mb-4 ' style={{textAlign:'center',fontSize:'28px'}}>Check Your BMI</h6>
            
           <form  className='d-flex align-items-center justify-content-center flex-column'>

            <div className='content p-2  mt-3 ' style={{backgroundColor:'rgba(209, 93, 159, 0.214) '}}>
            <TextField id="standard-basic" label="Age" variant="standard" type='number' value={age} onChange={(e)=>setAge(e.target.value)}/>
            </div>

            <div className='content mt-4 p-3  w-75 ' style={{backgroundColor:'rgba(209, 93, 159, 0.214)'}}>
            <FormControl>
            <RadioGroup
             row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" value={gender} onChange={(e) => setGender(e.target.value)} >
           <FormControlLabel value="female" control={<Radio />} label="Female" className='ms-4 me-5'/>
           <FormControlLabel value="male" control={<Radio />} label="Male" className='ms-4'/>
           </RadioGroup>
          </FormControl>
            </div>

            <div className='mt-3 flex-row '>
            <TextField id="standard-basic" label="Height(cm)" variant="standard" className='ms-5 me-3 mt-2' type='number' value={height} onChange={(e)=>setHeight(e.target.value)} />
            <TextField id="standard-basic" label="Weight(Kg)" variant="standard" className='ms-5 mt-2  ' type='number' value={weight} onChange={(e)=>setWeight(e.target.value)} />
            </div>

            <button className='btn btn-secondary mt-5 w-75' onClick={calculateBMI}>Calculate BMI</button>
            <button className='btn btn-light mt-3 w-75' onClick={Reload}>Reload</button>

            <div className='mt-4'>
              <h4 >Your BMI is</h4>
              <h4 className='content p-2  ' style={{textAlign:'center',backgroundColor:'rgba(91, 180, 204, 0.317)',color:'black'}}>{BMI}</h4>
              <h2 style={{ color: message === 'Underweight' ? 'blue' : message === 'Normal weight' ? 'green' : 'red' ,textAlign:'center'}}>{message}</h2>
            </div>

            </form>

        </div>
      </div>
    </>
  )
}

export default App
