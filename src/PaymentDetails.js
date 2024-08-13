// PaymentDetails.js
import React from 'react';
import './PaymentDetails.css'; // Ensure this path is correct

const PaymentDetails = ({ courseFee, additionalCharges }) => {
  const totalAmount = courseFee + additionalCharges;

  return (
    <div className="payment-details-container">
      <header className="header">
        <h1>Payment Details</h1>
      </header>
      
      <main className="main-content">
        <p>Thank you for your payment. Below are the details of your transaction:</p>
        
        <section className="bill-summary">
          <h2>Bill Summary</h2>
          <div className="bill-item">
            <span className="label">Course Fee:</span>
            <span className="amount">${courseFee.toFixed(2)}</span>
          </div>
          <div className="bill-item">
            <span className="label">Additional Charges:</span>
            <span className="amount">${additionalCharges.toFixed(2)}</span>
          </div>
          <div className="bill-item total">
            <span className="label">Total Amount:</span>
            <span className="amount">${totalAmount.toFixed(2)}</span>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PaymentDetails;
