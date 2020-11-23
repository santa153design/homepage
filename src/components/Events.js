import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function RenderEventItem({  event, onClick }) {
    return (
        <Card>
            <Link to={`/events/${event.id}`} >
                <CardImg height="350px" width="100%" src={event.image} alt={event.name} />
                <CardImgOverlay>
                    <CardTitle>{event.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Events = (props) => {
    const events = props.events.map((event) => {
        return (
            <div className="row justify-content-center">
                <div key={event.id} className="col-12 col-sm-9 m-1">
                    <RenderEventItem event={event} />
                </div>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/home'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Events
                    </BreadcrumbItem>
                </Breadcrumb>
                {/* Jumbotron  */}
                <div className="container">
                    <div className="row mt-1 mb-2">
                        <div id="myJumbo" className="col-12 col-sm-12 jumbotron text-white jumbotron-image">
                            <h5 className="pt-3">Events</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 justify-content-center">
                    {events}
                </div>
            </div>
            <div className="container">
                <div className="row mt-3">
                    <div id="myJumbo" className="col-12 col-sm-12 jumbotron text-white jumbotron-image">
                        <p id="greet" className="text-align-center">Santa 123 Design</p>
                        <h5 className="text-align-center mb-3 font-weight-bold">
                            당신을만나서 행복했습니다.
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;