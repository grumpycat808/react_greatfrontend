import React, { useEffect, useState } from 'react'
/** */
function Histogram() {
    const convertToArray = (data) => {
        const numArr = []
        data.forEach((element) => {
            numArr.push(parseInt(element, 10))
        })
        
        setData(numArr)
        tabulateData(numArr)
    }

    const tabulateData = (numArr) => {
        const min = Math.round(Math.min(...numArr) / 10) * 10
        const max = Math.round(Math.max(...numArr) / 10) * 10
        
        const reduced = numArr.reduce((accumulator, number) => {
            const decade = Math.round(number / 10) * 10
            console.log("number", number)
            if (accumulator.hasOwnProperty(decade)) {
                accumulator[decade] = accumulator[decade] + 1;
            } else {
                accumulator[decade] = 1;
            }
            return accumulator
        }, {})
        console.log('reduced', reduced)
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

    const [data, setData] = useState([])
    return (
        <div>
            {data.map((item, i) => (
                <p key={i}>{item}</p>
            ))}
        </div>
    )
}

export default Histogram
