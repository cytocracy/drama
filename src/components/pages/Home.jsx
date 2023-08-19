import React from 'react';
import { Link } from 'react-router-dom';
import splash from '../../imgs/IMG_0667.jpg'
import './Home.css'
import Nav from '../globals/Nav';
import Footer from '../globals/Footer';
import opp from '../../imgs/opp.png'


class Home extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Nav type={0} />
                <div className=''>
                    <div className='splash h-screen w-screen bg-cover bg-top flex justify-center items-center'>
                        <h1 className='  text-slate-50 text-7xl p-5'>
                            Sacred Heart Prep Drama
                        </h1>
                    </div>
                    <div className='pagebody w-full flex justify-center'>
                        <div className='pagecontent w-[80rem] sm:px-20 px-8 max-w-full flex flex-col justify-center items-center'>
                            <div className='flex flex-col justify-center self-center items-center py-10 px-2 max-w-xl'>
                                <h1 className=' mb-9 text-3xl text-neutral-600 break-before-auto break-normal font-bold'>Welcome to Sacred Heart Prep Drama!</h1>
                                <p className='block break-before-auto'>This is the home for all things musicals, plays, improv, and tech theatre at Sacred Heart Prep. Here you can learn more about who we are, what we do, and how you can get involved.</p>

                            </div>
                            <div className='hidden sm:flex flex-col sm:flex-row sm:w-full items-center w-full justify-around px-8 border-t-2 border-b-2 py-5'>
                                <h2 className='mb-3 sm:mb-0 sm:mr-5 max-w-xs text-xl text-neutral-600'>To get to know us, enjoy this highlight reel from the 2022-2023 school year.</h2>
                                <iframe className='sm:ml-5 aspect-video w-80 sm:w-96' title='vid' src='https://drive.google.com/file/d/1aYA9R7ugojfulDhkl5yxSIfplk_f26bl/preview' allow='fullscreen' />

                            </div>
                            <a target='_blank' href='https://youtu.be/0n65AwgV1Q0' className='block sm:hidden highlight text-neutral-50  rounded-full px-5 py-2 mt-5'>Get to know us. &nbsp; &rarr;</a>


                            <div className='flex flex-col justify-center items-center'>
                                {/* <iframe className='  w-full aspect-video overflow-hidden pointer-events-none' title='Into the Woods' src='https://public.vidigami.com/slideshows/dXNlcnw2MTA1MzE=/10fe1e375098d54cc4347881fa7567da1643ba65?delay=3500&autoplay=true&loop=true&transparent=false&mute=true&show_title=true' /> */}
                            </div>

                            <div className=' md:text-3xl py-10 text-neutral-600'>
                                Want to get involved?
                                <p className=' text-base block break-before-auto font-normal'>Check out these opportunities.</p>

                            </div>
                            <img src={opp} alt='opportunities' className=' aspect-vertical sm:w-[50%] object-fill border-4 border-spacing-0 border-highlight' />
                            {/* <Link to="/test" className='mt-5'>Go Test</Link> */}
                        </div>


                    </div>

                </div>
                <Footer />
            </>
        );
    }

}

export default Home;