import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.js';

// Images
import consult from '../images/consult.jpg';
import design from '../images/design.jpg';
import install from '../images/install.jpg';
import purchase from '../images/purchase.jpg';

function Cards(props) {
    return (
        <div className="container mb-3 mt-3">
            <div className="row justify-content-center mt-1">
                <div className="col-12 mt-1 mb-3" data-aos="fade-up">
                    <h5 className="border border-dark pt-3 pb-3 text-light bg-dark">서비스</h5>
                </div>
                <div className="col-12 col-sm-6" data-aos="zoom-in">
                    <img className="img-fluid" src={consult} alt="Furniture installation" />
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">디자인 상담</h5>
                            <p className="card-text">
                                우리는 당신의 사무실 디자인, 스타일, 색칠, 가구들을 도와준다.
                                객실 정리, 공간 계획, 액세스 권한 부여, 바닥재: 단단한 목재 바닥,
                                타일(세라믹, 천연석), 카펫, 맞춤형 면적 깔개, 동양 양탄자
                            </p>
                            <Link className="btn btn-primary" to="/contact">연락처 정보</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6" data-aos="zoom-in">
                    <div className="card">
                        <img className="img-fluid" src={install} alt="Furniture installation" />
                        <div className="card-body">
                            <h5 className="card-title">구조 및 설치</h5>
                            <div className="card-text">
                                <p>
                                    우리는 매우 포괄적인 일련의 건설 서비스를 제공한다 - 다음을 포함한다.
                                    철거 - 카펫, 바닥재, 캐비닛, 욕조, 조명 등의 철거, 사용자 지정 셔터 설치,
                                    드레이퍼리 설치, 가짜 페인팅, 인테리어 페인팅.
                                </p>
                            </div>
                            <Link className="btn btn-primary" to="/contact">연락처 정보</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-1">
                <div className="col-12 col-sm-6" data-aos="zoom-in">
                    <img className="img-fluid animated fadeIn" src={purchase} alt="Furniture installation" />
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">구매</h5>
                            <p className="card-text">
                                우리는 당신의 투자에 가장 좋은 품질을 찾고 당신만을 위한
                                독특하고 영감을 주는 작품을 찾기 위해 국내, 한국 전역, 그리고
                                전세계적으로 제품을 검색합니다, 등불, 의자, 예술품 & 거울.
                            </p>
                            <Link className="btn btn-primary" to="/contact">연락처 정보</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6" data-aos="zoom-in">
                    <div className="card">
                        <img className="img-fluid animated fadeIn" src={design} alt="Furniture installation" />
                        <div className="card-body">
                            <h5 className="card-title">인테리어 디자인</h5>
                            <div className="card-text">
                                <p>
                                    산타123디자인은 종합설계서비스와 제품선정 지원 등 간단한
                                    디자인 상담이 모두 가능하다. 우리는 고객이 만족하는지 확인하기
                                    위한 철저한 절차를 가지고 있다.
                                </p>
                            </div>
                            <Link className="btn btn-primary" to="/contact">연락처 정보</Link>
                        </div>
                    </div>
                </div>
            </div>
            <script>
                AOS.init();
            </script>
        </div>
    );
}


export default Cards;
