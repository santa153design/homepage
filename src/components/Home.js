import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'aos/dist/aos.js';

// Components
import Portfolio from './Portfolio';
import Cards from './Cards';

function Home(props) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                {/* Home Jumbotron */}

                <div className="container">
                    <div className="row mt-1 mb-2">
                        <div id="myJumbo" className="col-12 col-sm-12 jumbotron text-white jumbotron-image">
                            <h5 className="pt-3">Santa 123 Design</h5>
                        </div>
                    </div>
                </div>

                {/* Page Header Title */}
                <div className="col-12 col-sm-12 mt-2 mb-4">
                    <p id="greet" className="text-align-center">Santa 123 Design - 당신을만나서 행복했습니다.</p>
                    <h5 className="text-align-center mb-3 font-weight-bold">
                        여러분의 독특한 성격, 관심사, 그리고 일상적인 욕구를
                        반영하는, 즐겁고, 응집력 있고, 영감을 주는 공간을 디자인하기 위해 함께 노력합시다.
                    </h5>
                </div>

                {/* Cards */}
                <div data-aos="fade-up">
                    <Cards />
                </div>

                {/* Portfolio */}
                <div>
                    <Portfolio />
                </div>

                <div id="footJumbo" className="jumbotron col-12 col-sm-12 mt-3 mb-4 text-white">
                    <p id="greet" className="text-align-center">Santa 123 Design</p>
                    <h5 className="text-align-center mb-3 font-weight-bold">
                        당신을만나서 행복했습니다.
                    </h5>
                </div>

            </div>
        </div>
    );
};

export default Home;
