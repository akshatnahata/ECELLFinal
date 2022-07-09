import { Fade } from 'react-reveal';
export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <Fade bottom>
                  <h1>
                    {props.data ? props.data.title : 'Loading'}
                    <br />
                    {/* {props.data ? props.data.subtitle : 'Loading' } */}
                    <span></span>
                  </h1>
                  <p id="IITI">{props.data ? props.data.paragraph : 'Loading'}</p>
                  <p id="quote">"{props.data ? props.data.paragraph2 : 'Loading'}"</p>
                  <a
                    href='#about'
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    Learn More
                  </a>{' '}
                </Fade>
              </div>
            </div>
          </div>
              <ul className="social-media-list">
                <a rel="noreferrer" target="_blank" href={props.data ? props.data.facebook : '/'}>
                  <li>
                    <i className="fa fa-facebook-square"></i>
                  </li>
                </a>
                <a rel="noreferrer" target="_blank" href={props.data ? props.data.twitter : '/'}>
                  <li>
                    <i className="fa fa-twitter-square"></i>
                  </li>
                </a>
                <a rel="noreferrer" target="_blank" href={props.data ? props.data.instagram : '/'}>
                  <li>
                    <i className="fa fa-instagram"></i>
                  </li>
                </a>
                <a rel="noreferrer" target="_blank" href={props.data ? props.data.linkedin : '/'}>
                  <li>
                    <i className="fa fa-linkedin-square"></i>
                  </li>
                </a>
              </ul>
        </div>
      </div>
    </header>
  )
}
