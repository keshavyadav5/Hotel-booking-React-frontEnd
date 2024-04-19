import React, { useState } from 'react';
import './Payment.css'; // Import CSS file

const Payment = () => {
  const [paymentType, setPaymentType] = useState('creditCard');

  return (
    <div className="payment-container">
      <h2>Hotel Booking Payment</h2>
      <form>
        <div>
          <label htmlFor="paymentType">Payment Type:</label>
          <select id="paymentType" value={paymentType} onChange={(e) => setPaymentType(e.target.value)}>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>
        {paymentType === 'creditCard' && (
          <div className="credit-card-fields">
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" />
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input type="text" id="expiryDate" />
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" />
            <label htmlFor="nameOnCard">Name on Card:</label>
            <input type="text" id="nameOnCard" />
          </div>
        )}
        {paymentType === 'paypal' && (
          <div className="paypal-fields">
            {/* PayPal specific fields */}
          </div>
        )}
        {paymentType === 'bankTransfer' && (
          <div className="bank-transfer-fields">
            {/* Bank transfer specific fields */}
          </div>
        )}
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default Payment;
