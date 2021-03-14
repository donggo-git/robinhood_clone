import React, { useState, useEffect } from 'react'
import './Stats.css'
import axios from 'axios'
import StatsRow from './StatsRow'
import { db } from './firebase'
const TOKEN = 'c13vjtf48v6s4a2e03kg'
const BASE_URL = 'https://finnhub.io/api/v1/quote'
function Stats() {
    const [stocksData, setStocksData] = useState([])
    const [myStocks, setMyStocks] = useState([])
    const getStocksData = (stock) => {
        return axios
            .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
            .catch((error) => {
                console.error("Error", error.message)
            })
    }
    const getMyStocks = () => {
        db
            .collection('myStocks')
            .onSnapshot(snapshot => {

                let promises = [];
                let tempData = []
                snapshot.docs.map((doc) => {

                    promises.push(getStocksData(doc.data().ticker)
                        .then(res => {
                            tempData.push({
                                id: doc.id,
                                data: doc.data(),
                                info: res.data
                            })
                        })
                    )
                })
                Promise.all(promises).then(() => {
                    setMyStocks(tempData);
                })
            })
    }
    useEffect(() => {
        let temStockData = []
        const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];

        let promises = [];
        getMyStocks();

        stocksList.map((stock) => {
            promises.push(
                getStocksData(stock)
                    .then((res) => {
                        temStockData.push({
                            name: stock,
                            ...res.data
                        });
                    })
            )
        });

        Promise.all(promises).then(() => {

            setStocksData(temStockData);
        })
    }, [])
    return (
        <div className='stats' >
            {/*our current stock */}
            <div className='stats_container'>
                <div className='stats_header'>
                    <p>Stocks</p>
                </div>
                <div className='stats_content'>
                    <div className='stats_rows'>
                        {myStocks.map((stock) => (
                            <StatsRow
                                key={stock.data.ticker}
                                name={stock.data.ticker}
                                openPrice={stock.info.o}
                                price={stock.info.c}
                                shares={stock.data.shares}

                            />

                        ))}
                    </div>
                </div>
                {/**stock we can buy */}
                <div className='stats_header stats__list'>
                    <p>List</p>
                </div>
                <div className='stats_content'>
                    <div className='stats_rows'>
                        {stocksData.map((stock) => (
                            <StatsRow
                                key={stock.name}
                                name={stock.name}
                                openPrice={stock.o}
                                price={stock.c}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </ div>
    )
}

export default Stats
