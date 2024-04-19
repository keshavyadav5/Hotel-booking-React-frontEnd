import React from 'react'
import './Book.css';

function Card(props) {
  return (
    <div className='cards'>
      <img src={props.image} alt="book1" />
      <h3>{props.title}</h3>
      <p>{props.about}</p>
      <div className="btn">Book Now</div>
    </div>
  )
}

export default Card