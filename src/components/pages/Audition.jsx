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
                    content: "Yeah lmao better be good too",
                },
                {
                    title: "What are callbacks?",
                    content: "Callbacks are a second round of auditions where we will ask you to do some more stuff",
                },
            ]
        }

        const styles = {
            bgColor: 'whitesmoke',
        }

        return (
            <>
                <div className="flex px-4 flex-col items-center justify-center grow w-full pt-[4rem]">
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