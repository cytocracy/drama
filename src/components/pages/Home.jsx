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
            <div>
                <div className='splash h-screen w-screen bg-cover bg-top flex justify-center items-center'>
                    <h1 className='  text-slate-50 text-7xl p-5'>
                        Sacred Heart Prep Drama
                    </h1>
                </div>
                <h1 className=' mb-9  pt-20'>Home :</h1>
                
                <div className='flex justify-center'>
                    <iframe className='  w-full aspect-video overflow-hidden pointer-events-none' title='Into the Woods' src='https://public.vidigami.com/slideshows/dXNlcnw2MTA1MzE=/10fe1e375098d54cc4347881fa7567da1643ba65?delay=3500&autoplay=true&loop=true&transparent=false&mute=true&show_title=true' />


                </div>

                <Link to="/test">Go Test</Link>
            </div>
            <Footer />
            </>
        );
    }

}

export default Home;