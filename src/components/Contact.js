import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact(props) {
    return (
        <div className="container mb-5 mt-2">
            <div id="contact" className="row justify-content-center">
                <div className="container">
                    <div className="row mt-1 mb-1">
                        <div id="myJumbo" className="col-12 col-sm-12 jumbotron text-white jumbotron-image">
                            <h5 className="pt-3">Santa 123 Design</h5>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 mb-2">
                    <h5 className="border border-dark pt-3 pb-3 text-light bg-dark">연락처</h5>
                </div>
                <div className="col-11 col-sm-12 mt-3 mb-4 border border-silver bg-light">
                    <div className="col-12 col-sm-12 mt-5 mb-5">
                        <p><i className="fa fa-map-marker fa-lg"></i> 주소: 서울 서초구 반배동 953-3번지</p>
                        <p><i className="fa fa-phone fa-lg"></i> 사무실: 02-563-0564</p>
                        <p><i className="fa fa-mobile fa-lg"></i> 연락처: 010-8599-0917</p>
                        <p><i className="fa fa-envelope fa-lg"></i> 이메일: channcedeco@hanmail.net</p>
                    </div>
                </div>
                <div className="col-12 col-sm-12 mt-2">
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

export default Contact;