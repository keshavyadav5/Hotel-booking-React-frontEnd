import React from 'react'
import './BookingPage'
import { Navigate, useNavigate } from 'react-router-dom'
function BookingForm() {
  const navigate = useNavigate();
  return (
    <div className='bookingForm'>
      <h2>Book Your Room Today</h2>
      <table>
      <thead></thead>
      <tbody>
        <tr>
          <td><label htmlFor="" className='bookingForm-label'>Check in Date</label></td>
          <td><input type="date" name="" className='bookingForm-input'  /></td>
        </tr>
        <tr>
          <td><label htmlFor="" className='bookingForm-label'>Check out Date</label></td>
          <td><input type="date" name="" className='bookingForm-input'  /></td>
        </tr>
        <tr>
          <td><label htmlFor="" className='bookingForm-label'>Check in Time</label></td>
          <td><input type="time" name="" className='bookingForm-input'  /></td>
        </tr>
        <tr>
          <td><label htmlFor="" className='bookingForm-label'>Check Out Date</label></td>
          <td><input type="time" name="" className='bookingForm-input' /></td>
        </tr>
        <tr>
          <td><label htmlFor="" className='bookingForm-label'>Adults</label></td>
          <td><select name="" id="" className='booking-td'>
            <option value="">0</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </select></td>
        </tr>
        <tr>
          <td><label htmlFor="" className='bookingForm-label'>Children</label></td>
          <td><select name="" id="" className='booking-td'>
            <option value="">0</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </select></td>
        </tr>
        <tr>
          <td><label htmlFor="" className='bookingForm-label'>Rooms</label></td>
          <td><select name="" id="" className='booking-td'>
            <option value="">0</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </select></td>
        </tr>
        <tr>
          <td colSpan={2}>
            <button className='btn bookingFrom-btn' onClick={()=>{
              alert("Thanks for booking")
              navigate('/')
            }}>Book Now</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default BookingForm