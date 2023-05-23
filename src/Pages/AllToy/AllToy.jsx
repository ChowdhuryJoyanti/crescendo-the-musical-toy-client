import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyCard from '../ToyCard/ToyCard';


const AllToy = () => {

  

  const [search, setSearch] = useState('');
  console.log(search);
  const [toys, setToys] = useState([]);


    useEffect(()=>{
      fetch('https://crescendo-the-musical-toy-server.vercel.app/toy')
      .then(res => res.json())
      .then(data => setToys(data) )
    },[])


  const handleSearch = () => {
        fetch(`https://crescendo-the-musical-toy-server.vercel.app/searchToys?text=${search}`)
        .then(res => res.json())
        .then(data => setToys(data))


  }
  
    return (
      <div>
        <div className='mt-5'>
          <h2 className='text-5xl text-center text-gray-300 font-bold'>All Toys</h2>

            <h2> Toy Length:{toys.length}</h2>
          <div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered" 
                   onChange={(event) => setSearch(event.target.value)}/>
                   {/* <p>Search query: {searchQuery}</p> */}
                      {
                       
                      }


                    <button className="btn btn-square" onClick={handleSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
                
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                <thead>
                        <tr>
                            <th>
                                {/* <label>
                                    <input type="checkbox" className="checkbox" />
                                </label> */}
                            </th>
                            <th> Toy Name</th>
                            <th> Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Seller Name</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    </table>
                    </div>
            </div>

        </div>


        {
          toys.map(toy => <ToyCard
            key={toy._id}
            toy={toy}


          ></ToyCard>)
        }
        </div>
    );
  };

  export default AllToy;