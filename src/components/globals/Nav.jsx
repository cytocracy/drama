import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.png'
import './Nav.css'
//import fontawesome instagram icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Links from './Links.jsx'
class Nav extends React.Component {
    constructor(props) {
        //set state
        super(props);

        const curr = window.location.pathname;
        console.log(curr)
        let name = curr === '/drama/' ? 'nav-transparent' : 'nav-bg';
       
        this.state = {
            scrollPositionY: 0,
            class: name,
            class2: 'site-name',
            dropdown: false
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleBg = this.toggleBg.bind(this);

        // this.home = this.home.bind(this);
    }
    listenScrollEvent = e => {
        if (window.scrollY > 50 || window.location.pathname !== '/drama' || this.state.dropdown === true){
            this.setState({scrollPositionY: window.scrollY, class: 'nav-bg', class2: 'site-name-scroll'})
        } else {
            this.setState({scrollPositionY: window.scrollY, class: 'nav-transparent', class2: 'site-name'})
        }
    }

    listenResizeEvent = e => {
        if (window.innerWidth > 640 && this.state.dropdown === true){
            this.setState({dropdown: false})
            if (window.location.pathname === '/drama' ) this.bgOff();
        }
    }

    async toggleDropdown() {
        console.log("toggle")
        await this.setState({dropdown: !this.state.dropdown})
        if (this.state.dropdown === true){
            this.bgOn()
            console.log("on");
        } else {
            this.bgOff()
        }
    }

    toggleBg = () => {
        if (this.state.class === 'nav-transparent'){
            this.setState({class: 'nav-bg', class2: 'site-name-scroll'})
        } else {
            this.setState({class: 'nav-transparent', class2: 'site-name'})
        }
    }

    bgOn = () => {
        this.setState({class: 'nav-bg', class2: 'site-name-scroll'})
    }

    bgOff = () => {
        this.setState({class: 'nav-transparent', class2: 'site-name'})
    }


    click(){
        window.scrollTo(0, 0)
        if (window.location.pathname === '/drama' ) this.bgOn();
        else this.bgOff();
        this.setState({dropdown: false})
        console.log("click")
    }

    

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
        window.addEventListener('resize', this.listenResizeEvent)
    }
    render() {
        const curr = window.location.pathname;
        return (
            <div>

                
                <div className={this.state.class}>

                    <div className='logo'>
                        <Link to="/" onClick={() => this.click()} className='flex items-center'>
                        {/* image from mgs folder */}
                            <img src={logo} alt="logo" className=' w-10' />
                                <p className={this.state.class === 'nav-transparent' ? 'site-name-hide' : 'site-name-scroll'}>SHP Drama</p>
                        </Link>
                        
                    </div>
                    
                    <div className='justify-self-end list-none hidden sm:flex w-[27rem] justify-between items-center sm:pr-5 links'>
                            <Links click={() => this.click()}/>
                            {/* <Link to="/social">Socials</Link>  */}

                            <a href='https://www.instagram.com/shp.drama/' className='flex items-center'>
                                {/* add fontawesome instagram icon */}
                                <FontAwesomeIcon icon={faInstagram} className=' h-6'/>
                            </a>
                        
                            {/* <Link to="/test" >Test</Link>

                            <Link to="/about" >About</Link> */}
                        
                    </div>

                    <div className='justify-self-end list-none flex sm:hidden items-center px-2' onClick={this.toggleDropdown}>
                            <FontAwesomeIcon icon={faBars} size='xl' />
                    
                    </div>
                    

                </div>
                <div className='sm:hidden'>
                    <div className={this.state.dropdown ? 'dropdown' : 'dropdown hide'}>
                        <line className='w-full h-[1px] bg-gray-900 pr-[-.75rem] z-50' />

                        <div className='w-full flex flex-col fixed  highlight items-end pr-3 links'>
                            <Links click={() => this.click()}/>

                        </div>
                    </div>
                </div>
                
            
                
            </div>
        );
    }

}

export default Nav;