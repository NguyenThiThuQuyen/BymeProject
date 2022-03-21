import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './cardPage.scss';
import ShopHome from "../../containers/ShopHome/ShopHome";
class cardPage extends Component {

    render() {
        return (
            <div className="main">
                <p>Test code Sin</p>
                <ShopHome/>
                <div>Tôi là khánh long</div>
                <div className="card-header">
                    <i className="fas fa-shipping-fast"></i> Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!
                </div>

                <div className="th-table">
                    <div className="th-chk">
                        <label className="stardust-checkbox">
                            <input className="stardust-checkbox__input" type="checkbox" />
                                <div className="stardust-checkbox__box"></div>
                        </label>
                    </div>
                    <div className = "SanPham">
                        Sản Phẩm
                    </div>
                    <div className = "DonGia">
                        Đơn Giá
                    </div>
                    <div className = "SoLuong">
                        SoLuong
                    </div>
                    <div className = "SoTien">
                        Số Tiền
                    </div>
                    <div className = "ThaoTac">
                        Thao Tác
                    </div>
                </div>

                <div className="card">
                    <div className="header-card">
                        <div className="header-card-content">
                            <div className="chk">
                                <label className="stardust-checkbox">
                                    <input className="stardust-checkbox__input" type="checkbox" />
                                    <div className="stardust-checkbox__box"></div>
                                </label>
                            </div>
                            <div className="ten">
                                <div className="yeuthich">Yêu Thích</div>
                                <div className="tenSP">&ensp;Túi Sách Siêu Rẻ_</div>
                            </div>
                            <div className="thu-ne">
                                &ensp;<i className="fas fa-comments"></i>
                            </div>
                        </div>
                    </div>
                    <div className="content-card">
                        <div className="content-card-container">
                            <div className="content-card-content">
                                <div className="chk">
                                    <label className="stardust-checkbox">
                                        <input className="stardust-checkbox__input" type="checkbox" />
                                        <div className="stardust-checkbox__box">
                                        </div>
                                    </label>
                                </div>

                                <div className="sp">
                                    <div className="sp-trong">
                                        <div className="img-sp"></div>
                                        <div className="ten-sp">[Mã FAMARAL2 giảm 10k đơn từ 50k] Túi xách nữ đeo chéo kẹp nách dáng thuyền mp 01</div>
                                    </div>
                                </div>

                                <div className="phanLoai">
                                    <div className="phanloai-container">
                                        <div className="phanloai-content" role="button" tabindex="0">
                                            <div className="Qtk_DO">Phân loại hàng:<button className="vZLqsj"></button>
                                            </div><div class="_3dqm1i">trắng</div></div>
                                    </div>
                                </div>

                                <div className="dongia">
                                    <div>
                                        <span className="gia giam">₫80.000</span>
                                        <span className="gia">₫34.000</span>
                                    </div>
                                </div>

                                <div className="soluong">
                                    <div className="soluong-content shopee-input-quantity">
                                        <button className="_2rGMck">
                                            <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="shopee-svg-icon">
                                                <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                                            </svg>
                                        </button>
                                        <input className="_2rGMck _8rdz59" type="text" role="spinbutton" aria-valuenow="1" value="1" />
                                        <button className="_2rGMck">
                                            <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="shopee-svg-icon icon-plus-sign">
                                                <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="gia">
                                    <span>₫34.000</span>
                                </div>

                                <div class="thaotac1 thaotac2">
                                    <button class="btnXoa">Xóa</button>
                                    <div class="spTuongTu">
                                        Tìm Sản Phẩm Tương Tự
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-card">
                        <div className="content-card-container">
                            <div className="content-card-content">
                                <div className="chk">
                                    <label className="stardust-checkbox">
                                        <input className="stardust-checkbox__input" type="checkbox" />
                                        <div className="stardust-checkbox__box">
                                        </div>
                                    </label>
                                </div>

                                <div className="sp">
                                    <div className="sp-trong">
                                        <div className="imgNe"></div>
                                        <div className="ten-sp">Túi xách nữ, Túi đeo chéo nữ, đẹp dáng thuyền đi chơi phong cách thời trang hàn quốc dễ thương cute TĐC8</div>
                                    </div>
                                </div>

                                <div className="phanLoai">
                                    <div className="phanloai-container">
                                        <div className="phanloai-content" role="button" tabindex="0">
                                            <div className="Qtk_DO">Phân loại hàng:<button className="vZLqsj"></button>
                                            </div><div class="_3dqm1i">trắng</div></div>
                                    </div>
                                </div>

                                <div className="dongia">
                                    <div>
                                        <span className="gia giam">₫150.000</span>
                                        <span className="gia">₫59.000</span>
                                    </div>
                                </div>

                                <div className="soluong">
                                    <div className="soluong-content shopee-input-quantity">
                                        <button className="_2rGMck">
                                            <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="shopee-svg-icon">
                                                <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                                            </svg>
                                        </button>
                                        <input className="_2rGMck _8rdz59" type="text" role="spinbutton" aria-valuenow="1" value="1" />
                                        <button className="_2rGMck">
                                            <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="shopee-svg-icon icon-plus-sign">
                                                <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="gia">
                                    <span>₫59.000</span>
                                </div>

                                <div class="thaotac1 thaotac2">
                                    <button class="btnXoa">Xóa</button>
                                    <div class="spTuongTu">
                                        Tìm Sản Phẩm Tương Tự
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="header-card">
                        <div className="header-card-content">
                            <div className="chk">
                                <label className="stardust-checkbox">
                                    <input className="stardust-checkbox__input" type="checkbox" />
                                    <div className="stardust-checkbox__box"></div>
                                </label>
                            </div>
                            <div className="ten">
                                <div className="yeuthich">MALL</div>
                                <div className="tenSP">&ensp;Đồng Hồ Siêu Đẹp</div>
                            </div>
                            <div className="thu-ne">
                                &ensp;<i className="fas fa-comments"></i>
                            </div>
                        </div>
                    </div>
                    <div className="content-card">
                        <div className="content-card-container">
                            <div className="content-card-content">
                                <div className="chk">
                                    <label className="stardust-checkbox">
                                        <input className="stardust-checkbox__input" type="checkbox" />
                                        <div className="stardust-checkbox__box">
                                        </div>
                                    </label>
                                </div>

                                <div className="sp">
                                    <div className="sp-trong">
                                        <div className="dhNe"></div>
                                        <div className="ten-sp">Đồng hồ đeo tay BOSCK kiểu máy thạch anh phong cách doanh nhân thể thao chống thấm nước cho nam</div>
                                    </div>
                                </div>

                                <div className="phanLoai">
                                    <div className="phanloai-container">
                                        <div className="phanloai-content" role="button" tabindex="0">
                                            <div className="Qtk_DO">Phân loại hàng:<button className="vZLqsj"></button>
                                            </div><div class="_3dqm1i">trắng</div></div>
                                    </div>
                                </div>

                                <div className="dongia">
                                    <div>
                                        <span className="gia giam">₫1.280.000</span>
                                        <span className="gia">₫200.000</span>
                                    </div>
                                </div>

                                <div className="soluong">
                                    <div className="soluong-content shopee-input-quantity">
                                        <button className="_2rGMck">
                                            <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="shopee-svg-icon">
                                                <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                                            </svg>
                                        </button>
                                        <input className="_2rGMck _8rdz59" type="text" role="spinbutton" aria-valuenow="1" value="1" />
                                        <button className="_2rGMck">
                                            <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="shopee-svg-icon icon-plus-sign">
                                                <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="gia">
                                    <span>₫200.000</span>
                                </div>

                                <div class="thaotac1 thaotac2">
                                    <button class="btnXoa">Xóa</button>
                                    <div class="spTuongTu">
                                        Tìm Sản Phẩm Tương Tự
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{height: '500px'}}></div>

                <div className="footer-card fixed-bottom">
                    <div className="footer-header fh">
                        <i class="fas fa-map"></i>
                        <div class="voucher">Shopee Voucher</div>
                        <div class="trong"></div>
                        <span class="giamgia gg">Áp dụng mã giảm giá ngay!</span>
                    </div>
                    <div className="rach r"></div>
                    <div className="footer">
                        <div className="_1EaKE9 _2  UMteh"><label class="stardust-checkbox stardust-checkbox--disabled"><input class="stardust-checkbox__input" type="checkbox" /><div class="stardust-checkbox__box"></div></label></div>
                        <div className="chon-tat-ca">Chọn Tất Cả (3)</div>
                        <div className="xoa-tat-ca">Xoa Tất Cả (3)</div>
                        <div className="Tong">Tổng Thanh Toán(0 sản phẩm): <span className="tien">0đ</span></div>
                    </div>
                    <button className="btn">Mua Hàng</button>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(cardPage);
