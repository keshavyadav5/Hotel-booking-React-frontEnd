import React from 'react'
import './Form.css'


function Form() {
  return (
    <form action="" className='form'>
      <div className='form-elment'>
        <label htmlFor="arrival">Arrival</label>
        <input type="date" name="arrival" id="arrival" />
      </div>
      <div className='form-elment'>
        <label htmlFor="departure">Departure</label>
        <input type="date" name="departure" id="departure" />
      </div>
      <div className='btn-from btn btn-from'>
        search
      </div>
    </form>
  )
}

export default Form