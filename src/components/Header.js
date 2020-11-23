import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import '../App.css';

function Header(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top justify-content-center">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#myNav"
                            aria-controls="#myNav"
                            aria-expanded="false"
                            aria-label="Toggle Navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <NavLink className="navbar-brand m-auto pl-md-5 pr-5 text-center" to="/home">Santa 123 Design</NavLink>
                        <div className="collapse navbar-collapse" id="myNav">
                            <ul className="navbar-nav ml-auto mr-5 mt-2 mt-lg-0">
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="nav-item"><NavLink className="nav-link" to="/home">홈</NavLink></li>
																		<li className="nav-item"><NavLink className="nav-link" to="/gallery">갤러리</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/contact">상담문</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/events">이벤트</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/about">회사소개</NavLink></li>
                                </ul>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
};


export default Header;
