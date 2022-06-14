import { Image } from "./image";

export const Partners = (props) => {
  return (
    <div id='partners' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2 className="partners-title" >Our Previous Partners</h2>
          {/* <p>
            We were glad to collaborate with the following Partners to make our events a Grand Success...
          </p> */}
        </div>
        <div className='row'>
          <div className='partners-items'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} link={d.link} image={d.image} />
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}
