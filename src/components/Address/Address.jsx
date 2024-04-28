import React from 'react'; 
import './Address.css';
import './Help'; 
import Help from './Help';
function Address() {
  return (
    <div className='address'>
      <Help/>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1658.9355537912445!2d86.11268503465405!3d26.751393097990064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec190ec9302837%3A0x6a0174e49e215160!2sUpendra%20majhi!5e0!3m2!1sen!2sin!4v1711011884460!5m2!1sen!2sin" 
        width='100%'
        height="400"
        allowFullScreen={true}
        style={{ border: 0 }} 
        // allowfullscreen="" 
        loading="lazy" 
        >
      </iframe>
    </div>
  );
}

export default Address;
