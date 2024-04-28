import React from 'react'
import './Room.css'

function Room() {
  return (
    <div className='room'>
      <div className="img-container">
        <div className="img1 img"></div>
        <div className="img2 img"></div>
      </div>
      <div className="room-context">
        <h3>Winter is here,<br/>the pleasure can come.</h3>
        <p>Enjoy the wintry area from their most enchanting side wit
        h our specials we have comppiled for you. So that nothing 
        stands in the way of an unforgettable winter.</p>
        <button className="btn room-btn">Discover & Book</button>
      </div>
    </div>
  )
}

export default Room