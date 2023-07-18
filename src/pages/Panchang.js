import React from "react";
import { Link } from "react-router-dom";

const Panchang = () => {
  return (
    <>
      <section class="blog-section section-b-space">
        <div class="container-fluid-lg">
          <div class="row g-4">
            <div class="col-xxl-12 col-xl-12 col-lg-12 order-lg-2">
              <div class="row g-4 ratio_65">
                <div class="slider-3 arrow-slider"  style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                  <div   style={{width:"30%",}}>
                    <div class="blog-box ratio_50">
                      <div class="blog-box-image" style={{ height: "150px" }}>
                        <Link to="/blog">
                          <img
                            src="../assets/images/blog/pp.jpg"
                            class="img-fluid bg-img"
                            alt=""
                          />
                        </Link>
                      </div>

                      <div
                        class="blog-contain"
                        style={{
                          overflowY: " scroll",
                          position: "relative",
                          height: "350px",
                        }}
                      >
                        <div>
                          <Link to="/BlogDetail">
                            <h3>PANCHANG</h3>
                            <h4>Delhi- Wednesday, 05 April 2023</h4>
                          </Link>
                        </div>
                        <div style={{ position: "absolute" }}>
                          <Link to="/BlogDetail">
                            <ul>
                              <table class="home_table">
                                <tbody>
                                  <tr>
                                    <td scope="row">Date</td>
                                    <td>Wednesday, 05 April 2023</td>
                                    <hr />
                                  </tr>
                                  <tr>
                                    <td scope="row">Tithi</td>
                                    <td>Purnima</td>
                                  </tr>
                                  <tr>
                                    <td scope="row">Day</td>
                                    <td>Wednesday</td>
                                  </tr>
                                  <tr>
                                    <td scope="row">Paksha</td>
                                    <td> Shukla-Paksha</td>
                                  </tr>
                                  <tr>
                                    <td scope="row">Sunrise</td>
                                    <td id="sunRise"> 6:7:37</td>
                                  </tr>
                                  <tr>
                                    <td scope="row">Sunset</td>
                                    <td id="sunSet">18:41:36</td>
                                  </tr>
                                  <tr>
                                    <td scope="row">Moonrise</td>
                                    <td id="moonRise"> 18:1:34</td>
                                  </tr>
                                  <tr>
                                    <td scope="row">Nakshatra</td>
                                    <td> Hast</td>
                                  </tr>
                                  <tr>
                                    <td scope="row">Nakshtra Till</td>
                                    <td id="nakshtra">36 : 42 : 1</td>
                                  </tr>
                                  <tr>
                                    <td scope="row">Yog</td>
                                    <td>Dhruv</td>
                                  </tr>
                                  <tr>
                                    <td scope="row">Yog Till</td>
                                    <td id="yog">27 : 16 : 51</td>
                                  </tr>
                                  <tr>
                                    <td scope="row">Karan I</td>
                                    <td>Vishti</td>
                                  </tr>
                                  <tr>
                                    <td scope="row">Surya Rashi</td>
                                    <td>Pisces</td>
                                  </tr>
                                  <tr>
                                    <td scope="row">Chandra Rashi</td>
                                    <td>Virgo</td>
                                  </tr>
                                  <tr>
                                    <td scope="row">Rahu Kal</td>
                                    <td id="rahuKal"> 12:24:37 to 13:58:51</td>
                                  </tr>
                                </tbody>
                              </table>
                            </ul>
                          </Link>
                        </div>
                        {/* <!-- <button onclick="location.href = 'blog-detail.html';" class="blog-button">Read More
                                        <i class="fa-solid fa-right-long"></i></button> --> */}
                      </div>
                    </div>
                  </div>

                  <div style={{width:"30%"}}>
                    <div class="blog-box ratio_50">
                      <div class="blog-box-image" style={{ height: "150px" }}>
                        <Link to="/BlogDetail">
                          <img
                            src="../assets/images/blog/SPcopy2.png"
                            class="img-fluid bg-img"
                            alt=""
                          />
                        </Link>
                      </div>

                      <div
                        class="blog-contain"
                        style={{
                          overflowY: "scroll",
                          position: "relative",
                          height: "350px",
                        }}
                      >
                        <div>
                          <Link to="/BlogDetail">
                            <h3>SPIRITUALITY</h3>
                          </Link>
                        </div>
                        <div style={{ position: "absolute" }}>
                          <Link to="/BlogDetail">
                            <ul>
                              <li>
                                <Link to="#">Yoga</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Meditation</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Gems Stone</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Rudraskha</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Yantra</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Mantras & Chants</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Pooja Performance</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Spiritual Retreats</Link>{" "}
                              </li>
                              <hr />
                            </ul>
                          </Link>
                        </div>
                        {/* <!-- <button onclick="location.href = 'blog-detail.html';" class="blog-button">Read More
                                        <i class="fa-solid fa-right-long"></i></button> --> */}
                      </div>
                    </div>
                  </div>

                  <div style={{width:"30%"}}>
                    <div class="blog-box ratio_50">
                      <div class="blog-box-image" style={{ height: "150px" }}>
                        <Link to="/BlogDetail">
                          <img
                            src="../assets/images/blog/fe.jpg"
                            class="img-fluid bg-img"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div
                        class="blog-contain"
                        style={{
                          overflowY: "scroll",
                          position: "relative",
                          height: "350px",
                        }}
                      >
                        <div>
                          <Link to="/BlogDetail">
                            <h3>FESTIVAL</h3>
                          </Link>
                        </div>
                        <div style={{ position: "absolute" }}>
                          <Link to="/BlogDetail">
                            <ul>
                              <li>
                                <Link to="#">Holi 2023</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Bhai Dooj 2023</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Chaitra Navratri 2023</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Gudi Padwa 2023</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Ugadi 2023</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Rama Navami 2023</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Hanuman Jyanti 2023</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Baisakhi 2023</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Diwali 2023</Link>{" "}
                              </li>
                              <hr />
                            </ul>
                          </Link>
                        </div>
                        {/* <!-- <button onclick="location.href = 'blog-detail.html';" class="blog-button">Read More
                                        <i class="fa-solid fa-right-long"></i></button> --> */}
                      </div>
                    </div>
                  </div>

               
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Panchang;
