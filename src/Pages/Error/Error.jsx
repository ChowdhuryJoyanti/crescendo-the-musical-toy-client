import React from 'react';
import errorImage  from '../../assets/OIP.jpeg';
import { Link } from 'react-router-dom';

const Error = () => {

  const errorMessage = "Oops! Something went wrong.";

  return (
    <div className="error-page m-auto">
      <h1 className='text-9xl'>Error</h1>
      <p className='text-5xl'>{errorMessage}</p>
      <img className='align-baseline' src={errorImage} alt="" />
      <Link to="/">GO To Home</Link>
    </div>
  );
};




export default Error;