import React from 'react';
import './Show.css'

class Show extends React.Component {
    //get props
    
    render() {
        let { name } = this.props;
        let { link } = this.props;
        let { date } = this.props;



        return (
            <div className='content w-full max-w-[80rem] flex flex-col items-center mb-20'>
                <div className="show w-[90%] sm:w-[60%]">
                    <h1 className=' text-3xl font-bold name'>{name}</h1>
                    <h1 className=' text-l text-neutral-600 date'>{date}</h1>
                    <div className='test border-[3px] border-highlight mt-5'>

                        <iframe className='' title={name} src={link} />
                    </div>
                </div>

            </div>
        )
    }
}

export default Show;