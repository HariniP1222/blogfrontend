import React, { Component } from 'react';
import './Register.css';  

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      paymentMethod: '',
      successMessage: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Simulate form submission and payment processing
    this.setState({ successMessage: '🎉 Registration successful! Payment received. Thank you for signing up. 🎉' });
    
    // Notify parent component that registration is complete
    this.props.onRegisterSubmit();
  };

  render() {
    const { selectedCourses, onBack } = this.props;
    const { name, email, phone, address, paymentMethod, successMessage } = this.state;

    return (
      <div className="register-container">
        <div className="register-content">
          <div className="form-column">
            <h1>Register 📝</h1>
            <p className="selected-courses-heading">You have selected the following content:</p>
            {selectedCourses.length > 0 ? (
              <ul className="selected-courses-list">
                {selectedCourses.map((course, index) => (
                  <li key={index} className="course-item">{course}</li>
                ))}
              </ul>
            ) : (
              <p>No courses selected.</p>
            )}
            <form className="register-form" onSubmit={this.handleSubmit}>
              <label>
                Name: <span className="required">*</span>
                <input type="text" name="name" value={name} onChange={this.handleChange} required />
              </label>
              <label>
                Email: <span className="required">*</span>
                <input type="email" name="email" value={email} onChange={this.handleChange} required />
              </label>
              <label>
                Phone:
                <input type="tel" name="phone" value={phone} onChange={this.handleChange} />
              </label>
              <label>
                Address:
                <textarea name="address" value={address} onChange={this.handleChange} />
              </label>
              <label>
                Payment Method: <span className="required">*</span>
                <select name="paymentMethod" value={paymentMethod} onChange={this.handleChange} required>
                  <option value="">Select payment method</option>
                  <option value="creditCard">Credit Card</option>
                  <option value="paypal">PayPal</option>
                </select>
              </label>
              <div className="button-group">
                <button type="submit" className="submit-button">Submit 🚀</button>
                <button type="button" className="back-button" onClick={onBack}>Back to Course Selection 🔙</button>
              </div>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
          </div>
          <div className="image-column">
            <img src="https://img.freepik.com/premium-photo/cute-girl-fitness-holding-bottle-mattress-cartoon-vector-icon-illustration-people-sport-icon-concept-isolated-premium-vector-flat-cartoon-style_839035-1770678.jpg" alt="Fitness" className="fitness-image" />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
