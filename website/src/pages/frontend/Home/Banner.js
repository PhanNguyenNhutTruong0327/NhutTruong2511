import React from "react";
const Banner = () => (
  <div class="banner">

    <div class="container">

      <div class="slider-container has-scrollbar">
        <div class="slider-item">

          <img src={require("../../../assets/images/banner/banner2.jpg")} alt="modern sunglasses" class="banner-img" />

          <div class="banner-content">

            <p class="banner-subtitle">Best Seller</p>

            <h2 class="banner-title">Bánh ngọt vị dâu</h2>

            <p class="banner-text">
              giá chỉ từ <b>15.000 đ</b>
            </p>

            <a href="#" class="banner-btn">Mua ngay</a>

          </div>

        </div>


        <div class="slider-item">

          <img src={require("../../../assets/images/banner/banner1.jpg")} alt="women's latest fashion sale" class="banner-img" />

          <div class="banner-content">

            <p class="banner-subtitle">Trending</p>

            <h2 class="banner-title">Khuyến mãi bánh mới</h2>

            <p class="banner-text">
              giá chỉ từ <b>20.000 đ</b>
            </p>

            <a href="#" class="banner-btn">Mua ngay</a>

          </div>

        </div>


        <div class="slider-item">

          <img src={require("../../../assets/images/banner/banner3.jpg")} alt="new fashion summer sale" class="banner-img" />

          <div class="banner-content">

            <p class="banner-subtitle">ưu đãi giảm giá</p>

            <h2 class="banner-title">Khuyến mãi từ 5 sản phẩm trở lên</h2>

            <p class="banner-text">
              giá chỉ từ <b>29.000 đ</b>
            </p>

            <a href="#" class="banner-btn">Mua ngay</a>

          </div>

        </div>

      </div>

    </div>

  </div>

);

export default Banner;