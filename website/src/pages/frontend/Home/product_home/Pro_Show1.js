
function Pro_Show1(props) {

    return (
        <div class="product-showcase">

            <h2 class="title">Bánh Kem</h2>

            <div class="showcase-wrapper has-scrollbar">

                <div class="showcase-container">
                    <div class="showcase">
                        <a href="#" class="showcase-img-box">
                            <img src={require(`../../../../assets/images/products/banh-kem-sinh-nhat.jpg`)} alt="bánh" width="70" height="60" class="showcase-img" />
                        </a>

                        <div class="showcase-content">

                            <a href="#">
                                <h4 class="showcase-title">Bánh kem socola</h4>
                            </a>


                            <div class="price-box">
                                <p class="price">150.000 đ</p>
                                <del></del>
                            </div>

                        </div>

                    </div>

                    <div class="showcase">
                        <a href="#" class="showcase-img-box">
                            <img src={require(`../../../../assets/images/products/banh-kem-trai-cay.jpg`)} alt="bánh" width="70" height="60" class="showcase-img" />
                        </a>

                        <div class="showcase-content">

                            <a href="#">
                                <h4 class="showcase-title">Bánh kem trái cây</h4>
                            </a>


                            <div class="price-box">
                                <p class="price">120.000 đ</p>
                            </div>

                        </div>

                    </div>

                    <div class="showcase">
                        <a href="#" class="showcase-img-box">
                            <img src={require(`../../../../assets/images/products/banh-moi.jpg`)} alt="bánh" width="70" height="60" class="showcase-img" />
                        </a>

                        <div class="showcase-content">

                            <a href="#">
                                <h4 class="showcase-title">Bánh kem dâu</h4>
                            </a>


                            <div class="price-box">
                                <p class="price">100.000 đ</p>
                            </div>

                        </div>

                    </div>


                </div>
                <div class="showcase-container">

                    <div class="showcase">
                        <a href="#" class="showcase-img-box">
                            <img src={require(`../../../../assets/images/products/banh-kem-trai-cay.jpg`)} alt="bánh" width="70" height="60" class="showcase-img" />
                        </a>

                        <div class="showcase-content">

                            <a href="#">
                                <h4 class="showcase-title">Bánh kem trái cây</h4>
                            </a>


                            <div class="price-box">
                                <p class="price">120.000 đ</p>
                            </div>

                        </div>

                    </div>
                    
                    <div class="showcase">
                        <a href="#" class="showcase-img-box">
                            <img src={require(`../../../../assets/images/products/banh-kem-trai-cay.jpg`)} alt="bánh" width="70" height="60" class="showcase-img" />
                        </a>

                        <div class="showcase-content">

                            <a href="#">
                                <h4 class="showcase-title">Bánh kem trái cây</h4>
                            </a>


                            <div class="price-box">
                                <p class="price">120.000 đ</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Pro_Show1;