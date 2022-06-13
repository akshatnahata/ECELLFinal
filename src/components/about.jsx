import Fade from 'react-reveal/Fade';

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row alignpho">
          <div className="col-xs-12 col-md-6 imageabout">
            <Fade bottom>
              <img src="img/ENGEN-01.jpg" className="img-responsive" alt="" />
            </Fade>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2><Fade left cascade>
                About Us</Fade></h2>
              <p><Fade right>{props.data ? props.data.paragraph : "loading..."}
              </Fade></p>
              <h2>
                <Fade left cascade>
                  Vision
                </Fade>
              </h2>
              <p style={{ fontStyle: "italic" }}>
                <Fade right>
                  {props.data ? props.data.vision : "loading..."}
                </Fade>
              </p>
              {/* <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
