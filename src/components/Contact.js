import { useState } from "react";

const Contact = (e) => {
const [height,setHeight] =useState(" ");
const [weight,setWeight] = useState("");
const [bmi,setBmi] = useState("");
const [message,setMessage] = useState("");
  const calculateBMI = (e) => {
    e.preventDefault();
    if(height && weight){
      const bmiValue = weight / ((height / 100) ** 2);
      setBmi(bmiValue.toFixed(2));
      if(bmiValue < 18.5) setMessage("Underweight");
      else if(bmiValue >= 18.5 && bmiValue <= 24.9) setMessage("Normal weight");
      else if(bmiValue >= 25 && bmiValue <= 29.9) setMessage("Overweight");
      else setMessage("Obese");
    }else{
      setMessage("Please enter valid weight and height.");
    }
  }
  return (
    <div>
      <form>
        <label> Enter weight in kg</label>
        <input type="number" name="weight" onChange={(e)=>setWeight(e.target.value)} min="1" max="500" required
        className='form-control' />
        <label> Enter height in cm</label>
        <input type="number" name="height" onChange={(e)=>setHeight(e.target.value)} min="100" max="250" required
        className='form-control' />
        <button type="submit" className='btn btn-primary' onClick={calculateBMI}>Calculate BMI</button>
        <p> BMI:</p>
        <p>{bmi}</p>
        <p>Status: {message}</p>
      </form>
    </div>
  )
}

// import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// const Contact = () => {
//   const [data , setData]=useState(5);

//   const addvalue=()=>{
//    if(data<10){
//     setData(data+1);
//    }
//    else{
//     alert('Limit reached');
  
//    }

//   }
//   const addvalue_dec=()=>{
//     if(data>0){
//       setData(data-1);
//     }
//     else{ 
//       alert('Limit reached');
//     }
//   }
//   return (
    
//     <div className="text-center m-auto ">
//   <button onClick={addvalue} className='btn btn-primary mx-3' >Add</button>
//   {data}
//   <button onClick={addvalue_dec} className='btn btn-primary mx-3' >Decrement</button>
//     </div>
//   )
// }

// export default Contact;

export default Contact
