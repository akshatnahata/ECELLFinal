import React from "react"

export const Gallery = (props) => {
    const getImg = (img) => {
        console.warn(img);
    }
    return (
        <div className="gallery">
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.id}-${i}`} className='pics' onClick={() => getImg(d.img)}>
                  <img src={d.img} alt={`${i}`} style={{ width: '100%' }}/>
                </div>
              ))
              : 'Loading...'}
        </div>
    )
}