import React, { Component } from 'react';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import './Footer.scss'
class Footer extends Component {
    render() {
        return (
            <div className='container-fluid mt-5 bg-footer'>
            <div className="row">
              <div className="col-3 my-3">
                <h5>THÔNG TIN CÔNG TY</h5>
                <p><a href="">Giới Thiệu ByMe</a></p>
                <p><a href="">Chương trình khuyến mãi</a></p>
                <p><a href="">Blogger Thời Trang</a></p>
              </div>
              <div className="col-3 my-3">
                <h5>HỖ TRỢ KHÁCH HÀNG</h5>
                <p><a href="">Phí Vận Chuyển</a></p>
                <p><a href="">Trả Lại</a></p>
                <p><a href="">Hướng Dẫn Đặt Hàng</a></p>
              </div>
              <div className="col-3 my-3">
                <h5>DỊCH VỤ KHÁCH HÀNG</h5>
                <p><a href="">Liên Hệ Với Chúng Tôi</a></p>
                <p><a href="">Phương Thức Thanh Toán</a></p>
                <p><a href="">Điểm Thưởng</a></p>
              </div>
              <div className="col-3 my-3">
                <h5>KẾT NỐI VỚI CHÚNG TÔI</h5>
                <BsIcons.BsFacebook/>
                <BsIcons.BsInstagram/>
                <BsIcons.BsTwitter/>
                <BsIcons.BsYoutube/>
              </div>
            </div>
        </div>

        )
    }
    
}
    
export default (Footer);