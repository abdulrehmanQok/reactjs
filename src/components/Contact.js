import React, { useState } from 'react'

const Contact = () => {
  const [data, setData] = useState(0);

  const addValue = () => {
    setData(data + 1)
  }

  const decrease = () => {
    setData(data - 1)
  }

  return (
      <div className='text-center m-auto d-flex' style={{ backgroundColor: 'yellow', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
      <button onClick={decrease} className='btn btn-danger mx-3' style={{ backgroundColor: 'red', borderColor: 'red' }}>Sub</button>
      <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>{data}</div>
      <button onClick={addValue} className='btn btn-success mx-3' style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}>Add</button>
    </div>
    
  )
}

export default Contact