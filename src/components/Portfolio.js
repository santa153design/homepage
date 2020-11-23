import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

// Images
import first from '../images/first.jpg';
import third from '../images/third.jpg';
import fourth from '../images/fourth.jpg';
import fifth from '../images/fifth.jpg';
import sixth from '../images/sixth.jpg';
import eighth from '../images/eighth.jpg';
import thirteenth from '../images/thirteenth.jpg';
import fourteenth from '../images/fourteenth.jpg';

function Portfolio(props) {
    return (
        <div className="container">
            <div className="row justify-content-center mt-1">
                <div className="col-12 mt-1 mb-3">
                    <h5 className="border border-dark pt-3 pb-3 text-light bg-dark">포트폴리오</h5>
                </div>
                
								{/* Carousel */}
                <div className="carousel slide col-12 mb-2" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="img-fluid" height="auto" src={first} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid" height="auto" src={fourth} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid" height="auto" src={third} alt="Third slide" />
                        </div>
                    </div>
                </div>
								{/* end of carousel */}

								{/* the beginning of the first row */}
                <div className="col-12 col-sm-4">
                    <div id="demo" className="carousel slide" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={eighth} className="img-fluid" alt="1" />
                            </div>
                            <div className="carousel-item">
                                <img src={sixth} className="img-fluid" alt="2" />
                            </div>
                            <div className="carousel-item">
                                <img src={thirteenth} className="img-fluid" alt="3" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div id="demo" className="carousel slide" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={thirteenth} className="img-fluid" alt="1" />
                            </div>
                            <div className="carousel-item">
                                <img src={first} className="img-fluid" alt="2" />
                            </div>
                            <div className="carousel-item">
                                <img src={eighth} className="img-fluid" alt="3" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div id="demo" className="carousel slide" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={fifth} className="img-fluid" alt="1" />
                            </div>
                            <div className="carousel-item">
                                <img src={thirteenth} className="img-fluid" alt="2" />
                            </div>
                            <div className="carousel-item">
                                <img src={first} className="img-fluid" alt="3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
						{/* the enf of the first row */}

						{/* the beginning of the second row */}
            <div className="row justify-content-center">
                <div className="col-12 col-sm-4">
                    <div id="demo" className="carousel slide" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={third} className="img-fluid" alt="1" />
                            </div>
                            <div className="carousel-item">
                                <img src={eighth} className="img-fluid" alt="2" />
                            </div>
                            <div className="carousel-item">
                                <img src={first} className="img-fluid" alt="3" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div id="demo" className="carousel slide" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={fourteenth} className="img-fluid" alt="1" />
                            </div>
                            <div className="carousel-item">
                                <img src={fourth} className="img-fluid" alt="2" />
                            </div>
                            <div className="carousel-item">
                                <img src={third} className="img-fluid" alt="3" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div id="demo" className="carousel slide" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={first} className="img-fluid" alt="1" />
                            </div>
                            <div className="carousel-item">
                                <img src={fourth} className="img-fluid" alt="2" />
                            </div>
                            <div className="carousel-item">
                                <img src={third} className="img-fluid" alt="3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
						{/* the end of the second line */}
        </div>
    );
};

export default Portfolio;
