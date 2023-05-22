import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Mytoy = () => {
    const {user} = useContext(AuthContext);
        console.log(user);


        useEffect(() =>{
            
            if(user?.email){
                fetch(`http://localhost:5000/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            }
        },[user?.email])





    return (
        <div>
            <h3>my ty</h3>
        </div>
    );
};

export default Mytoy;