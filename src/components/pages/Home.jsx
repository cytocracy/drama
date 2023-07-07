import React from 'react';
import { Link } from 'react-router-dom';
import splash from '../../imgs/IMG_0667.jpg'
import './Home.css'


class Home extends React.Component {


    render() {
        return (
            <div>
                <div className='splash h-screen w-screen bg-cover flex justify-center items-center'>
                    <h1 className='  text-slate-50 text-7xl'>
                        Sacred Heart Prep Drama
                    </h1>
                </div>
                {/* <img src={splash} alt='pic' className=' object-cover'></img> */}
                <h1 className=' mb-9  pt-20'>Home :</h1>
                
                <div className='flex justify-center'>
                    <iframe className='  h-80 aspect-video pointer-events-none' title='Into the Woods' src='https://public.vidigami.com/slideshows/dXNlcnw2MTA1MzE=/10fe1e375098d54cc4347881fa7567da1643ba65?delay=3500&autoplay=true&loop=true&transparent=false&mute=true&show_title=true' />


                </div>

                <Link to="/test">Go Test</Link>
            </div>
        );
    }

}

export default Home;