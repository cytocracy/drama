import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.png'

class Nav extends React.Component {

    render() {
        return (
            <div className='highlight p-4 text-slate-50 flex justify-between max-h-20 fixed w-full'>

                <div className='logo'>
                    <Link to="/">
                       {/* image from mgs folder */}
                          <img src={logo} alt="logo" className=' w-10' />

                    </Link>
                </div>
                
                <div className='justify-self-end list-none flex w-[40%] justify-around items-center'>
                    
                        <Link to="/" >Home</Link>
                    
                        <Link to="/test" >Test</Link>
                    
                </div>
                

            </div>
            
        );
    }

}

export default Nav;