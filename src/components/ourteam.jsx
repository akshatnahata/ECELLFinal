export const Ourteam = (props) => {
  return (
    <div id="ourteam" className="text-center">
      <div className="container">
        <div
          className="col-md-8 col-md-offset-2 section-title"
          style={{ marginBottom: "20px" }}
        >
          <h2>Our Team</h2>
          {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p> */}
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div class="card-container">
                  {/* <span class="pro">PRO</span> */}
                  <img class="round" src={d.img} alt="user" />
                  <h3>{d.name}</h3>
                  <h6>{d.res}</h6>
                  <div class="skills">
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
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
