import React from 'react'
import './Book.css';
import {Link} from "react-router-dom"

function Card(props) {
  return (
    <div className='cards'>
      <img src={props.image} alt="book1" />
      <h3>{props.title}</h3>
      <p>{props.about}</p>
      <Link to='/bookingPage' className="btn booking-btn">Book Now</Link>
    </div>
  )
}

export default Card