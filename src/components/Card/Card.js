import React, { useContext } from 'react'
import './Card.css'
import NewsContext from '../../context/NewsContext'

const Card = ({ image, heading, index }) => {
    const { handleOpen, setNewsIndex } = useContext(NewsContext)

    const handelClick = () => {
        handleOpen()
        setNewsIndex(index)
    }

    return (
        <>
            <div className='media' onClick={handelClick}>
                <img className='img' src={image} />
                <b className="title">{heading}</b>
            </div>
        </>
    )
}
export default Card 