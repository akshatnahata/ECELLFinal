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
      <div id="aboutnew">
        <div className="container">
          <div className="row alignpho">
            <div className="col-xs-12 col-md-6 imageabout">
              <Fade bottom>
                <img src="img/2.jpg" className="img-responsive" alt="" />
              </Fade>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>
                  <Fade left cascade>
                    CIIEIR OFFICE
                  </Fade>
                </h2>
                <div className="row">
                <div className="ciieir">
                  <p className="OfficeName">Swaminathan Ramabadran</p>
                  <p className="OfficePost">Head CIIEIR Office</p>
                </div>
                <div className="ciieir">
                  <p className="OfficeName">Kumar Gaurav</p>
                  <p className="OfficePost">AO CIIEIR Office</p>
                </div>
                <div className="ciieir">
                  <p className="OfficeName">Kavita Inamdar</p>
                  <p className="OfficePost">CIIEIR Office</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Secretary - joint Secretary */}
      {/* <div className="container">
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
                        <a rel="noreferrer" target="_blank" href={d.facebook ? d.facebook : "/"}>
                          <li>
                            <i className="fa fa-facebook"></i>
                          </li>
                        </a>
                        <a rel="noreferrer" target="_blank" href={d.twitter ? d.twitter : "/"}>
                          <li>
                            <i className="fa fa-twitter"></i>
                          </li>
                        </a>
                        <a rel="noreferrer" target="_blank" href={d.youtube ? d.youtube : "/"}>
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
      </div> */}
      {props.data ? props.data.map((team, i) => (
        <div className={i%2 === 0 ? "container odd" : "container"}>
        <div
          className="col-md-8 col-md-offset-2 section-title"
          style={{ marginBottom: "20px" }}
        >
          <Fade bottom>
            <h2>{team.title}</h2>
          </Fade>

        </div>
        <Fade>
          <div id="row">
            {team.members
              ? team.members.map((d, i) => (
                <div class="card-container">
                  {d.isHead && <div className="card--badge">Head</div>}
                  <img class="round" src={d.img} alt="user" />
                  <Bounce right>
                    <h3>{d.name}</h3>
                    {d.position ? <h6>{d.position}</h6> : ""}
                  </Bounce>
                  <div class="skills">
                    <Zoom cascade>
                      <ul>
                        <a rel="noreferrer" target="_blank" href={d.facebook ? d.facebook : "/"}>
                          <li>
                            <i className="fa fa-facebook"></i>
                          </li>
                        </a>
                        <a rel="noreferrer" target="_blank" href={d.twitter ? d.twitter : "/"}>
                          <li>
                            <i className="fa fa-twitter"></i>
                          </li>
                        </a>
                        <a rel="noreferrer" target="_blank" href={d.youtube ? d.youtube : "/"}>
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
      )): "Loading..."}
      
    </div>
  );
};
