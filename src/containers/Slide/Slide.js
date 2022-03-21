import React, { Component } from "react";
import {Carousel} from 'react-bootstrap'
import img from '../../Images/banner3.jpg'
import img1 from '../../Images/banner4.jpg'
import img2 from '../../Images/banner7.jpg'
import img3 from '../../Images/banner1.jpg'
import img5 from '../../Images/banner8.jpg'
import img4 from '../../Images/hinh2.jpg'
import './Slide.scss'

class Slide extends Component {

render() {
    return (
        <div className="container-fluid bg-slide">
            <div className="container mt-4">
            <div className="row">
                <div className="col-8">
                <div className="slide">
                    <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100 h-80"
                        src={img5}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100 img-slide"
                        src={img3}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100 img-slide"
                        src={img1}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={img2}
                        alt="Fourth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={img}
                        alt="Fiveth slide"
                        />
                    </Carousel.Item>
                    </Carousel>
                    </div>
                </div>
                <div className="col-4">
                <img
                    className="d-block w-100"
                    src={img4}
                    alt=""
                />
                </div>
            </div>
            </div>
        </div>
        )
    }
}

export default (Slide);