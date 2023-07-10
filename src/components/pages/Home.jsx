import React from 'react';
import { Link } from 'react-router-dom';
import splash from '../../imgs/IMG_0667.jpg'
import './Home.css'
import Nav from '../globals/Nav';
import Footer from '../globals/Footer';


class Home extends React.Component {


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
                        <div className='pagecontent max-w-6xl flex flex-col justify-center items-center'>
                            <div className='flex flex-col justify-center self-center items-center py-10 px-2 max-w-xl'>
                                <h1 className=' mb-9 text-3xl text-neutral-600'>Welcome to Sacred Heart Prep Drama!</h1>
                                <p>This is the home for all things musicals, plays, improv, and tech theatre at Sacred Heart Prep. Here you can learn more about who we are, what we do, and how you can get involved.</p>

                            </div>
                            <div className='flex items-center justify-around w-full px-8'>
                                <h2 className='mr-10 max-w-xs'>To get to know us, enjoy this highlight reel from the 2022-2023 school year.</h2>
                                <iframe className='aspect-video w-96' title='vid' src='https://drive.google.com/file/d/1aYA9R7ugojfulDhkl5yxSIfplk_f26bl/preview' allow='fullscreen' />

                            </div>


                            <div className='flex flex-col justify-center items-center'>
                                {/* <iframe className='  w-full aspect-video overflow-hidden pointer-events-none' title='Into the Woods' src='https://public.vidigami.com/slideshows/dXNlcnw2MTA1MzE=/10fe1e375098d54cc4347881fa7567da1643ba65?delay=3500&autoplay=true&loop=true&transparent=false&mute=true&show_title=true' /> */}


                            </div>

                            <Link to="/test">Go Test</Link>
                        </div>


                    </div>

                </div>
                <Footer />
            </>
        );
    }

}

export default Home;