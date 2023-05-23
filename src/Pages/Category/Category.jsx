import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from '../ToyCard/ToyCard';
import Toys from '../Toys/Toys';

const Category = () => {
    const [category, setCategory] = useState([]);
    const [guiters, setGuiters] = useState([]);
    const [violinis, setViolins] = useState([]);

    const [activeTab, setActiveTab] = useState('Acoustics')


    useEffect(() => {
        fetch(`https://crescendo-the-musical-toy-server.vercel.app/toys/category?category=grand%20concert`)
            .then(res => res.json())
            .then(result => {
                setCategory(result);
            })
    }, [])

    useEffect(() => {
        fetch(`https://crescendo-the-musical-toy-server.vercel.app/toys/category?category=Classical`)
            .then(res => res.json())
            .then(result => {
                setGuiters(result);
            })
    }, [])

    useEffect(() => {
        fetch(`https://crescendo-the-musical-toy-server.vercel.app/toys/category?category=string bass`)
            .then(res => res.json())
            .then(result => {
                setViolins(result);
            })
    }, [])

    // const result = category?.filter((catagory) => catagory.status == activeTab);
    // console.log(result);

    const handleCategory = () => {
        // const categoryUrl  = `https://crescendo-the-musical-toy-server.vercel.app/toy/${category}`
        // fetch(categoryUrl)
        // .then((res) => res.json())
        // .then((data) => {
        //     console.log(data);
        //     setCategory(data);
        // })

    }
    return (
        //     <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
        //     <TabList>
        //         <Tab>Category</Tab>
        //         <Tab>Sub Category</Tab>
        //         <Tab>Tabs</Tab>
        //     </TabList>

        //     <TabPanel>
        //         <h2>Any content 1</h2>
        //     </TabPanel>
        //     <TabPanel>
        //         <h2>Any content 2</h2>
        //     </TabPanel>
        // </Tabs>

        <div>
            <div className='mt-5'>
                <h2 className='text-5xl text-center text-gray-300 font-bold'>Toys Category</h2>
               
            </div>

            <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
                <TabList>
                    <Tab>Acoustics</Tab>
                    <Tab>Bass</Tab>
                    <Tab>Electric</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid lg:grid-cols-3 gap-6 px-4 lg:px:4'>
                        {category.slice(0,3).map(toy =>
                            <Toys
                                key={toy._id}
                                toy={toy}

                            ></Toys>
                        )}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 gap-6 px-4 lg:px:4'>
                        {guiters.map(toy =>
                            <Toys
                                key={toy._id}
                                toy={toy}

                            ></Toys>
                        )}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 gap-6 px-4 lg:px:4'>
                        {violinis.map(toy =>
                            <Toys
                                key={toy._id}
                                toy={toy}

                            ></Toys>
                        )}
                    </div>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Category;
