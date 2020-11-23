import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

function About(props) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="container">
                    <div className="row mt-1 mb-1">
                        <div id="myJumbo" className="col-12 col-sm-12 jumbotron text-white jumbotron-image">
                            <h5 className="pt-3">Santa 123 Design</h5>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 mb-2">
                    <h5 className="border border-dark pt-3 pb-3 text-light bg-dark">회사소개</h5>
                </div>
                <div className="col-11 col-md-10 border border-dark mt-2 mb-4 pt-2">
                    <nav className="nav justify-content-center">
                        <div className="nav nav-pills mb-3" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active"
                                id="nav-corporate-tab" data-toggle="tab"
                                href="#nav-home" role="tab" aria-controls="nav-home"
                                aria-selected="true"
                            >기업 개요</a>
                            <a className="nav-item nav-link"
                                id="nav-history-tab" data-toggle="tab"
                                href="#nav-history" role="tab" aria-controls="nav-history"
                                aria-selected="false"
                            >
                                역사
                            </a>
                            <a className="nav-item nav-link"
                                id="nav-business-intro-tab" data-toggle="tab"
                                href="#nav-business-intro" role="tab"
                                aria-controls="nav-business-intro"
                                aria-selected="false"
                            >
                                사업소개
                            </a>
                        </div>
                    </nav>
                    <div className="tab-content pt-2 pb-2" id="nav-tabContent">
                        <div className="tab-pane fade show active"
                            id="nav-home" role="tabpanel"
                            aria-labelledby="nav-home-tab"
                        >
                            <p>
                                Santa 123 Design은 선도적인 회사 중 하나입니다.
                                한국의 인테리어 디자인 분야에서는요.
                                서비스를 수백 개 이상 제공합니다.
                                한국 전역에 분포되어 있습니다.
                                인테리어에 있어서 서비스를 제공합니다.
                                색칠, 제거 및 설치, 구입을 선택합니다.
                                제품 및 상담에 대한 정보를 제공합니다.
                            </p>
                        </div>
                        <div className="tab-pane fade pt-2 pb-2"
                            id="nav-history" role="tabpanel"
                            aria-labelledby="nav-history-tab"

                        >
                            <p>
                                산타123 디자인은 서울에서 한창수씨가 2013년에 설립한 디자인입니다. 2013년부터 현재까지 대한민국 전역에 서비스를 제공하고 있습니다. 회사 서비스에는 가구 설치 및 제거, 색칠, 디자인, 스타일링 등이 포함됩니다. 산타 123 디자인은 최근 몇 년간 수익이 크게 증가했습니다. 우리는 고객에게 양질의 서비스를 제공합니다. 우리의 임무는 우리의 고객들을 우리 회사의 서비스에 만족시키고 행복하게 만드는 것입니다.
                            </p>
                        </div>
                        <div className="tab-pane fade pt-2 pb-2"
                            id="nav-business-intro" role="tabpanel"
                            aria-labelledby="nav-business-intro-tab"
                        >
                            <p>
                                Santa 123 Design 
                                사업본부는 전 세계 고객의 문화적 특성과 생활 습관 등 고객 
                                연구를 기반으로 혁신적인 기술, 프리미엄 디자인을 결합한 시장 
                                선도형 제품들을 선보이며 ‘글로벌 토털 홈 솔루션’을 제공함으로써 
                                글로벌 가전 시장을 선도하고 있습니다
                            </p>
                        </div>
                    </div>
                    <div className="mbr-section-btn align-center pb-4">
                        <Link to="/contact" className="btn btn-outline-dark display-4">
                            CONTACT US
                        </Link>
                    </div>
                </div>
                <div className="col-12 col-sm-12 mt-2 mb-2">
                    <h5 className="text-align-center font-weight-bold">
                        Santa 123 Design <br /> 당신을만나서 행복했습니다.
                    </h5>
                    <p id="greet" className="text-align-center">
                        여러분의 독특한 성격, 관심사, 그리고 일상적인 욕구를
                        반영하는, 즐겁고, 응집력 있고, 영감을 주는 공간을 디자인하기 위해 함께 노력합시다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
