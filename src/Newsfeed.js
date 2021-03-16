import './Newsfeed.css'
import React, { useState } from 'react'
import LineGraph from './LineGraph'
import TimeLine from './TimeLine'
import { Avatar } from '@material-ui/core'
import Chip from '@material-ui/core/Chip'



function Newsfeed() {
    const [popularTopics, setpopularTopics] = useState([
        "Technology",
        "Top Movies",
        "Upcoming Earnings",
        "Crypto",
        "Cannabis",
        "Healthcare Supplies",
        "Index ETFs",
        "Technology",
        "China",
        "Pharma",
    ])
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
                <div className='newsfeed__buying__section'>
                    <h2>Buying Power</h2>
                    <h2>$4.11</h2>
                </div>
                <div className='newsfeed__market__section'>
                    <div className='newsfeed__market__box'>
                        <p>Markets Closed</p>
                        <h1>Happy Thanksgiving</h1>
                    </div>
                </div>
                <div className="newsfeed__popularlists__section">
                    <div className="newsfeed__popularlists__intro">
                        <h1>Popular lists</h1>
                        <p>Show More</p>
                    </div>
                    <div className="newsfeed_popularlists_badges">
                        {popularTopics.map((topic) => (
                            <Chip
                                id="topic__badge"
                                variant="outlined"
                                label={topic}
                                avatar={<Avatar
                                    src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                                />}
                                key={topic}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Newsfeed
