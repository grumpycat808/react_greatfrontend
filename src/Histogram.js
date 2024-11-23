import React, { useEffect, useState } from 'react';
/** */
function Histogram(props) {
    useEffect(() => {
        async function getData() {
            const url = "https://www.random.org/integers/?num=200&min=1950&max=2019&col=1&base=10&format=plain";
            try {
              let response = await fetch(url);
              if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
              }
            //   response = JSON.stringify(response);
            
              const json = await response.text();
              console.log("JSON", json);
            // console.log("res", response)
            } catch (error) {
              console.error("Error: ", error.message);
            }
          }
          getData();
    }, [])
    const [data, setData] = useState([]);
    return (
        <div>
            
        </div>
    );
}

export default Histogram;