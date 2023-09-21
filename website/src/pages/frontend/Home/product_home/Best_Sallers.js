

function Best_Sallers(props) {
    return (
        <div class="product-showcase">

            <h3 class="showcase-heading">Sản phẩm bán chạy</h3>

            <div class="showcase-wrapper">

                <div class="showcase-container">

                    <div class="showcase">

                        <a href="#" class="showcase-img-box">
                            <img src={require(`../../../../assets/images/products/banh-bong-lan-trung-muoi.jpg`)} alt="bông lan" width="75" height="75"
                                class="showcase-img" />
                        </a>

                        <div class="showcase-content">

                            <a href="#">
                                <h4 class="showcase-title">Bánh bông lan trứng muối</h4>
                            </a>

                            <div class="showcase-rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                            </div>

                            <div class="price-box">
                                <del></del>
                                <p class="price">25.000 đ</p>
                            </div>

                        </div>

                    </div>

                    <div class="showcase">

                        <a href="#" class="showcase-img-box">
                            <img src={require("../../../../assets/images/products/banh-gato.jpg")} alt="bánh gato" class="showcase-img"
                                width="75" height="75" />
                        </a>

                        <div class="showcase-content">

                            <a href="#">
                                <h4 class="showcase-title">Bánh gato</h4>
                            </a>
                            <div class="showcase-rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-half-outline"></ion-icon>
                            </div>

                            <div class="price-box">
                                <del></del>
                                <p class="price">30.000 đ</p>
                            </div>

                        </div>

                    </div>

                    <div class="showcase">

                        <a href="#" class="showcase-img-box">
                            <img src={require("../../../../assets/images/products/banh-kem-trai-cay.jpg")} alt="bánh kem" class="showcase-img" width="75"
                                height="75" />
                        </a>

                        <div class="showcase-content">

                            <a href="#">
                                <h4 class="showcase-title">Bánh kem trái cây</h4>
                            </a>
                            <div class="showcase-rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-half-outline"></ion-icon>
                            </div>

                            <div class="price-box">
                                <del></del>
                                <p class="price">130.000 đ</p>
                            </div>

                        </div>

                    </div>

                    <div class="showcase">

                        <a href="#" class="showcase-img-box">
                            <img src={require("../../../../assets/images/products/banh-mi-ngot.jpg")} alt="bánh mì ngọt" class="showcase-img" width="75"
                                height="75" />
                        </a>

                        <div class="showcase-content">

                            <a href="#">
                                <h4 class="showcase-title">Bánh mì ngọt</h4>
                            </a>
                            <div class="showcase-rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                            </div>

                            <div class="price-box">
                                <del></del>
                                <p class="price">5.000 đ</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Best_Sallers;