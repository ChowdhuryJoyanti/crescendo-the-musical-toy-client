import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ToyDetails from '../ToyDetails/ToyDetails';
import UseTitle from '../../hooks/UseTitle';

const ViewDetails = () => {
    const [toyDetails, setToyDetails] = useState(null);
    const {id} = useParams();


    UseTitle('View Details')

    useEffect(() => {
        fetch(`https://crescendo-the-musical-toy-server.vercel.app/${id}`)
        .then(res => res.json())
        .then(data => setToyDetails(data))
    },[])

    return (
        <div>
            <h2>View Details</h2>

            {/* {
                toyDetails.map(toyDetail => <ToyDetails 
                
                key={toyDetail._id}
                toyDetail={toyDetail}
                
                
                ></ToyDetails> )
            } */}
        </div>
    );
};

export default ViewDetails;
