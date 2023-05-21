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
        fetch(`http://localhost:5000/toys/category?category=grand%20concert`)
            .then(res => res.json())
            .then(result => {
                setCategory(result);
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/toys/category?category=Classical`)
            .then(res => res.json())
            .then(result => {
                setGuiters(result);
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/toys/category?category=string bass`)
            .then(res => res.json())
            .then(result => {
                setViolins(result);
            })
    }, [])

    // const result = category?.filter((catagory) => catagory.status == activeTab);
    // console.log(result);

    const handleCategory = () => {
        // const categoryUrl  = `http://localhost:5000/toy/${category}`
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
            <div>
                <h2>Toys Category</h2>
                <h4> Buy Your Toy</h4>
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
