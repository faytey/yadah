import { useState } from 'react';
import './Registration.css';
 
export default function Form() {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 
  // checking for errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handle name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Handle email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handle password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handle confirm password change
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
 
  // Successful Submission
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };
 
  // failed Submission
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 
  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>
 
    
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        <label className="label">UserName: </label>
        <input onChange={handleName} className="input"
          value={name} type="text" required/>
          <br />
 
        <label className="label">Email: </label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" required/>
          <br />
 
        <label className="label">Password: </label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" required/>
          <br />

        <label className="label">Confirm Password: </label>
        <input onChange={handleConfirmPassword} className="input"
          value={confirmPassword} type="password" required/>
          <br />
 
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}