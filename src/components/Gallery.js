import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import first from '../images/first.jpg';
import third from '../images/third.jpg';
import fourth from '../images/fourth.jpg';

function RenderGalleryItem({ item }) {
    return(
        <Card>
            <Link to={`/gallery/${item.id}`}>
                <CardImg height="400px" src={item.image} alt={item.name} />
                <CardImgOverlay>
                    <CardTitle>{item.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Gallery = (props) => {
    const items = props.items.map((item) => {
        return(
            <div className="row justify-content-center">
                <div className="col-12 col-sm-9 mt-1 mb-1">
                    <RenderGalleryItem item={item} />
                </div>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="container">
                    <div className="row mt-1 mb-2">
                        <div id="myJumbo" className="col-12 col-sm-12 jumbotron text-white jumbotron-image">
                            <h5 className="pt-3">Gallery</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="carousel slide col-12 mb-2" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="img-fluid animated fadeIn" height="auto" src={first} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid animated fadeIn" height="auto" src={fourth} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid animated fadeIn" height="auto" src={third} alt="Third slide" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#myNav"
                    aria-controls="#myNav"
                    aria-expanded="false"
                    aria-label="Toggle Navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="col-12 mb-3">
                    <h5 className="border border-dark pt-3 pb-3 text-light bg-dark">샘플</h5>
                </div>
            </div>

            <div className="row justify-content-center">
                <div>
                    {items}
                </div>
            </div>

			{/* Jumbotron  */}
			<div className="row justify-content-center">
                <div className="container">
                    <div className="row mt-1 mb-2">
                        <div id="myJumbo" className="col-12 col-sm-12 jumbotron text-white jumbotron-image">
                            <h5 className="pt-3">Gallery</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Gallery;
