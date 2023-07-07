import React from 'react';
import { Link } from 'react-router-dom';
import splash from '../../imgs/IMG_0667.jpg'
import './Home.css'


class Home extends React.Component {

    render() {
        return (
            <div>
                <div className='splash h-screen w-screen bg-cover flex justify-center items-center'>
                    <h1 className='  text-slate-50 text-8xl'>
                        Sacred Heart Prep Drama
                    </h1>
                </div>
                {/* <img src={splash} alt='pic' className=' object-cover'></img> */}
                <h1 className=' mb-[100%]  pt-20'>Home</h1>
                <Link to="/test">Go Test</Link>
            </div>
        );
    }

}

export default Home;