import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.png'
import './Nav.css'

class Nav extends React.Component {
    constructor(props) {
        //set state
        super(props);
        this.state = {
            scrollPositionY: 0,
            class: 'nav'
        }
    }
    listenScrollEvent = e => {
        if (window.scrollY > 50){
            this.setState({scrollPositionY: window.scrollY, class: 'nav-scroll'})
        } else {
            this.setState({scrollPositionY: window.scrollY, class: 'nav'})
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }
    render() {
        return (
            <div className={this.state.class}>

                <div className='logo'>
                    <Link to="/">
                       {/* image from mgs folder */}
                          <img src={logo} alt="logo" className=' w-10' />

                    </Link>
                </div>
                
                <div className='justify-self-end list-none flex w-96 justify-between items-center pr-5'>
                    
                        <Link to="/" >Home</Link>
                        <Link to="/events">Events</Link>
                        <Link to="/audition">Audition Info</Link>
                        <Link to="/social">Socials</Link>
                    
                        {/* <Link to="/test" >Test</Link>

                        <Link to="/about" >About</Link> */}
                    
                </div>
                

            </div>
            
        );
    }

}

export default Nav;