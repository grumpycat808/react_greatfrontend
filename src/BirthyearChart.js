import React, { useEffect, useState } from 'react'

function BirthyearChart(props) {
    const COUNT = 200
    const MIN = 1950
    const MAX = 2019
    const url = `https://www.random.org/integers/?num=${COUNT}&min=${MIN}&max=${MAX}&col=1&base=10&format=plain&rnd=new`
    const [data, setData] = useState([])
    useEffect(() => {
        getData()
    }, [])


    async function getData() {
        
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
      
          const json = await response.json();
          console.log(json);
        } catch (error) {
          console.error(error.message);
        }
      }
    return <div></div>
}

export default BirthyearChart
