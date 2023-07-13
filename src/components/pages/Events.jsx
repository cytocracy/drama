import React from 'react';
import { Link } from 'react-router-dom';
import splash from '../../imgs/IMG_0667.jpg'
import './Home.css'
import Nav from '../globals/Nav';

import Footer from '../globals/Footer';
import flyer from '../../imgs/flyer.png'
import './Events.css'



class Events extends React.Component {


    render() {
        return (
            <>
                <div className="flex flex-col w-screen pt-[6rem] px-4">
                    <div className='content w-[80rem] max-w-full flex flex-col'>
                        <div className='schedule flex flex-col sm:flex-row justify-center items-center'>
                            <h1 className=' text-xl font-bold pb-2 sm:pb-0 vert sm:-rotate-180'>23/24 SHP Drama Play Season</h1>
                            <img src={flyer} alt='flyer' className='h-[20rem] aspect-vertical w-auto object-contain border-4 border-spacing-0 border-highlight' />
                        </div>


                    </div>

                </div>
            </>
        );
    }

}

export default Events;