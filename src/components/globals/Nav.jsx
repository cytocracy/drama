import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.png'
import './Nav.css'
//import fontawesome instagram icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Links from './Links.jsx'
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
class Nav extends React.Component {
    constructor(props) {
        //set state
        super(props);

        const { type } = props;

        let name = type === 0 ? 'nav-transparent' : 'nav-bg';

        this.state = {
            scrollPositionY: 0,
            class: name,
            dropdown: false
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleBg = this.toggleBg.bind(this);

        // this.home = this.home.bind(this);
    }
    listenScrollEvent = e => {
        if (window.scrollY > 50 || this.state.dropdown === true) {
            this.setState({ scrollPositionY: window.scrollY, class: 'nav-bg' })
        } else {
            this.setState({ scrollPositionY: window.scrollY, class: 'nav-transparent' })
        }
    }

    listenResizeEvent = e => {
        if (window.innerWidth > 640 && this.state.dropdown === true) {
            this.setState({ dropdown: false })
            if (this.props.type === 0 && window.scrollY <= 50) this.bgOff();
        }
    }

    async toggleDropdown() {
        console.log("toggle")
        await this.setState({ dropdown: !this.state.dropdown })
        if (this.props.type === 0 && window.scrollY <= 50) {
            this.toggleBg();
        }
    }

    toggleBg = () => {
        if (this.state.class === 'nav-transparent') {
            this.setState({ class: 'nav-bg', class2: 'site-name-scroll' })
        } else {
            this.setState({ class: 'nav-transparent', class2: 'site-name' })
        }
    }

    bgOn = () => {
        this.setState({ class: 'nav-bg', class2: 'site-name-scroll' })
    }

    bgOff = () => {
        this.setState({ class: 'nav-transparent', class2: 'site-name' })
    }


    // click(){
    //     window.scrollTo(0, 0)

    //     if (window.location.pathname === '/drama/' || window.location.pathname === '/drama' ) this.bgOn();
    //     else this.bgOff();
    //     this.setState({dropdown: false})
    //     console.log("click")
    // }



    componentDidMount() {
        if (this.props.type === 0) window.addEventListener('scroll', this.listenScrollEvent)
        window.addEventListener('resize', this.listenResizeEvent)
    }
    render() {
        const curr = window.location.pathname;
        return (
            <div>


                <div className={this.state.class}>

                    <div className='logo'>
                        <Link to="/" className='flex items-center'>
                            {/* image from mgs folder */}
                            <img src={logo} alt="logo" className=' h-10 rounded-lg' />
                            <p className={this.state.class === 'nav-transparent' ? 'site-name-hide' : 'site-name-scroll'}>SHP Drama</p>
                        </Link>

                    </div>

                    <div className='justify-self-end list-none hidden sm:flex w-[29rem] justify-between items-center sm:pr-5 links'>
                        <Links />
                        {/* <Link to="/social">Socials</Link>  */}

                        <a href='https://www.instagram.com/shp.drama/' className='flex items-center'>
                            {/* add fontawesome instagram icon */}
                            <FontAwesomeIcon icon={faInstagram} className=' h-6' />
                        </a>
                        {/* <a href='https://discord.gg/W8qvyghk83' className='flex items-center'>
                            <FontAwesomeIcon icon={faDiscord} className=' h-6' />
                        </a> */}

                        {/* <Link to="/test" >Test</Link>

                            <Link to="/about" >About</Link> */}

                    </div>

                    <div className='justify-self-end list-none flex sm:hidden items-center px-2' onClick={this.toggleDropdown}>
                        <FontAwesomeIcon icon={faBars} size='xl' />

                    </div>


                </div>
                <div className='sm:hidden'>
                    <div className={this.state.dropdown ? 'dropdown' : 'dropdown hide'}>


                        <div className='w-full flex flex-col fixed  highlight items-end pr-3 links'>
                            <Links />

                        </div>
                    </div>
                </div>



            </div>
        );
    }

}

export default Nav;