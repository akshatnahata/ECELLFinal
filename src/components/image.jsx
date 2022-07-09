// import { Link } from "react-router-dom"

export const Image = ({ title, link, image }) => {
  return (
    <div className='partners-item' >
      {/* <div className='hover-bg'> */}
        {/* {' '} */}
        <a
          href={link}
          title={title}
          rel="noreferrer"
          target="_blank"
        >
          {/* <div className='hover-text'>
            <h4>{title}</h4>
          </div> */}
          <img
            src={image}
            className='img-responsive'
            alt={title}
          />{' '}
        </a>{' '}
      {/* </div> */}
    </div>
  )
}