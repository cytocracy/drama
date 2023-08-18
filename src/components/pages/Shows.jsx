import React from 'react';
import './Shows.css'
import Show from '../Show.jsx'
import InfiniteScroll from 'react-infinite-scroll-component';

class Shows extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            shows: [
                <Show
                    name='Into the Woods'
                    date='May 2023'
                    link='https://public.vidigami.com/slideshows/dXNlcnw2MTA1MzE=/10fe1e375098d54cc4347881fa7567da1643ba65?delay=3500&autoplay=true&loop=true&transparent=false&mute=true&show_title=true'
                />,
                <Show
                    name='The Sound of Music'
                    date='January 2023'
                    link='https://public.vidigami.com/slideshows/dXNlcnw2MTA1MzE=/985be069542baeeafa2a7ce7fd2436ad6c6352f1?delay=3500&autoplay=true&loop=true&transparent=false&mute=true&show_title=true'
                />,
                <Show
                    name='Legally Blonde'
                    date='Spring 2022'
                    link='https://public.vidigami.com/slideshows/dXNlcnw2MTA1MzE=/81b1385079153ce551621251d7daba41e5c8c12b?delay=3500&autoplay=true&loop=true&transparent=false&mute=true&show_title=true'
                />,
                <Show
                    name='Eurydice'
                    date='Fall 2021'
                    link='https://public.vidigami.com/slideshows/dXNlcnw2MTA1MzE=/0e765e32370075c78f4987864ea95c57ea658fe9?delay=3500&autoplay=true&loop=true&transparent=false&mute=true&show_title=true'
                />,

            ],
            activeShows: [],
            hasMore: true
        }
        this.state.activeShows.push(this.state.shows[0]);

        this.fetchMoreData = this.fetchMoreData.bind(this);
        this.hasMore = this.hasMore.bind(this);
    }

    fetchMoreData = () => {
        
        if (this.state.activeShows.length === this.state.shows.length) {
            this.setState({ hasMore: false });
            return;
        }
        let newIndex = this.state.activeShows.length;
        setTimeout(() => {
            this.setState({
                activeShows: this.state.activeShows.concat(this.state.shows[newIndex])
            });
        }, 200)
    }

    hasMore = () => {
        let val = this.state.index < this.state.shows.length;
        console.log('has more: ' + val)
        return val
    }




    render() {
        return (

            <div className="page flex flex-col w-full pt-[6rem] items-center">
                {/* <div className='content w-full max-w-[80rem] flex flex-col items-center mb-20'> */}
                    <InfiniteScroll
                        dataLength={this.state.activeShows.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.hasMore}
                        loader={<h4 className=''>Loading...</h4>}
                        endMessage={
                            <p style={{ textAlign: "center" }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                        {this.state.activeShows.map((i, index) => (
                            <div className='flex flex-col items-center'>
                                {i}
                            </div>
                        ))}
                    </InfiniteScroll>

                {/* </div> */}





            </div>
        )
    }
}

export default Shows;