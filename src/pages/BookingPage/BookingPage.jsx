import React from 'react'
import './BookingPage.css'
import BookingForm from './BookingForm'

function BookingPage() {
  return (
    <div>
      <div className="bookingPage-container">
        <h1>Apex Hotel Booking</h1>
          <BookingForm/>
          <h3 className='bookingForm-footer'>&copy; 
          2024 Hotel Booking. All Rights Reserved | Designed by Apex</h3>
      </div>
    </div>
  )
}

export default BookingPage