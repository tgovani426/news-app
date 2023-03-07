import { useState } from "react";
import NewsContext from "./NewsContext";



const NewsState = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [newsIndex, setNewsIndex] = useState(0)
    return (
        <NewsContext.Provider value={{ open, setOpen, handleClose, handleOpen, newsIndex, setNewsIndex }}>
            {props.children}
        </NewsContext.Provider>
    )
}

export default NewsState