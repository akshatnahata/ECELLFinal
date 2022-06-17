export const WhatWeDo = (props) => {
  return (
    <div id='whatWeDoContainer' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>What we do?</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='whatWeDo col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='whatWeDo-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
