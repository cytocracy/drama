import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.png'
import './Nav.css'
//import fontawesome instagram icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

class Nav extends React.Component {
    constructor(props) {
        //set state
        super(props);

       
        this.state = {
            scrollPositionY: 0,
            class: 'nav-transparent',
            class2: 'site-name'
        }

        // this.home = this.home.bind(this);
    }
    listenScrollEvent = e => {
        if (window.scrollY > 50 || window.location.pathname !== '/drama'){
            this.setState({scrollPositionY: window.scrollY, class: 'nav-bg', class2: 'site-name-scroll'})
        } else {
            this.setState({scrollPositionY: window.scrollY, class: 'nav-transparent', class2: 'site-name'})
        }
    }

    home(){
        window.scrollTo(0, 0)
        this.setState({class: 'nav-transparent', class2: 'site-name'})
        console.log("home")
    }

    

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)

    }
    render() {
        return (
            <div className={this.state.class}>

                <div className='logo'>
                    <Link to="/" onClick={() => this.home()} className='flex items-center'>
                       {/* image from mgs folder */}
                          <img src={logo} alt="logo" className=' w-10' />
                            <p className={this.state.class2}>SHP Drama</p>
                    </Link>
                    
                </div>
                
                <div className='justify-self-end list-none flex w-[27rem] justify-between items-center pr-5'>
                    
                        <Link to="/" onClick={() => this.home()}>Home</Link>
                        <Link to="/events">Events</Link>
                        <Link to="/audition">Audition Info</Link>
                        {/* <Link to="/social">Socials</Link>  */}

                        <a href='https://www.instagram.com/shp.drama/' className='flex items-center'>
                            {/* add fontawesome instagram icon */}
                            <FontAwesomeIcon icon={faInstagram} className=' h-6'/>
                        </a>
                    
                        {/* <Link to="/test" >Test</Link>

                        <Link to="/about" >About</Link> */}
                    
                </div>
                

            </div>
            
        );
    }

}

export default Nav;