import React from 'react';

const Toys = ({toy}) => {



    const { name, price, seller, email, category, subCategory, details, quantity, rating, photo } = toy || {};

    return (
        <div>
            <div className="card w-96 glass">
                <figure><img  className='h-40 w-60' src={photo}alt="car!" /></figure>
                <div className="card-body h-70">
                    <h2 className="card-title">{name}</h2>
                    <p>price:{price}</p>
                    <p>Category:{category}</p>
                    <p>Sub Category{subCategory}</p>
                    {/* <p>Details:{details}</p> */}
                    <p>Quantity:{quantity}</p>
                    <p>Rating:{rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toys;