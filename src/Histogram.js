import React, { useEffect, useState } from 'react'
/** */

import './histogram.css'
function Histogram() {
    const [data, setData] = useState([])
    const [yAxis, setYAxis] = useState([])
    const [tabulated, setTabulated] = useState({})
    const convertToArray = (data) => {
        const numArr = []
        data.forEach((element) => {
            numArr.push(parseInt(element, 10))
        })

        setData(numArr)
        tabulateData(numArr)
    }

    const getYAxis = (numArr) => {
        const yAxis = [0]
        const values = Object.values(numArr)

        const max = Math.round(Math.max(...values) / 10) * 10

        for (let index = 10; index <= max; index = index + 10) {
           
            yAxis.push(index)
        }

        if (Math.max(...values) > max) {
            yAxis.push(max + 10)
        }
        console.log("yAxis", yAxis)
        return yAxis
    }
    const tabulateData = (numArr) => {
        const reduced = numArr.reduce((accumulator, number) => {
            const decade = Math.round(number / 10) * 10

            if (accumulator.hasOwnProperty(decade)) {
                accumulator[decade] = accumulator[decade] + 1
            } else {
                accumulator[decade] = 1
            }
            return accumulator
        }, {})
        setTabulated(reduced)
    }

    useEffect(() => {
        async function getData() {
            const url =
                'https://www.random.org/integers/?num=200&min=1950&max=2019&col=1&base=10&format=plain'
            try {
                let response = await fetch(url)
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`)
                }

                let json = await response.text()
                let arr = json.trim().split(/\r?\n/)
                convertToArray(arr)
            } catch (error) {
                console.error('Error: ', error.message)
            }
        }
        getData()
    }, [])
    useEffect(() => {
        const yAxis = getYAxis(tabulated)
        getHeightOfBar(19)
        setYAxis(yAxis)
    }, [tabulated])

    const getHeightOfBar = (value) => {

        const max =  (yAxis.length - 1) * 50 ;
        const percentage = value/Math.max(...yAxis);
        
        return percentage * max + "px";
    }
    return (
        <div className="wrapper">
            <div className="y-axis" style={{height: (yAxis.length - 1) * 50 + "px"}}>
                {yAxis.map((item) => (
                    <span>{item}</span>
                ))}
            </div>
            <div className="container">
                <div className="table" style={{height: (yAxis.length - 1) * 50 + "px"}}>
                    <div className="values">
                        {Object.values(tabulated).map((value, i) => (
                            <span className='values' style={{height:  getHeightOfBar(value)}} key={i}>{value}</span>
                        ))}
                    </div>
                </div>
                <div className="x-axis">
                    {Object.keys(tabulated).map((decade, i) => (
                        <span className="x" key={i}>
                            {decade}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Histogram
