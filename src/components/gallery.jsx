import React from "react"
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Fade } from "react-reveal";

export const Gallery = (props) => {

    const [modal, setModal] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

    const getImg = (img) => {
        setImgSrc(img);
        setModal(true);
        console.log(`${imgSrc}`);
    }
    return (

        <div id="gallery" >
            <div className='intro-ourteam'>
                <div className='overlay-ourteam'>
                <div className='container'>
                    <div className='row'>
                    <div className='col-md-8 col-md-offset-2 intro-text'>
                        <Fade bottom>
                        <h1>
                            Gallery {' '}
                            <span className="team-hero-year"></span>
                        </h1>
                        </Fade>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className={modal ? "modal isOpen" : "modal"}>
                <img src={imgSrc} alt="Opened" />
                <CloseIcon onClick={() => setModal(false)}/>
            </div>
            <div className="gallery">
                {props.data
                    ? props.data.map((d, i) => (
                        <div key={`${d.id}-${i}`} className='pics' onClick={() => getImg(d.img)}>
                            <img src={d.img} alt={`${i}`} style={{ width: '100%' }} />
                        </div>
                    ))
                    : 'Loading...'}
            </div>
        </div>
    )
}