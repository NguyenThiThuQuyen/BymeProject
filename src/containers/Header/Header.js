import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import { IconContext } from 'react-icons';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <div className='bg-navbar'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ul-font-hedaer">
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Trở thành người bán</a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link text-light" href="#">Kênh người bán</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Tải ứng dụng</a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link text-light" href="#">
                                        Kết nối
                                        <BsIcons.BsFacebook/>
                                        <BsIcons.BsInstagram/>
                                    </a>
                                </li>
                            </ul>
                        </div>
        
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ul-font-header">
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">
                                        <AiIcons.AiOutlineBell/>
                                        Thông báo
                                    </a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link text-light" href="#">
                                        <AiIcons.AiOutlineQuestionCircle/>
                                        Hỗ trợ
                                        </a>
                                </li>
                                <li className="nav-item text-light ">
                                   <Dropdown style={{marginTop: '4px', color: 'white'}}>
                                    <Dropdown.Toggle variant="" id="dropdown-basic1" >
                                        Ngôn ngữ
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Tiếng Việt</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Tiếng Anh</Dropdown.Item>
                    
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                                <li className="nav-item nav-link text-light mx-2">                         
                                    <Link to="login" className="link">Đăng nhập</Link>
                                </li>
                                <li className="nav-item mt-2">
                                    <Link to="register" className="link">Đăng ký</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
        
                </nav>
                <div className="container">
                     <div className="row">
                        <div className="col-2 mt-4">
                            <div className="logo">
                                <h1>Logo</h1>
                            </div>
                        </div>
                        <div className="col-8 mt-4">
                            <input className="form-contr mr-sm-2" type="search" placeholder="Tìm kiếm" aria-label="Search" />
                            <button className="btn2 btn-outline my-2 text-light mx-2 my-sm-0" type="submit">Tìm kiếm</button>
                        </div>
                        <div className="col-2 mt-4">
                            <IconContext.Provider value={{color: "white", size: "1.8em"}}>
                                <div className="cart">
                                    <BsIcons.BsCartCheck/>
                                </div>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
        
            </div>
          )
    }

}

export default (Header);
