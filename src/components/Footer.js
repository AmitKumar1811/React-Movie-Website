import React from "react";
import img from "../assests/image/pvr.png";
import '../assests/Css/Footer.css';
const Footer = () => {
  return (
    
      <footer
        className="text-center text-lg-start text-dark"
      >
        <section
          className="d-flex justify-content-between p-4 text-white"
          style={{ "backgroundColor": "transparent" }}
        >
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="https://www.facebook.com/" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com/" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.google.com/" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="https://www.instagram.com/" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.github.com/" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        <hr></hr>

        <section className="footer_section">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">
                  <img src={img} alt="no found" width={80} height={80} />
                </h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  This Project is made for Educational Purpose . This Project Belong to Amit Kumar . 
                  If You have any issue in Project related to code and any functionalty message me . 
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Resources</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#fff",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="#!">
                    About PVR
                  </a>
                </p>
                <p>
                  <a href="#!" >
                    Contact US
                  </a>
                </p>
                <p>
                  <a href="#!" >
                    Blog
                  </a>
                </p>
                <p>
                  <a href="#!" >
                    Help Center
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#fff",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="#!" >
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="#!" >
                    Become an Affiliate
                  </a>
                </p>
                <p>
                  <a href="#!" >
                    Booking Rates
                  </a>
                </p>
                <p>
                  <a href="#!" >
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <i className="fas fa-home mr-3"></i> Chandigarh, CH 16012, INDIA
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> amitkumar316@gamil.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> +9199969-90290
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-dark" href="https://pvrcinema.com/">
            pvrcinema.com
          </a>
        </div>
      </footer>
  
  );
};

export default Footer;
