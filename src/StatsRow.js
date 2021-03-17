import React from 'react'
import { db } from './firebase'
import './StatsRow.css'
import StockSVG from './stock.svg'
function StatsRow(props) {
    const percentage = ((props.price - props.openPrice) / props.openPrice) * 100
    const addStock = () => {
        db.collection('myStocks')
            .where('ticker', '==', props.name)
            .get().then(function (querySnapshot) {
                //update the record
                if (!querySnapshot.empty) {
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        db.collection('myStocks').doc(doc.id).update({
                            shares: doc.data().shares += 1
                        })
                    });
                }
                else {
                    console.log("not avalaible")
                }
            })
    }
    return (
        <div className="row" onClick={addStock}>
            <div className="row__intro">
                <h1>{props.name}</h1>
                <p>{props.shares && (props.shares + " shares")}</p>
            </div>
            <div className="row__chart">
                <img src={StockSVG} height={16} />
            </div>
            <div className="row__numbers">
                <p className="row__price">${props.price}</p>
                <p className="row__percentage">{Number(percentage).toFixed(2)}%</p>
            </div>
        </div>
    )
}

export default StatsRow