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














        {/* <div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div> */}


        {/* <div className="overflow-x-auto w-full">
  <table className="table w-full"> */}
        {/* head */}
        {/* <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th> Toy Name</th>
        <th> Sub Category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>Seller Name</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody> */}
        {/* row 1 */}
        {/* <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr> */}
        {/* row 2 */}
        {/* <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Brice Swyre</div>
              <div className="text-sm opacity-50">China</div>
            </div>
          </div>
        </td>
        <td>
          Carroll Group
          <br/>
          <span className="badge badge-ghost badge-sm">Tax Accountant</span>
        </td>
        <td>Red</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr> */}
        {/* row 3 */}
        {/* <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
          Rowe-Schoen
          <br/>
          <span className="badge badge-ghost badge-sm">Office Assistant I</span>
        </td>
        <td>Crimson</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr> */}
        {/* row 4 */}
        {/* <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
          Wyman-Ledner
          <br/>
          <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        </td>
        <td>Indigo</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr> */}
        {/* </tbody> */}
        {/* foot */}
        {/* <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot> */}

        {/* </table>
</div> */}

        // </div>
    );
  };

  export default AllToy;