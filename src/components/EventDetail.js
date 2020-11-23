import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Col from 'reactstrap/lib/Col';
import '../App.css';

function RenderEvent({ event }) {
    if (event != null) {
        return (
            <Row>
                <Col sm="12">
                    <Card>
                        <CardImg src={event.image} height="70%" />
                        <CardBody>
                            <CardTitle>{event.name}</CardTitle>
                            <CardText>{event.description}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    } else {
        return (
            <div></div>
        );
    }
}

const EventDetail = (props) => {
    if (props.event != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/events'>이벤트</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {props.event.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.event.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 m-1">
                        <RenderEvent event={props.event} />
                    </div>
                </div>
                <div className="row justify-content-center mb-3 mt-2">
                    <Link className="btn btn-primary" to="/home">Home</Link>
                    <Link className="btn btn-success" to="/contact">Contact</Link>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
};

export default EventDetail;