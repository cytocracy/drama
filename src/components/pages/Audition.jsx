import React from 'react';
import { Link } from 'react-router-dom';
import splash from '../../imgs/IMG_0667.jpg'
import './Home.css'
import Nav from '../globals/Nav';

import Footer from '../globals/Footer';
import Faq from "react-faq-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import elf from '../../imgs/elfaudition.jpg'
import twelfth from '../../imgs/twelfth.png'
import rotten from '../../imgs/rotten.png'

import './Audition.css'


class Audition extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        const data = {
            title: "Audition FAQs",
            rows: [
                {
                    title: "Do I need to prepare anything?",
                    content: "At auditions, you will be asked to sing a song of your choice from a set of show numbers, and you will be asked to read a scene from the show. You may rehearse these pieces beforehand.",
                },
                {
                    title: "What are callbacks?",
                    content: "If the production team would like to see more of you after your audition, they may give you a callback for a specific role. Usually the day after auditions, callbacks are a time for the production team to see you in a more specific role. You will be given a song and a scene to prepare for callbacks. If you are given a callback, you will be notified by email. If you do not receive a callback, this does NOT mean you are not cast in the show. It simply means that the production team has seen what they need from you.",
                },
                {
                    title: "Am I guaranteed to be cast?",
                    content: "It depends. Based on the number of roles in each show and the amount of people that audition, we may not be able to cast everyone. If this is the case, the director will let you know leading up to or at auditions. Much of the time, we are able to cast everyone who auditions.",
                },
                
            ]
        }

        const styles = {
            bgColor: 'whitesmoke',
            rowContentPaddingTop: '15px',
            rowContentPaddingBottom: '15px',
            rowContentPaddingLeft: '50px',
            rowContentPaddingRight: '50px',

        }
        return (
            <>
                
                <div className="flex px-8 flex-col self-center items-center grow pt-[4rem] max-w-[80rem]">

                    <div>
                        <h1 className='text-5xl  pt-10 title'>Audition Information</h1>
                    </div>

                    <div className='flex md:w-[100%] h-full my-10 pt-0 justify-between md:flex-row flex-col items-center'>
                        <div className='elf flex flex-col items-center md:w-[33%]'>
                            <img src={elf} alt='flyer' className='aspect-vertical shadow-2xl w-[80%] object-fill border-4 border-spacing-0 border-highlight' />
                            <a href="https://docs.google.com/document/d/1K1EE0Fi4ezK_41QWyoXwyEIBYObnvT5JZREb77F3lno/edit" target="_blank" className=' w-56 block border-highlight text-highlight font-bold border-[3px] rounded-full px-5 py-2 mt-5 mb-10 w-fit'>Audition Info</a>

                        </div>
                        <div className='twelfth flex flex-col items-center md:w-[33%]'>
                            <img src={twelfth} alt='flyer' className=' aspect-vertical shadow-2xl w-[80%] object-fill border-4 border-spacing-0 border-highlight' />
                            <a href="https://drive.google.com/drive/folders/12DMrx0M0txnoApLJantiB_SGB_A6hzb4" target="_blank" className=' w-56 block border-highlight text-highlight font-bold border-[3px] rounded-full px-5 py-2 mt-5 mb-10 w-fit'>Audition Info</a>

                            
                        </div>
                        <div className='rotten flex flex-col items-center md:w-[33%]'> 
                            <img src={rotten} alt='flyer' className=' aspect-vertical shadow-2xl w-[80%] object-fill border-4 border-spacing-0 border-highlight' />
                            <a href="https://drive.google.com/drive/folders/12DMrx0M0txnoApLJantiB_SGB_A6hzb4" target="_blank" className=' w-56 block border-highlight text-highlight font-bold border-[3px] rounded-full px-5 py-2 mt-5 mb-10 w-fit'>Audition Info</a>

                        </div> 

                    </div>
                    <div className='faq max-w-[60rem]'>
                        <Faq
                            data={data}
                            styles={styles}
                        />
                    </div>
                    
                </div>
            </>
        );
    }

}

export default Audition;