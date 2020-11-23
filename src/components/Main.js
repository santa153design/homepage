import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// components
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';
import Gallery from './Gallery';
import Events from './Events';
import EventDetail from './EventDetail';
import ItemDetail from './GalleryItem';
import { EVENTS } from '../shared/events';
import { ITEMS } from '../shared/gallery';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: EVENTS,
            items: ITEMS
        }
    }

    render() {
        const EventWithId = ({ match }) => {
            return (
                <EventDetail event={this.state.events.filter((event) => event.id === parseInt(match.params.eventId, 10))[0]} />
            );
        };

        const GalleryItem = ({ match }) => {
            return (
                <ItemDetail event={this.state.items.filter((item) => item.id === parseInt(match.params.itemId, 10))[0]} />
            );
        };

        return (
            <div>
                <div className="">
                    <Header />
                </div>
                <div className="mt-5">
                    <Switch>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/about" component={About} />
                        <Route path="/gallery/:itemId" component={GalleryItem} />
                        <Route exact path="/gallery" component={() => <Gallery items={this.state.items} />} />
                        <Route path="/events/:eventId" component={EventWithId} />
                        <Route exact path="/events" component={() => <Events events={this.state.events} />} />
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    };
}

export default Main;
