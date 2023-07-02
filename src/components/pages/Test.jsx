import React from 'react';
import { Link } from 'react-router-dom';

class Test extends React.Component {

    render() {
        return (
            <div>
                <h1>Test</h1>
                <Link to="/">Go Home</Link>
            </div>
        );
    }

}

export default Test;