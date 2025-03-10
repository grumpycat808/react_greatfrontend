import { useState } from 'react'

import StarRating2 from './StarRating2'
import Game from './ticTacToe/Game'
import TransferList from './ticTacToe/TransferList'
const images = [
    {
        src: 'https://picsum.photos/id/600/600/400',
        alt: 'Forest',
    },
    {
        src: 'https://picsum.photos/id/100/600/400',
        alt: 'Beach',
    },
    {
        src: 'https://picsum.photos/id/200/600/400',
        alt: 'Yak',
    },
    {
        src: 'https://picsum.photos/id/300/600/400',
        alt: 'Hay',
    },
    {
        src: 'https://picsum.photos/id/400/600/400',
        alt: 'Plants',
    },
    {
        src: 'https://picsum.photos/id/500/600/400',
        alt: 'Building',
    },
]

export default function App() {
    const [message, setMessage] = useState('Image Carousel')
    const grid = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]

    return (
        <div className="main">
            <TransferList></TransferList>
        </div>
    )
}
