export const Ourteam = (props) => {
    return (
      <div id='ourteam' className='text-center'>
        <div className='container'>
          <div className='col-md-8 col-md-offset-2 section-title' style={{marginBottom: "20px"}}>
            <h2>Our Team</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p> */}
          </div>
          <div id='row'>
            {props.data
              ? props.data.map((d, i) => (
                <div class="card-container">
                  {/* <span class="pro">PRO</span> */}
                  <img
                    class="round"
                    src={d.img}
                    alt="user"
                  />
                  <h3>{d.name}</h3>
                  <h6>{d.res}</h6>
                  <div class="skills">
                  <ul>
                  <li>
                    <a href={d.facebook ? d.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={d.twitter ? d.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={d.youtube ? d.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
                  </div>
                </div>
                ))
              : 'loading'}
          </div>
        </div>
      </div>
    )
  }
  