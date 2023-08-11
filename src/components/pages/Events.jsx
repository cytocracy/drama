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
                <div className="flex flex-col w-screen pt-[6rem] items-center px-4">
                    <div className='content w-[80rem] max-w-full flex flex-col items-center sm:flex-row justify-center'>
                        <div className='schedule flex flex-col sm:flex-row justify-center items-center min-w-[25rem] mr-0 sm:mr-20 mb-8 sm:mb-0'>
                            <h1 className=' text-xl font-bold pb-2 sm:pb-0 vert sm:-rotate-180'>23/24 SHP Drama Play Season</h1>
                            <img src={flyer} alt='flyer' className='h-[30rem] aspect-vertical w-[22.5rem] object-fill border-4 border-spacing-0 border-highlight' />
                        </div>
                        
                        <div className='flex flex-col h-[30rem] justify-center'>
                            <h1 className=' text-3xl font-bold pb-2 sm:pb-0 justify-self-start mb-10'>Upcoming Events</h1>
                            <div className='flex flex-col md:flex-row justify-around w-auto'>
                                <div className='flex flex-col justify-center items-center md:mr-8 mb-8 md:mb-0'>
                                    <h1 className=' text-lg font-bold'>Elf, the Musical</h1>
                                    <p>All-Campus Musical (Grades 1-12)</p>
                                    <p>Performances: November 2023</p>
                                    <p>Directed by Rachel Prouty</p>
                                </div>
                                <div className='flex flex-col justify-center items-center md:mr-8 mb-8 md:mb-0'>
                                    <h1 className=' text-lg font-bold'>Twelfth Night</h1>
                                    <p>Winter Play</p>
                                    <p>Performances: Februrary 2024</p>
                                    <p>Directed by Jeffrey Adams</p>
                                </div>
                                <div className='flex flex-col justify-center items-center md:ml-8 sm:mt-0 mt-8'>
                                    <h1 className=' text-lg font-bold'>Something Rotten!</h1>
                                    <p>Spring Musical</p>
                                    <p>Performances: May 2024</p>
                                    <p>Directed by Jeffrey Adams</p>
                                </div>
                            </div>
                        </div>
                        



                    </div>

                </div>
            </>
        );
    }

}

export default Events;