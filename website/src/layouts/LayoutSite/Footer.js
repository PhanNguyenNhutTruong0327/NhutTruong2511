import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer>


                <div class="footer-nav">

                    <div class="container">

                        <ul class="footer-nav-list">

                            <li class="footer-nav-item">
                                <h2 class="nav-title">Danh mục</h2>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Bánh kem</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Bánh ngọt</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Bánh mì</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Bánh bông lan</a>
                            </li>


                        </ul>


                        <ul class="footer-nav-list">

                            <li class="footer-nav-item">
                                <h2 class="nav-title">Chính sách mua hàng</h2>
                            </li>

                            <li class="footer-nav-item">
                                <Link to="/pages/chinh-sach-doi-tra" class="footer-nav-link">Chính sách đổi trả</Link>
                            </li>

                            <li class="footer-nav-item">
                                <Link to="/pages/an-toan-thuc-pham" class="footer-nav-link">Chính sách an toàn thực phẩm</Link>
                            </li>

                            <li class="footer-nav-item">
                                <Link to="/pages/chinh-sach-van-chuyen" class="footer-nav-link">Chính sách vận chuyển</Link>
                            </li>

                            <li class="footer-nav-item">
                                <Link to="/pages/chinh-sach-bao-mat" class="footer-nav-link">Chính sách bảo mật</Link>
                            </li>


                        </ul>

                        <ul class="footer-nav-list">

                            <li class="footer-nav-item">
                                <h2 class="nav-title">Liên kết</h2>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Trang chủ</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Giới thiệu</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Liên hệ</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Tin tức</a>
                            </li>

                        </ul>

                        <ul class="footer-nav-list">

                            <li class="footer-nav-item">
                                <h2 class="nav-title">Liên hệ</h2>
                            </li>

                            <li class="footer-nav-item flex">
                                <div class="icon-box">
                                    <ion-icon name="location-outline"></ion-icon>
                                </div>

                                <address class="content">
                                    Số 20 Tăng Nhơn Phú - Phường Phước Long B - Thành phố Thủ Đức - TP. Hồ Chí Minh
                                </address>
                            </li>

                            <li class="footer-nav-item flex">
                                <div class="icon-box">
                                    <ion-icon name="call-outline"></ion-icon>
                                </div>

                                <a href="tel:+607936-8058" class="footer-nav-link">0123456789</a>
                            </li>

                            <li class="footer-nav-item flex">
                                <div class="icon-box">
                                    <ion-icon name="mail-outline"></ion-icon>
                                </div>

                                <a href="" class="footer-nav-link">caitiembanh@gmail.com</a>
                            </li>

                            <li>
                                <ul class="social-link">

                                    <li class="footer-nav-item">
                                        <a href="#" class="footer-nav-link">
                                            <ion-icon name="logo-facebook"></ion-icon>

                                        </a>
                                    </li>

                                    <li class="footer-nav-item">
                                        <a href="#" class="footer-nav-link">
                                            <ion-icon name="logo-twitter"></ion-icon>
                                        </a>
                                    </li>

                                    <li class="footer-nav-item">
                                        <a href="#" class="footer-nav-link">
                                            <ion-icon name="logo-linkedin"></ion-icon>
                                        </a>
                                    </li>

                                    <li class="footer-nav-item">
                                        <a href="#" class="footer-nav-link">
                                            <ion-icon name="logo-instagram"></ion-icon>
                                        </a>
                                    </li>

                                </ul>
                            </li>

                        </ul>

                        <ul><li></li></ul>

                    </div>

                </div>

                <div class="footer-bottom">

                    <div class="container">

                        <img src={require("../../assets/images/payment.png")} alt="payment method" class="payment-img" />

                        <p class="copyright">
                            Phan Nguyễn Nhựt Trường
                        </p>

                    </div>

                </div>

            </footer>
        );
    }
}

export default Footer;