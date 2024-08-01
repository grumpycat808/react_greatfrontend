import { useEffect, useState } from 'react'
import { v4 } from 'uuid'
async function getData() {
    const url = 'https://hacker-news.firebaseio.com/v0/jobstories.json'

    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const json = await response.json()
        console.log(json)
        return json
    } catch (error) {
        console.error(error.message)
    }
}

function getJobDetails(arrayOfIds) {
    // `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    try {
        let promiseArr = []
        arrayOfIds.forEach((id) => {
            promiseArr.push(
                fetch(
                    `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
                ).then((res) => res.json()),
            )
        })
        return Promise.all(promiseArr)
    } catch (error) {
        console.error(error.message)
    }
}
export default function JobBoard() {
    const [jobIDs, setJobIDs] = useState([])
    const [displayed, setDisplayed] = useState(0)
    const [jobsArray, setJobsArray] = useState([])
    useEffect(() => {
        getData().then((res) => {
            setJobIDs(res)
        })
    }, [])

    useEffect(() => {
        // getJobDetails
        const rangeOfIDs = jobIDs.slice(displayed, displayed + 6)
        getJobDetails(rangeOfIDs).then((res) =>
            setJobsArray([...jobsArray, ...res]),
        )
    }, [displayed, jobIDs])
    return (
        <div>
            <button onClick={() => setDisplayed(displayed + 6)}>
                Load More
            </button>
            {jobsArray.map((item) => (
                <div key={v4()}>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    )
}
