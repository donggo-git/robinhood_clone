import React from 'react'
import './Stats.css'
function Stats() {
    return (
        <div className='stats' >
            {/*our current stock */}
            <div className='stats_container'>
                <div className='stats_header'>
                    <p>Stocks</p>
                </div>
                <div className='stats_content'>
                    <div className='stats_rows'>

                    </div>
                </div>
                {/**stock we can buy */}
                <div className='stats_header'>
                    <p>List</p>
                </div>
                <div className='stats_content'>
                    <div className='stats_rows'>

                    </div>
                </div>
            </div>
        </ div>
    )
}

export default Stats
