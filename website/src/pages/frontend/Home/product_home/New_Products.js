import { useState } from "react";
import { Link } from "react-router-dom";

function New_Products({ productItems, addToCart }) {  
    
    
    return (

        <div class="product-main">

            <h2 class="title">Sản phẩm mới</h2>

            <div class="product-grid">

                <div class="showcase">

                    <div class="showcase-banner">

                        <img src={require(`../../../../assets/images/products/banh-my-croissant-socola.jpg`)} alt="Bánh" width="300" class="product-img default" />
                        <img src={require(`../../../../assets/images/products/banh-my-croissant-socola.jpg`)} alt="Bánh" width="300" class="product-img hover" />

                        {/* <p class="showcase-badge">15%</p> */}

                        <div class="showcase-actions">

                            <button class="btn-action">
                                <ion-icon name="heart-outline"></ion-icon>
                            </button>

                            <Link to="/pages/san-pham/chi-tiet-san-pham/:slug" class="btn-action">
                                <ion-icon name="eye-outline"></ion-icon>
                            </Link>

                            <button class="btn-action">
                                <ion-icon name="repeat-outline"></ion-icon>
                            </button>

                            <button class="btn-action" onClick={() => addToCart(productItems)}>
                                <ion-icon name="bag-add-outline"></ion-icon>
                            </button>

                        </div>

                    </div>

                    <div class="showcase-content">

                        <a href="#" class="showcase-category">Bánh mì</a>

                        <a href="#">
                            <h3 class="showcase-title">Bánh mì ngọt</h3>
                        </a>

                        <div class="showcase-rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                        </div>

                        <div class="price-box">
                            <p class="price">10.000 đ</p>
                            <del>12.000 đ</del>
                        </div>

                    </div>
                </div>

                <div class="showcase">

                    <div class="showcase-banner">

                        <img src={require(`../../../../assets/images/products/banh-my-croissant-socola.jpg`)} alt="Bánh" width="300" class="product-img default" />
                        <img src={require(`../../../../assets/images/products/banh-my-croissant-socola.jpg`)} alt="Bánh" width="300" class="product-img hover" />


                        <div class="showcase-actions">

                            <button class="btn-action">
                                <ion-icon name="heart-outline"></ion-icon>
                            </button>

                            <button class="btn-action">
                                <ion-icon name="eye-outline"></ion-icon>
                            </button>

                            <button class="btn-action">
                                <ion-icon name="repeat-outline"></ion-icon>
                            </button>

                            <button class="btn-action">
                                <ion-icon name="bag-add-outline"></ion-icon>
                            </button>

                        </div>

                    </div>

                    <div class="showcase-content">

                        <a href="#" class="showcase-category">Bánh kem</a>

                        <a href="#">
                            <h3 class="showcase-title">Bánh kem dâu</h3>
                        </a>

                        <div class="showcase-rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                        </div>

                        <div class="price-box">
                            <p class="price">100.000 đ</p>
                            <del>120.000 đ</del>
                        </div>

                    </div>
                </div>

                <div class="showcase">

                    <div class="showcase-banner">

                        <img src={require(`../../../../assets/images/products/banh-my-croissant-socola.jpg`)} alt="Bánh" width="300" class="product-img default" />
                        <img src={require(`../../../../assets/images/products/banh-my-croissant-socola.jpg`)} alt="Bánh" width="300" class="product-img hover" />


                        <div class="showcase-actions">

                            <button class="btn-action">
                                <ion-icon name="heart-outline"></ion-icon>
                            </button>

                            <button class="btn-action">
                                <ion-icon name="eye-outline"></ion-icon>
                            </button>

                            <button class="btn-action">
                                <ion-icon name="repeat-outline"></ion-icon>
                            </button>

                            <button class="btn-action">
                                <ion-icon name="bag-add-outline"></ion-icon>
                            </button>

                        </div>

                    </div>

                    <div class="showcase-content">

                        <a href="#" class="showcase-category">Bánh mì</a>

                        <a href="#">
                            <h3 class="showcase-title">Bánh mì croissant socola</h3>
                        </a>

                        <div class="showcase-rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                        </div>

                        <div class="price-box">
                            <p class="price">15.000 đ</p>
                            <del>20.000 đ</del>
                        </div>

                    </div>
                </div>

                <div class="showcase">

                    <div class="showcase-banner">

                        <img src={require(`../../../../assets/images/products/banh-my-croissant-socola.jpg`)} alt="Bánh" width="300" class="product-img default" />
                        <img src={require(`../../../../assets/images/products/banh-my-croissant-socola.jpg`)} alt="Bánh" width="300" class="product-img hover" />


                        <div class="showcase-actions">

                            <button class="btn-action">
                                <ion-icon name="heart-outline"></ion-icon>
                            </button>

                            <button class="btn-action">
                                <ion-icon name="eye-outline"></ion-icon>
                            </button>

                            <button class="btn-action">
                                <ion-icon name="repeat-outline"></ion-icon>
                            </button>

                            <button class="btn-action">
                                <ion-icon name="bag-add-outline"></ion-icon>
                            </button>

                        </div>

                    </div>

                    <div class="showcase-content">

                        <a href="#" class="showcase-category">Bánh mì</a>

                        <a href="#">
                            <h3 class="showcase-title">Bánh mì ngọt</h3>
                        </a>

                        <div class="showcase-rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                        </div>

                        <div class="price-box">
                            <p class="price">10.000 đ</p>
                            <del>12.000 đ</del>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default New_Products;