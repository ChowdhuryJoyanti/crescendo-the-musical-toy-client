import React from 'react';
// import { TabContext, Box, TabList,Tab} from '@mui/material';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ToyCard = () => {

    // { category }
    // const { name, price, seller, email, category, subCategory, details, quantity, rating, photo } = NewCategory;



    return (
        <div>
            {/* <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Item One" value="1" />
                        <Tab label="Item Two" value="2" />
                        <Tab label="Item Three" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">Item One</TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext> */}

                {/* <h2>Sub Category</h2> */}


            {/* <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
                <TabList>
                    <Tab>Category</Tab>
                    <Tab>Sub Category</Tab>
                    <Tab>Tabs</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs> */}





            {/* <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='h-40 w-40 ' src={photo} alt="photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">Category:{category}</h2>
                    <h3>Sub Category:{subCategory}</h3>
                    <p>Details:{details}</p>
                    <p>Quantity:{quantity}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div> */}
            {/* <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='h-40 w-40 ' src={photo} alt="photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">Category:{category}</h2>
                    <h3>Sub Category:{subCategory}</h3>
                    <p>Details:{details}</p>
                    <p>Quantity:{quantity}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div> */}
            {/* <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='h-40 w-40 ' src={photo} alt="photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">Category:{category}</h2>
                    <h3>Sub Category:{subCategory}</h3>
                    <p>Details:{details}</p>
                    <p>Quantity:{quantity}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div> */}





        </div>


    );
};

export default ToyCard;
