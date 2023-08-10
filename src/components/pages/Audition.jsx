import React from 'react';
import { Link } from 'react-router-dom';
import splash from '../../imgs/IMG_0667.jpg'
import './Home.css'
import Nav from '../globals/Nav';

import Footer from '../globals/Footer';
import Faq from "react-faq-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class Audition extends React.Component {

    constructor(props) {
        super(props);
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
                    content: "Callbacks are a second round of auditions where we will ask you to do some more stuff",
                },
                {
                    title: "Am I guaranteed to be cast?",
                    content: "It depends. Based on the number of roles in each show and the amount of people that audition, we may not be able to cast everyone. If this is the case, the director will let you know leading up to or at auditions. Much of the time, we are able to cast everyone who auditions.",
                },
                
            ]
        }

        const styles = {
            bgColor: 'whitesmoke',
        }

        return (
            <>
                <div className="flex px-8 flex-col self-center items-center grow pt-[4rem] max-w-[60rem]">
                    <div clasName='faq'>
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