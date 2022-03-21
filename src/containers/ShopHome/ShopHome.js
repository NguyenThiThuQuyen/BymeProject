import React, { Component } from 'react';

import { connect } from 'react-redux';
import "./ShopHome.scss";
import logo from "../../assets/images/ShopHome/logo1.png";

class ShopHome extends Component {

    

    render() {
        
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll:  1,
            // nextArrow: <SampleNextArrow />,
            // prevArrow: <SamplePrevArrow />
        };
        return (
            <div className='Shop'>
                <div className='TT_Shop'>
                    <div className='background_Shop'>
                        <div className='avt'>
                            <div className='avt_Shop'>
                               <div className='logo'><img src={logo}/></div>
                            </div>

                            <div className='name_Shop'>
                                <div className='name'> Aviano Menwear</div>
                                <div className='time'>Online 8 phút trước</div>
                            </div>
                        </div>
                        
                        <div className='btn_follow'>
                            <button>  
                                <i class="fas fa-plus"></i> 
                                &nbsp; THEO DÕI
                                
                            </button>
                            
                        </div>
                        
                    </div>

                    <div className='col-1'>
                        <div className='khung'>
                            <div className='sp'>
                                <div className='icon_sp'><i class="fab fa-product-hunt"></i></div> &nbsp;&nbsp;
                                <div className='name_sp'>Sản Phẩm:</div> &nbsp;
                                <div className='vl_sp'>1,1k</div>
                            </div>
                            
                            <div className='fl'>
                                <div className='icon_fl'><i class="fas fa-user-plus"></i></div> &nbsp;&nbsp;
                                <div className='name_fl'>Đang Theo:</div> &nbsp;
                                <div className='vl_fl'>850</div>
                            </div>

                            <div className='tl'>
                                <div className='icon_tl'><i class="fas fa-comment"></i></div> &nbsp;&nbsp;
                                <div className='name_tl'>Tỷ Lệ Chat Phản Hồi:</div> &nbsp;
                                <div className='vl_tl'>1,1k (Trong Vài Giờ) <i class="far fa-question-circle"></i></div>
                            </div>
                        </div>
                    </div>

                    <div className='col-2'>
                        <div className='khung'>
                            <div className='sp'>
                                <div className='icon_sp'><i class="fas fa-users"></i></div> &nbsp;&nbsp;
                                <div className='name_sp'>Người theo dõi:</div> &nbsp;
                                <div className='vl_sp'>11,1k</div>
                            </div>
                            
                            <div className='fl'>
                                <div className='icon_fl'><i class="fas fa-star"></i></div> &nbsp;&nbsp;
                                <div className='name_fl'>Đánh giá:</div> &nbsp;
                                <div className='vl_fl'>850</div>
                            </div>

                            <div className='tl'>
                                <div className='icon_tl'><i class="fas fa-user-check"></i></div> &nbsp;&nbsp;
                                <div className='name_tl'>Tham gia:</div> &nbsp;
                                <div className='vl_tl'>3 năm trước </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='khung_menu sticky-top'>
                    <div className='Menu_Shop'>
                           <div className='page_Dao'>DẠO</div>
                           <div className='page_AllSp'>TẤT CẢ SẢN PHẨM</div>
                           <div className='page_AllGh'>TOÀN BỘ GIAN HÀNG</div>
                           <div className='page_Sale'>SALE</div>
                           <div className='page_Them'>THÊM</div> 
                    </div>
                </div>
                <div style={{height:"100px"}}></div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopHome);
