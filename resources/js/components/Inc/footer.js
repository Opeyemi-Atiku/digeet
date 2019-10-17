import React from 'react';

const Footer = () => (
    <div>
    <section id="footer-top" className="p-80px-tb bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="row">
                <div className="single-widget col-md-7 col-sm-6">
                    <a className="widget-logo" href="#">
                    Digeet
                    </a>
                    <p>Lorem Ipsum</p>
                  </div>

                  <div className="single-widget col-md-5 col-sm-6">
                    <h3>Quick links</h3>
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="/dashboard">Contact us</a></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="row">
                <div className="single-widget col-md-6 col-sm-6">
                    <h3>Latest posts</h3>
                    <ul className="recent-post">
                      <li><a href="#">Lorem Ipsum</a></li>
                    </ul>
                  </div>

                  <div className="single-widget col-md-6 col-sm-6">
                    <h3>Photo Gallery</h3>
                    <ul className="photo-gallery">
                      <li>
                        <a href="#"><img src="img/causes/1.jpg" alt=""/></a>
                      </li>
                      <li>
                        <a href="#"><img src="img/causes/1.jpg" alt=""/></a>
                      </li>
                      <li>
                        <a href="#"><img src="img/causes/1.jpg" alt=""/></a>
                      </li>
                      <li>
                        <a href="#"><img src="img/causes/1.jpg" alt=""/></a>
                      </li>
                      <li>
                        <a href="#"><img src="img/causes/1.jpg" alt=""/></a>
                      </li>
                      <li>
                        <a href="#"><img src="img/causes/1.jpg" alt=""/></a>
                      </li>
                      <li>
                        <a href="#"><img src="img/causes/1.jpg" alt=""/></a>
                      </li>
                      <li>
                        <a href="#"><img src="img/causes/1.jpg" alt=""/></a>
                      </li>
                      <li>
                        <a href="#"><img src="img/causes/1.jpg" alt=""/></a>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className="p-30px-tb bg-white">
         <div className="container">
            <div className="row">
               <div className="col text-center">
                  <p className="copyright-text">&copy; <a href="#">Digeet</a></p>
               </div>
            </div>
         </div>
      </footer>
      </div>

    );

export default Footer