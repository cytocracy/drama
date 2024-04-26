import React from 'react';
import { Link } from 'react-router-dom';
import splash from '../../imgs/IMG_0667.jpg'
import './Home.css'
import Nav from '../globals/Nav';

import Footer from '../globals/Footer';
import flyer from '../../imgs/flyer.png'
import './Events.css'



class Events extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <div className="page flex flex-col w-full pt-[6rem] items-center">
                    {/* whole page */}
                    
                    
                    <div className='content w-full max-w-[80rem] flex flex-col items-center md:flex-row justify-center'>
                        <div className='schedule md:ml-10 flex flex-col md:flex-row justify-center items-center w-full md:w-[25%] mr-0 md:mr-10 mb-8 md:mb-0'>
                            <h1 className=' text-xl font-bold pb-2 md:pb-0 vert md:-rotate-180'>23/24 SHP Drama Play Season</h1>
                            <img src={flyer} alt='flyer' className=' aspect-vertical shadow-2xl w-[75%] md:w-full object-fill border-4 border-spacing-0 border-highlight' />
                        </div>
                        
                        <div className='flex flex-col md:h-[30rem] justify-around items-center'>
                            <h1 className=' text-3xl font-bold pb-2 sm:pb-0 justify-self-start mb-10 sm:mt-20 title '>Upcoming Events</h1>
                            <div className='flex flex-col md:flex-row justify-around w-auto'>
                                <div className='flex flex-col justify-center items-center md:mr-8 mb-8 md:mb-0'>
                                    <h1 className=' text-lg font-bold'>Elf, the Musical</h1>
                                    <p>All-Campus Musical (Grades 1-12)</p>
                                    <p>Performances: November 2023</p>
                                    <p>Directed by Rachel Prouty</p>
                                    <a href="https://youtu.be/xvFZjo5PgG0" target="_blank" className=' w-56 block border-highlight text-highlight font-bold border-[3px] shadow-xl rounded-full px-5 py-2 mt-5 mb-10 w-fit'>Get tickets!</a>
                                </div>
                                <div className='flex flex-col justify-center items-center md:mr-8 mb-8 md:mb-0'>
                                    <h1 className=' text-lg font-bold'>Twelfth Night</h1>
                                    <p>Winter Play</p>
                                    <p>Performances: Februrary 2024</p>
                                    <p>Directed by Jeffrey Adams</p>
                                    <a href="https://shschools.myschoolapp.com/page/z-2021-hpr-event-detail?pk=20833070&register=48732&fbclid=PAAaatopX8am0JVRtqrWvnNiBZZpbiDM9-CL-7Nd-Y0TYvksfW0UFZdA9uQQw_aem_AbLrluY4Q-HPEFvqu6ToW9vueJpngYbpEFocQs4RxqfnrB28Lq_CPIxEY8-xOwfHWGo&siteId=878&ssl=1" target="_blank" className=' w-56 block border-highlight text-highlight font-bold border-[3px] shadow-xl rounded-full px-5 py-2 mt-5 mb-10 w-fit'>Get tickets!</a>
                                </div>
                                <div className='flex flex-col justify-center items-center md:ml-8 sm:mt-0 mt-8'>
                                    <h1 className=' text-lg font-bold'>Something Rotten!</h1>
                                    <p>Spring Musical</p>
                                    <p>Performances: May 2024</p>
                                    <p>Directed by Jeffrey Adams</p>
                                    <a href="https://www.shschools.org/z-2021-hpr-event-detail?pk=21310581" target="_blank" className=' w-56 block border-highlight text-highlight font-bold border-[3px] shadow-xl rounded-full px-5 py-2 mt-5 mb-10 w-fit'>Get tickets!</a>
                                </div>
                            </div>
                            <div>
                                <Link to="/audition" className=' w-56 block highlight text-neutral-50 rounded-full px-5 py-2 mt-5 mb-10'>Interested? Audition! &nbsp; &rarr;</Link>

                            </div>
                        </div>
                        



                    </div>
                    <div>

                    </div>

                </div>
            </>
        );
    }

}

export default Events;