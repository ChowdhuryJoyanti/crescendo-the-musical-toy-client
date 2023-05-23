import { Grid, ListItem } from '@mui/material';
import React from 'react';
import './Galary.css';
import image1 from '../../../src/assets/piano1.jpg';
import image2 from '../../../src/assets/drum2jpg.jpg';
import image3 from '../../../src/assets/edgar-5HltXT-6Vgw-unsplash.jpg'
import image4 from '../../../src/assets/drum3jpg.jpg';
import image5 from '../../../src/assets/drum6pg.jpg';
import image6 from '../../../src/assets/guier3.webp';
import image7 from '../../../src/assets/violin.jpg';
import image8 from '../../../src/assets/violin6.jpg';
import image9 from '../../../src/assets/viollin4.jpg';
import UseTitle from '../../hooks/UseTitle';


const Galary = () => {




    UseTitle('Gallery')

    return (
       

        <div>
            <div className='mt-5'>
                <h2 className='text-5xl text-center text-gray-300 font-bold'>Gallery</h2>

            </div>

            <div className="gallery mt-5 rounded-lg  grid lg:grid-cols-3 gap-6 px-4 lg:px:4" data-aos="flip-left">

                <img className='rounded-lg' src={image1} alt="Image 1" />
                <img className='rounded-lg' src={image2} alt="Image 2" />
                <img className='rounded-lg' src={image3} alt="Image 3" />
                <img className='rounded-lg' src={image4} alt="Image 4" />
                <img className='rounded-lg' src={image5} alt="Image 5" />
                <img className='rounded-lg' src={image6} alt="Image 6" />
                <img className='rounded-lg' src={image7} alt="Image 7" />
                <img className='rounded-lg' src={image8} alt="Image 8" />
                <img className='rounded-lg' src={image9} alt="Image 9" />

         
            </div>
        </div>

    );
};

export default Galary;