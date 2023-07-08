import React from 'react';
import { Link } from 'react-router-dom';
import './Links.css'


class Links extends React.Component {

    render() {
        const { click } = this.props;
        return (
            
            <>
                <Link to="/" onClick={click} >Home</Link>
                <Link to="/events" onClick={click}>Events</Link>
                <Link to="/audition" onClick={click}>Audition Info</Link>
                <Link to="/shows" onClick={click}>Past Shows</Link>
            </>
            
        )
    }
}

export default Links;