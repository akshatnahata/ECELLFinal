import { Bounce, Fade, Zoom } from "react-reveal";
export const Ourteam = (props) => {
  return (
    <div id="ourteam" className="text-center">
      <div className='intro-ourteam'>
        <div className='overlay-ourteam'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <Fade bottom>
                  <h1>
                     E-CELL TEAM {' '}
                     <span className="team-hero-year">2022-23</span>
                  </h1>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="col-md-8 col-md-offset-2 section-title"
          style={{ marginBottom: "20px" }}
        >
          <Fade bottom>
            <h2>Sponsorship and Marketing Team</h2>
          </Fade>
          
          {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p> */}
        </div>
        <Fade>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
              <div class="card-container">
                  {d.isHead && <div className="card--badge">Head</div>}
                  <img class="round" src={d.img} alt="user" />
                  <Bounce right>
                  <h3>{d.name}</h3>
                  <h6>{d.res}</h6>
                </Bounce>
                  <div class="skills">
                <Zoom cascade>
                    <ul>
                      <a target="_blank" href={d.facebook ? d.facebook : "/"}>
                        <li>
                          <i className="fa fa-facebook"></i>
                        </li>
                      </a>
                      <a target="_blank" href={d.twitter ? d.twitter : "/"}>
                        <li>
                          <i className="fa fa-twitter"></i>
                        </li>
                      </a>
                      <a target="_blank" href={d.youtube ? d.youtube : "/"}>
                        <li>
                          <i className="fa fa-youtube"></i>
                        </li>
                      </a>
                    </ul>
                  </Zoom>
                  </div>
                </div>
              ))
              : "loading"}
              </div>
        </Fade>      
      </div>
      <div className="container odd">
        <div
          className="col-md-8 col-md-offset-2 section-title"
          style={{ marginBottom: "20px" }}
        >
          <Fade bottom>
            <h2>TECHNICAL TEAM</h2>
          </Fade>
          
          {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p> */}
        </div>
        <Fade>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
              <div class="card-container">
                  {d.isHead && <div className="card--badge">Head</div>}
                  <img class="round" src={d.img} alt="user" />
                  <Bounce right>
                  <h3>{d.name}</h3>
                  <h6>{d.res}</h6>
                </Bounce>
                  <div class="skills">
                <Zoom cascade>
                    <ul>
                      <a target="_blank" href={d.facebook ? d.facebook : "/"}>
                        <li>
                          <i className="fa fa-facebook"></i>
                        </li>
                      </a>
                      <a target="_blank" href={d.twitter ? d.twitter : "/"}>
                        <li>
                          <i className="fa fa-twitter"></i>
                        </li>
                      </a>
                      <a target="_blank" href={d.youtube ? d.youtube : "/"}>
                        <li>
                          <i className="fa fa-youtube"></i>
                        </li>
                      </a>
                    </ul>
                  </Zoom>
                  </div>
                </div>
              ))
              : "loading"}
              </div>
        </Fade>      
      </div>
      <div className="container">
        <div
          className="col-md-8 col-md-offset-2 section-title"
          style={{ marginBottom: "20px" }}
        >
          <Fade bottom>
            <h2>CONTENT TEAM</h2>
          </Fade>
          
          {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p> */}
        </div>
        <Fade>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
              <div class="card-container">
                  {d.isHead && <div className="card--badge">Head</div>}
                  <img class="round" src={d.img} alt="user" />
                  <Bounce right>
                  <h3>{d.name}</h3>
                  <h6>{d.res}</h6>
                </Bounce>
                  <div class="skills">
                <Zoom cascade>
                    <ul>
                      <a target="_blank" href={d.facebook ? d.facebook : "/"}>
                        <li>
                          <i className="fa fa-facebook"></i>
                        </li>
                      </a>
                      <a target="_blank" href={d.twitter ? d.twitter : "/"}>
                        <li>
                          <i className="fa fa-twitter"></i>
                        </li>
                      </a>
                      <a target="_blank" href={d.youtube ? d.youtube : "/"}>
                        <li>
                          <i className="fa fa-youtube"></i>
                        </li>
                      </a>
                    </ul>
                  </Zoom>
                  </div>
                </div>
              ))
              : "loading"}
              </div>
        </Fade>      
      </div>
    </div>
  );
};
