
function Pro_Show3(props) {
    return (

        <div class="product-showcase">

            <h2 class="title">Bánh ngọt</h2>

            <div class="showcase-wrapper  has-scrollbar">

                <div class="showcase-container">
                    <div class="showcase">

                        <a href="#" class="showcase-img-box">
                            <img src={require(`../../../../assets/images/products/banh-donut.jpg`)} alt="bánh" class="showcase-img"
                                width="70" height="60" />
                        </a>

                        <div class="showcase-content">

                            <a href="#">
                                <h4 class="showcase-title">Bánh donut</h4>
                            </a>


                            <div class="price-box">
                                <p class="price">20.000 đ</p>
                            </div>

                        </div>

                    </div>

                    <div class="showcase">

                        <a href="#" class="showcase-img-box">
                            <img src={require(`../../../../assets/images/products/banh-gato.jpg`)} alt="bánh" class="showcase-img"
                                width="70" height="60" />
                        </a>

                        <div class="showcase-content">

                            <a href="#">
                                <h4 class="showcase-title">Bánh gato</h4>
                            </a>


                            <div class="price-box">
                                <p class="price">30.000 đ</p>
                            </div>

                        </div>

                    </div>

                    <div class="showcase">

                        <a href="#" class="showcase-img-box">
                            <img src={require(`../../../../assets/images/products/banh-su-kem.jpg`)} alt="bánh" class="showcase-img"
                                width="70" height="60" />
                        </a>

                        <div class="showcase-content">

                            <a href="#">
                                <h4 class="showcase-title">Bánh su kem</h4>
                            </a>


                            <div class="price-box">
                                <p class="price">5.000 đ</p>
                            </div>

                        </div>

                    </div>




                </div>

                <div class="showcase-container">

                    <div class="showcase">

                        <a href="#" class="showcase-img-box">
                            <img src={require(`../../../../assets/images/products/gds.png`)} alt="bánh" class="showcase-img"
                                width="70" height="60"/>
                        </a>

                        <div class="showcase-content">

                            <a href="#">
                                <h4 class="showcase-title">Bánh vị kem</h4>
                            </a>


                            <div class="price-box">
                                <p class="price">10.000 đ</p>
                            </div>

                        </div>

                    </div>

                    <div class="showcase">

                        <a href="#" class="showcase-img-box">
                            <img src={require(`../../../../assets/images/products/gds.png`)} alt="bánh" class="showcase-img"
                                width="70" height="60"/>
                        </a>

                        <div class="showcase-content">

                            <a href="#">
                                <h4 class="showcase-title">Bánh vị kem</h4>
                            </a>


                            <div class="price-box">
                                <p class="price">10.000 đ</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Pro_Show3;