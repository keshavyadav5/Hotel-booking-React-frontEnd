import React from 'react'
import './Weeding.css'
import WeedingCard from './WeedingCard'

function Weeding() {
  return (
    <div className='weeding'>
      <div className="weeding-title">
        <h4>#brideandgroom</h4>
        <h3>Weedings & Events</h3>
      </div>
      <div className="weeding-body">
        <div className="weeding-table">
          <h6>Capacities</h6>
          <table>
          <tbody>
            <tr>
              <td>Ceromony:</td>
              <th>120</th>
            </tr>
            <tr>
              <td>Breakfast:</td>
              <th>140</th>
            </tr>
            <tr>
              <td>Reception:</td>
              <th>200</th>
            </tr>
            <tr>
              <td>Outdoor:</td>
              <th>yes</th>
            </tr>
            </tbody>
          </table>
          <a href="#">Check all packages</a>
        </div>
        <WeedingCard />
      </div>
    </div>
  )
}

export default Weeding