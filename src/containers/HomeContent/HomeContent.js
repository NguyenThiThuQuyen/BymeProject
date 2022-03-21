
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img2 from '../../Images/danhmuc4.png'
import img3 from '../../Images/danhmuc5.jpg'
import img4 from '../../Images/danhmuc6.jpg'
import img5 from '../../Images/danhmuc7.jpg'
import img6 from '../../Images/danhmuc8.jpg'

import disc1 from '../../Images/discount1.png'
import disc2 from '../../Images/discount2.png'
import disc3 from '../../Images/discount3.png'
import disc4 from '../../Images/discount4.png'
import disc5 from '../../Images/discount5.png'
import disc6 from '../../Images/discount6.png'

import pro1 from '../../Images/product1.jpg'
import pro2 from '../../Images/product2.jpg'
import pro3 from '../../Images/product3.jpg'
import pro4 from '../../Images/product4.jpg'
import pro5 from '../../Images/product5.jpg'
import pro6 from '../../Images/product6.jpg'

import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';


import './HomeContent.scss'

    export default class CenterMode extends Component {
        render() {
          const settings = {
            className: "center",
            lazyload: true,
            centerMode: true,
            infinite: true,
            centerPadding: 0,
            slidesToShow: 4,
            speed: 500
          };
        return (
            <>
                <div className="container containerWrapper mt-5">
                    <h3>DANH MỤC</h3>
                    <Slider {...settings}>
                    <div className="wrap-content">
                        <img
                            className="img-content"
                            src={img3}
                            alt=""
                        />
                        <div className="text-content">
                            Thời Trang Nữ
                        </div>
                    </div>
                    <div className="wrap-content">
                        <img
                            className="img-content"
                            src={img2}
                            alt=""
                        />
                        <div className="text-content">
                            Thời Trang Nam
                        </div>
                    </div>
                    <div className="wrap-content">
                        <img
                            className="img-content"
                            src={img4}
                            alt=""
                        />
                        <div className="text-content">
                            Đồ Trang Trí
                        </div>
                    </div>
                    <div className="wrap-content">
                        <img
                            className="img-content"
                            src={img5}
                            alt=""
                        />
                        <div className="text-content">
                            Phụ Kiện
                        </div>
                    </div>
                    <div className="wrap-content">
                        <img
                            className="img-content"
                            src={img6}
                            alt=""
                        />
                        <div className="text-content">
                            Đồ Gia Dụng
                        </div>
                    </div>
                    </Slider>
                </div>
                <div className="container mt-5">
                    <h3 className="text-danger">THẢ GA MUA SẮM 
                    <IconContext.Provider value={{size: "2em"}}>
                        <BsIcons.BsFillLightningChargeFill/>
                    </IconContext.Provider>
                    </h3>
                    <div className="row">
                        <div className="col-2">
                            <div className="card">
                                <img className="card-img-top"
                                    src={disc1}
                                    alt="" />
                                <div className="card-body p-3" style={{marginTop: '18px'}}>
                                    <h6 className="card-text text-center color-text">Hot sale hôm nay</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="card">
                                <img className="card-img-top" style={{marginTop: '30px'}}
                                    src={disc2}
                                    alt="" />
                                <div className="card-body p-3" style={{marginTop: '70px'}}>
                                    <h6 className="card-text text-center color-text">Freeship toàn quốc</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="card">
                                <img className="card-img-top" style={{marginTop: '45px'}}
                                    src={disc3}
                                    alt="" />
                                <div className="card-body p-3" style={{marginTop: '56px'}}>
                                    <h6 className="card-text text-center color-text">Ưu đãi đặc biệt cho thành viên</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="card">
                                <img className="card-img-top"
                                    src={disc4}
                                    alt="" />
                                <div className="card-body p-3">
                                    <h6 className="card-text text-center color-text">Vocher quà tặng cho người mới</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="card">
                                <img className="card-img-top" style={{marginTop: '20px'}}
                                    src={disc5}
                                    alt="" />
                                <div className="card-body p-3" style={{marginTop: '75px'}}>
                                    <h6 className="card-text text-center color-text">Siêu deal ưu đãi đến 30%</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="card">
                                <img className="card-img-top" style={{marginTop: '30px'}}
                                    src={disc6}
                                    alt="" />
                                <div className="card-body p-3" style={{marginTop: '75px'}}>
                                    <h6 className="card-text text-center color-text">Coupon giảm đến 50K</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            <div className="container-fluid bg-color">
            <div className="container">
                <h3 className="mt-5">GỢI Ý HÔM NAY</h3>
                <div className="row">
                    <div className="row padding">
                        <div className="col-2 mt-3">
                            <div className="card">
                                <img className="card-img-top"
                                    src={pro1}
                                    alt="" />
                                <div className="card-body p-3">
                                    <h6 className="card-text text-center">Dreamcatcher handmade</h6>
                                    <p className="text-center text-danger">90.000 VND</p>
                                        <p className="float-right">
                                            Đã bán 200
                                        </p>
                                        <p><AiIcons.AiOutlineHeart/></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 mt-3">
                            <div className="card">
                                <img className="card-img-top"
                                    src={pro2}
                                    alt="" />
                                <div className="card-body p-3">
                                    <h6 className="card-text text-center">Len cuộn cotton 4 sợi </h6>
                                    <p className="text-center text-danger">120.000 VND</p>
                                        <p className="float-right">
                                            Đã bán 200
                                        </p>
                                        <p><AiIcons.AiOutlineHeart/></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 mt-3">
                            <div className="card">
                                <img className="card-img-top"
                                    src={pro3}
                                    alt="" />
                                <div className="card-body p-3">
                                    <h6 className="card-text text-center">Túi xách handmade</h6>
                                    <p className="text-center text-danger">220.000 VND</p>
                                        <p className="float-right">
                                            Đã bán 200
                                        </p>
                                        <p><AiIcons.AiOutlineHeart/></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 mt-3">
                            <div className="card">
                                <img className="card-img-top"
                                    src={pro4}
                                    alt="" />
                                <div className="card-body p-3">
                                    <h6 className="card-text text-center">Lẵng hoa giấy hồng tím </h6>
                                    <p className="text-center text-danger">300.000 VND</p>
                                        <p className="float-right">
                                            Đã bán 200
                                        </p>
                                        <p><AiIcons.AiOutlineHeart/></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 mt-3">
                            <div className="card">
                                <img className="card-img-top"
                                    src={pro5}
                                    alt="" />
                                <div className="card-body p-3">
                                    <h6 className="card-text text-center">Kệ gỗ 2 ngăn đa dụng</h6>
                                    <p className="text-center text-danger">140.000 VND</p>
                                        <p className="float-right">
                                            Đã bán 200
                                        </p>
                                        <p><AiIcons.AiOutlineHeart/></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 mt-3">
                            <div className="card">
                                <img className="card-img-top"
                                    src={pro6}
                                    alt="" />
                                <div className="card-body p-3">
                                    <h6 className="card-text text-center">Bình hoa để bàn trang trí</h6>
                                    <p className="text-center text-danger">60.000 VND</p>
                                        <p className="float-right">
                                            Đã bán 200
                                        </p>
                                        <p><AiIcons.AiOutlineHeart/></p>
                                </div>
                            </div>
                        </div>


                        <div className="col-2 mt-3">
                            <div className="card">
                                <img className="card-img-top"
                                    src={pro1}
                                    alt="" />
                                <div className="card-body p-3">
                                    <h6 className="card-text text-center">Dreamcatcher handmade</h6>
                                    <p className="text-center text-danger">90.000 VND</p>
                                        <p className="float-right">
                                            Đã bán 200
                                        </p>
                                        <p><AiIcons.AiOutlineHeart/></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 mt-3">
                            <div className="card">
                                <img className="card-img-top"
                                    src={pro2}
                                    alt="" />
                                <div className="card-body p-3">
                                    <h6 className="card-text text-center">Len cuộn cotton 4 sợi </h6>
                                    <p className="text-center text-danger">120.000 VND</p>
                                        <p className="float-right">
                                            Đã bán 200
                                        </p>
                                        <p><AiIcons.AiOutlineHeart/></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 mt-3">
                            <div className="card">
                                <img className="card-img-top"
                                    src={pro3}
                                    alt="" />
                                <div className="card-body p-3">
                                    <h6 className="card-text text-center">Túi xách handmade</h6>
                                    <p className="text-center text-danger">220.000 VND</p>
                                        <p className="float-right">
                                            Đã bán 200
                                        </p>
                                        <p><AiIcons.AiOutlineHeart/></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 mt-3">
                            <div className="card">
                                <img className="card-img-top"
                                    src={pro4}
                                    alt="" />
                                <div className="card-body p-3">
                                    <h6 className="card-text text-center">Lẵng hoa giấy hồng tím </h6>
                                    <p className="text-center text-danger">300.000 VND</p>
                                        <p className="float-right">
                                            Đã bán 200
                                        </p>
                                        <p><AiIcons.AiOutlineHeart/></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 mt-3">
                            <div className="card">
                                <img className="card-img-top"
                                    src={pro5}
                                    alt="" />
                                <div className="card-body p-3">
                                    <h6 className="card-text text-center">Kệ gỗ 2 ngăn đa dụng</h6>
                                    <p className="text-center text-danger">140.000 VND</p>
                                        <p className="float-right">
                                            Đã bán 200
                                        </p>
                                        <p><AiIcons.AiOutlineHeart/></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 mt-3">
                            <div className="card">
                                <img className="card-img-top"
                                    src={pro6}
                                    alt="" />
                                <div className="card-body p-3">
                                    <h6 className="card-text text-center">Bình hoa để bàn trang trí</h6>
                                    <p className="text-center text-danger">60.000 VND</p>
                                        <p className="float-right">
                                            Đã bán 200
                                        </p>
                                        <p><AiIcons.AiOutlineHeart/></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-2 mt-3">
                            <div className="card">
                                <img className="card-img-top"
                                    src={pro1}
                                    alt="" />
                                <div className="card-body p-3">
                                    <h6 className="card-text text-center">Dreamcatcher handmade</h6>
                                    <p className="text-center text-danger">90.000 VND</p>
                                        <p className="float-right">
                                            Đã bán 200
                                        </p>
                                        <p><AiIcons.AiOutlineHeart/></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 mt-3">
                            <div className="card">
                                <img className="card-img-top"
                                    src={pro2}
                                    alt="" />
                                <div className="card-body p-3">
                                    <h6 className="card-text text-center">Len cuộn cotton 4 sợi </h6>
                                    <p className="text-center text-danger">120.000 VND</p>
                                        <p className="float-right">
                                            Đã bán 200
                                        </p>
                                        <p><AiIcons.AiOutlineHeart/></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 mt-3">
                            <div className="card">
                                <img className="card-img-top"
                                    src={pro3}
                                    alt="" />
                                <div className="card-body p-3">
                                    <h6 className="card-text text-center">Túi xách handmade</h6>
                                    <p className="text-center text-danger">220.000 VND</p>
                                        <p className="float-right">
                                            Đã bán 200
                                        </p>
                                        <p><AiIcons.AiOutlineHeart/></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 mt-3">
                            <div className="card">
                                <img className="card-img-top"
                                    src={pro4}
                                    alt="" />
                                <div className="card-body p-3">
                                    <h6 className="card-text text-center">Lẵng hoa giấy hồng tím </h6>
                                    <p className="text-center text-danger">300.000 VND</p>
                                        <p className="float-right">
                                            Đã bán 200
                                        </p>
                                        <p><AiIcons.AiOutlineHeart/></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 mt-3">
                            <div className="card">
                                <img className="card-img-top"
                                    src={pro5}
                                    alt="" />
                                <div className="card-body p-3">
                                    <h6 className="card-text text-center">Kệ gỗ 2 ngăn đa dụng</h6>
                                    <p className="text-center text-danger">140.000 VND</p>
                                        <p className="float-right">
                                            Đã bán 200
                                        </p>
                                        <p><AiIcons.AiOutlineHeart/></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 mt-3">
                            <div className="card">
                                <img className="card-img-top"
                                    src={pro6}
                                    alt="" />
                                <div className="card-body p-3">
                                    <h6 className="card-text text-center">Bình hoa để bàn trang trí</h6>
                                    <p className="text-center text-danger">60.000 VND</p>
                                        <p className="float-right">
                                            Đã bán 200
                                        </p>
                                        <p><AiIcons.AiOutlineHeart/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </>
        );
    }
}
