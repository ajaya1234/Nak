import { Link } from 'react-router-dom';
import React from 'react'
import Kundali_form from './Kundali_form';
import K_team from './K_team';
import Online_kundali from './Online_kundali';
import Ask_question from './Ask_question';
import Header from './Header';
import Footer from './Footer';
import Header1 from './Header1';




function Kundali() {
  return (
    <div>
      <Header1 />
    <Kundali_form /> 
    <K_team />
    <Online_kundali />
   <Ask_question /> 
   <section>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div
                className="tab-content"
                id="myTabContent"
                style={{ marginTop: "-30px" }}
              >
                <div
                  className="tab-pane fade show active"
                  id="all"
                  role="tabpanel"
                  aria-labelledby="all-tab"
                >
                  <div className="row g-8">
                    <div className="col-xxl-2 col-lg-3 col-md-6 col-6 wow fadeInUp">
                      <div className="product-box-4">
                        <div className="product-image">
                          <Link to="/AstrologersList">
                            <img
                              src="../assets/images/veg-3/cate1/chat.png"
                              className="img-fluid"
                              alt=""
                              style={{ height: "60px" }}
                            />
                          </Link>
                        </div>

                        <div className="product-detail">
                          <Link to="/AstrologersList">
                            <h5 className="name">Chat with Astrologer</h5>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-xxl-2 col-lg-3 col-md-6 col-6 wow fadeInUp"
                      data-wow-delay="0.05s"
                    >
                      <div className="product-box-4">
                        <div className="product-image">
                          <Link to="/AstrologersList">
                            <img
                              src="../assets/images/veg-3/cate1/phone.png"
                              className="img-fluid"
                              alt=""
                              style={{ height: "60px" }}
                            />
                          </Link>
                        </div>

                        <div className="product-detail">
                          <Link to="/AstrologersList">
                            <h5 className="name">Talk to Astrologer</h5>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-xxl-2 col-lg-3 col-md-6 col-6 wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <div className="product-box-4">
                        <div className="product-image">
                          <Link to="/Astrolive">
                            <img
                              src="../assets/images/veg-3/cate1/livechat.png"
                              className="img-fluid"
                              alt=""
                              style={{ height: "60px" }}
                            />
                          </Link>
                        </div>

                        <div className="product-detail">
                          <Link to="/Astrolive">
                            <h5 className="name">Live Astrologers</h5>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-xxl-2 col-lg-3 col-md-6 col-6 wow fadeInUp"
                      data-wow-delay="0.55s"
                    >
                      <div className="product-box-4">
                        <div className="product-image">
                          <Link to="/AstrologersList">
                            <img
                              src="../assets/images/veg-3/cate1/videocamera.png"
                              className="img-fluid"
                              alt=""
                              style={{ height: "60px" }}
                            />
                          </Link>
                        </div>

                        <div className="product-detail">
                          <Link to="/AstrologersList">
                            <h5 className="name">
                              Video Call With Astrologers
                            </h5>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br/>
      <br/>
   <Footer />
      

    </div>
  )
}

export default Kundali;