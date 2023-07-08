//create notfound page

import React from 'react';
import { Link } from 'react-router-dom';
import meme1 from '../../imgs/IMG_5106.JPG'
import meme2 from '../../imgs/IMG_1956.JPEG'

class NotFound extends React.Component {

    render() {
        return (
            <div className='pt-[4rem]'>
                <h1 className=' p-5'>Uh Oh! This page doesn't exist. Enjoy some memes for your troubles.</h1>
                <div className='flex flex-col sm:flex-row justify-center'>   
                    <img src={meme1} alt='meme' className=' h-96' />
                    <img src={meme2} alt='meme' className='h-96'/>
                </div>
            </div>
        );
    }

}

export default NotFound;