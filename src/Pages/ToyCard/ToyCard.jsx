import React, { useState } from 'react';
// import { TabContext, Box, TabList,Tab} from '@mui/material';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import React, { useState } from 'react';
// import Search from './Search';

const ToyCard = ({toy}) => {


    const { name, price, seller, email, category, subCategory, details, quantity, rating, photo } = toy;

    


    return (
        <div>
        

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        {/* <tr>
                    
                            <th> Toy Name</th>
                            <th> Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Seller Name</th>
                            <th>Details</th>
                        </tr> */}
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{name}</div>
                                    
                                    </div>
                                </div>
                            </td>
                            <td>
                            {subCategory}
                
                            </td>
                            <td>{price}</td>
                            <td>{quantity}</td>
                            <td>{seller}</td>
                            <th>
                                <button  className="btn btn-outline mt-5">View Details</button>
                            </th>
                        </tr>






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
                    </tbody>
                    {/* foot */}


                    {/* <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
     */}
                </table>
            </div>





        </div>


    );
};

export default ToyCard;
