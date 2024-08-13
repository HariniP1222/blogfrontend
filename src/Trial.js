import React, { Component } from 'react';
import HealthAndFitness from './HealthAndFitness';
import Register from './Register';
import PaymentDetails from './PaymentDetails'; 
import './App.css';  


class Trial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCourses: [],
      showRegister: false,
      showPaymentDetails: false, 
      courseFee: 0,
      additionalCharges: 0
    };
  }

  handleCourseSelect = (course) => {
    this.setState((prevState) => {
      const { selectedCourses } = prevState;
      if (selectedCourses.includes(course)) {
        return {
          selectedCourses: selectedCourses.filter(c => c !== course)
        };
      } else {
        return {
          selectedCourses: [...selectedCourses, course]
        };
      }
    });
  };

  handleProceed = () => {
    const { selectedCourses } = this.state;
    if (selectedCourses.length < 1) {
      alert('Please select at least one course.');
      return;
    }
    // Calculate course fee and additional charges (this is just an example, modify as needed)
    const courseFee = selectedCourses.length * 100; // Example: $100 per course
    const additionalCharges = 20; // Example additional charge

    this.setState({
      showRegister: true,
      courseFee,
      additionalCharges
    });
  };

  handleBack = () => {
    this.setState({
      showRegister: false,
      selectedCourses: [],
      showPaymentDetails: false // Reset payment details view
    });
  };

  handleRegisterSubmit = () => {
    this.setState({
      showRegister: false,
      showPaymentDetails: true
    });
  };

  render() {
    const { selectedCourses, showRegister, showPaymentDetails, courseFee, additionalCharges } = this.state;

    return (
      <div className="app-container">
        {!showPaymentDetails ? (
          !showRegister ? (
            <div className="main-content">
              <HealthAndFitness onCourseSelect={this.handleCourseSelect} />
              <div className="proceed-button-container">
                <button className="proceed-button" onClick={this.handleProceed}>
                  Proceed to Register
                </button>
              </div>
            </div>
          ) : (
            <Register 
              selectedCourses={selectedCourses} 
              onBack={this.handleBack} 
              onRegisterSubmit={this.handleRegisterSubmit} 
            />
          )
        ) : (
          <PaymentDetails 
            courseFee={courseFee} 
            additionalCharges={additionalCharges} 
          />
        )}
      </div>
    );
  }
}

export default Trial;
