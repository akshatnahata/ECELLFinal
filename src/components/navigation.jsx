import { Link } from "react-router-dom"
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top '>
      <div className='container-nav'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='/#home'>
                <img className="brandlogo" src="img/E_Cell_Logo_Official-transparent.png" alt="Ecell Logo"/>
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
          <li>
              <a href="/#home" className='page-scroll'>
                Home
              </a>
          </li>
           <li>
              <a href='/#about' className='page-scroll'>
                About Us
              </a>
            </li>
            <li>
              <a href='/#whatWeDoContainer' className='page-scroll'>
                What We Do
              </a>
            </li>
            <li>
              <a href='/#events' className='page-scroll'>
                Events
              </a>
            </li>
            <li>
              <a href='/#partners' className='page-scroll'>
                Partners
              </a>
            </li>
            {/* <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li> */}
            <li>
              <a href='/#mentors' className='page-scroll'>
                Mentors/Investors
              </a>
            </li>
            <li>
              <Link to='/gallery' >
                Gallery
              </Link>
            </li>
            <li>
              <Link to='/team'>
                Team
              </Link>
            </li>
            <li>
              <a href='/#contact' className='page-scroll'>
                Contact Us
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
