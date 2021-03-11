import React from 'react'
import './StatsRow.css'

function StatsRow(props) {
    return (
        <div className="row" >
            <div className="row__intro">
                <h1>{props?.name}</h1>
                <p>{props.volume &&
                    (props.volume + " shares")
                }</p>
            </div>
            <div className="row__chart">
                {/*  <img src={StockChart} height={16} />*/}
            </div>
            <div className="row__numbers">
                <p className="row__price">${props.price}</p>

            </div>
        </div>
    )
}

export default StatsRow