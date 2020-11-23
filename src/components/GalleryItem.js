import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText, CardBody, CardTitle, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';

function RenderItem({event}) {
    if(event != null) {
        return(
            <Row>
                <Col sm="12">
                    <Card className="row justify-content-center">
                        <div className="col-12">
                            <img src={event.image} alt={event.name} />
                        </div>
                        <div className="col-12 mt-2">
                            <img className="col-4" src={event.image} alt={event.name} />
                            <img className="col-4" src={event.image} alt={event.name} />
                            <img className="col-4" src={event.image} alt={event.name} />
                        </div>
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

const ItemDetail = (props) => {
    if (props.event != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/gallery'>Gallery</Link>
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
                        <RenderItem event={props.event} />
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

export default ItemDetail;