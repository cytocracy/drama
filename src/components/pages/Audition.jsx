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