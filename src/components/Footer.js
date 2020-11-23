import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer(props) {
    return (
        <div className="footer">
            <div className="page-footer font-small pt-3 bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 py-3">
                            <div className="flex-center">
                                <a href="https://www.instagram.com/santa153design/"><i className="fa fa-instagram white-text mr-md-5 mr-3 fa-2x"></i></a>
                                <a href="mailto:channcedeco@hanmail.net"><i className="fa fa-envelope-o white-text mr-md-5 mr-3 fa-2x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-2">
                    <p>
                        <span>© 2020 Copyright: </span>
                        <Link to="/home">Santa 123 Design</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;