import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid'
async function getData() {
    const url = 'https://hacker-news.firebaseio.com/v0/jobstories.json'
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const json = await response.json()
        return json
    } catch (error) {
        console.error(error.message)
    }
}

function getJobDetails(jobIDsArr) {
    const url = `https://hacker-news.firebaseio.com/v0/item/{id}.json`
    console.log('jobIDsArr', jobIDsArr)
    const fetchArr = []
    for (let index = 0; index < jobIDsArr.length; index++) {
        const id = jobIDsArr[index]

        fetchArr.push(
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`),
        )
    }

    return Promise.all(fetchArr)
}
function JobBoard2() {
    const [jobIDs, setJobIDs] = useState([])
    const [displayed, setDisplayed] = useState(0)
    const [jobDetails, setJobDetails] = useState([])
    useEffect(() => {
        getData()
            .then((res) => {
                setJobIDs(res)
                return getJobDetails(res.slice(0, 6))
            })
            .then((res) => {
                const responseArr = []
                res.forEach((item) => responseArr.push(item.json()))
                return Promise.all(responseArr)
            })
            .then((res) => setJobDetails(res))
    }, [])

    useEffect(() => {
        getJobDetails(jobIDs.slice(displayed, displayed + 6))
            .then((res) => {
                const responseArr = []
                res.forEach((item) => responseArr.push(item.json()))
                return Promise.all(responseArr)
            })
            .then((res) => setJobDetails([...jobDetails, ...res]))
    }, [displayed])
    return (
        <div>
            {jobDetails.length &&
                jobDetails.map((item) => {
                    return <p key={v4()}>{item.title}</p>
                })}
            <button onClick={() => setDisplayed(displayed + 6)}>
                Load More
            </button>
        </div>
    )
}

export default JobBoard2
