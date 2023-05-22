import React from 'react';
import contact from '../../assets/contact-us-banner.jpg'
import contact2 from '../../assets/R.jpeg'


const Contact = () => {
    return (
        <div>
            <div className='mt-5'>
                <h2 className='text-5xl text-center text-gray-300 font-bold'>Contact Us</h2>

            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={contact2} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;