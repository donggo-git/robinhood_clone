import './Newsfeed.css'
import React from 'react'
import LineGraph from './LineGraph'
import TimeLine from './TimeLine'
function Newsfeed() {
    return (
        <div className='newsfeed'>
            <div className='newsfeed_container'>
                <div className='newsfeed_chartSection'>
                    <div className='newsfeed_portfolio'>
                        <h1>$114,656</h1>
                        <p>+44.63(+0.44%) Today</p>
                    </div>
                    <div className='newsfeed_char'>
                        <LineGraph />
                        <TimeLine />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed
