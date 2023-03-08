import news from '../../Data';
import './Modal.css'
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import { Grow } from '@mui/material';
import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import NewsContext from '../../context/NewsContext'


const Card_Modal = () => {
    const { open, handleClose, newsIndex } = useContext(NewsContext)
    return (
        <>
            <Backdrop open={open} onClick={handleClose} >
                <Modal
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    className='ContentModal'
                >
                    <Grow in={open}>
                        <Card style={{ backgroundColor: "#E16F7C" }}>
                            <CardHeader title={news[newsIndex].heading} />
                            <CardContent style={{ fontFamily: "monospace", fontSize: "17px" }} >
                                <div className="content">{news[newsIndex].content}</div>
                            </CardContent>
                        </Card>
                    </Grow>
                </Modal>
            </Backdrop >

        </>
    )
}
export default Card_Modal 