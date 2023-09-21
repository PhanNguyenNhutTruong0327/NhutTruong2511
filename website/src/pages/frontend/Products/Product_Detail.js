import { Link } from "react-router-dom";

function Product_Detail() {
    return (
        // <div class="showcase-wrapper has-scrollbar">

        //     <div class="showcase-container">

        //         <div class="showcase">

        //             <div class="showcase-banner">
        //                 <img src={require("../../../assets/images/products/banh-cuoi.jpg")} alt="shampoo, conditioner & facewash packs" class="showcase-img" />
        //             </div>

        //             <div class="showcase-content">

        //                 <div class="showcase-rating">
        //                     <ion-icon name="star"></ion-icon>
        //                     <ion-icon name="star"></ion-icon>
        //                     <ion-icon name="star"></ion-icon>
        //                     <ion-icon name="star-outline"></ion-icon>
        //                     <ion-icon name="star-outline"></ion-icon>
        //                 </div>

        //                 <a href="#">
        //                     <h3 class="showcase-title">shampoo, conditioner & facewash packs</h3>
        //                 </a>

        //                 <p class="showcase-desc">
        //                     Lorem ipsum dolor sit amet consectetur Lorem ipsum
        //                     dolor dolor sit amet consectetur Lorem ipsum dolor
        //                 </p>

        //                 <div class="price-box">
        //                     <p class="price">$150.00</p>

        //                     <del>$200.00</del>
        //                 </div>

        //                 <button class="add-cart-btn">add to cart</button>

        //                 <div class="showcase-status">
        //                     <div class="wrapper">
        //                         <p>
        //                             already sold: <b>20</b>
        //                         </p>

        //                         <p>
        //                             available: <b>40</b>
        //                         </p>
        //                     </div>

        //                     <div class="showcase-status-bar"></div>
        //                 </div>

        //                 <div class="countdown-box">

        //                     <p class="countdown-desc">
        //                         Hurry Up! Offer ends in:
        //                     </p>

        //                     <div class="countdown">

        //                         <div class="countdown-content">

        //                             <p class="display-number">360</p>

        //                             <p class="display-text">Days</p>

        //                         </div>

        //                         <div class="countdown-content">
        //                             <p class="display-number">24</p>
        //                             <p class="display-text">Hours</p>
        //                         </div>

        //                         <div class="countdown-content">
        //                             <p class="display-number">59</p>
        //                             <p class="display-text">Min</p>
        //                         </div>

        //                         <div class="countdown-content">
        //                             <p class="display-number">00</p>
        //                             <p class="display-text">Sec</p>
        //                         </div>

        //                     </div>

        //                 </div>

        //             </div>

        //         </div>

        //     </div>

        //     <div class="showcase-container">

        //         <div class="showcase">

        //             <div class="showcase-banner">
        //                 <img src={require("../../../assets/images/products/banh-gato.jpg")} alt="Rose Gold diamonds Earring" class="showcase-img" />
        //             </div>

        //             <div class="showcase-content">

        //                 <div class="showcase-rating">
        //                     <ion-icon name="star"></ion-icon>
        //                     <ion-icon name="star"></ion-icon>
        //                     <ion-icon name="star"></ion-icon>
        //                     <ion-icon name="star-outline"></ion-icon>
        //                     <ion-icon name="star-outline"></ion-icon>
        //                 </div>

        //                 <h3 class="showcase-title">
        //                     <a href="#" class="showcase-title">Rose Gold diamonds Earring</a>
        //                 </h3>

        //                 <p class="showcase-desc">
        //                     Lorem ipsum dolor sit amet consectetur Lorem ipsum
        //                     dolor dolor sit amet consectetur Lorem ipsum dolor
        //                 </p>

        //                 <div class="price-box">
        //                     <p class="price">$1990.00</p>
        //                     <del>$2000.00</del>
        //                 </div>

        //                 <button class="add-cart-btn">add to cart</button>

        //                 <div class="showcase-status">
        //                     <div class="wrapper">
        //                         <p> already sold: <b>15</b> </p>

        //                         <p> available: <b>40</b> </p>
        //                     </div>

        //                     <div class="showcase-status-bar"></div>
        //                 </div>

        //                 <div class="countdown-box">

        //                     <p class="countdown-desc">Hurry Up! Offer ends in:</p>

        //                     <div class="countdown">
        //                         <div class="countdown-content">
        //                             <p class="display-number">360</p>
        //                             <p class="display-text">Days</p>
        //                         </div>

        //                         <div class="countdown-content">
        //                             <p class="display-number">24</p>
        //                             <p class="display-text">Hours</p>
        //                         </div>

        //                         <div class="countdown-content">
        //                             <p class="display-number">59</p>
        //                             <p class="display-text">Min</p>
        //                         </div>

        //                         <div class="countdown-content">
        //                             <p class="display-number">00</p>
        //                             <p class="display-text">Sec</p>
        //                         </div>
        //                     </div>

        //                 </div>

        //             </div>

        //         </div>

        //     </div>

        // </div>
        <div classNameName="">
            <section className="py-3 bg-title-all">
                <div className="container">
                    <h3 id="h3-pro" style={{fontSize:"25px"}}> Chi tiết sản phẩm</h3>
                </div>
            </section>

            {/* <!-- ========================= SECTION CONTENT ========================= --> */}
            <section className="section-content bg-white padding-y">
                <div className="container">

                    {/* <!-- ============================ ITEM DETAIL ======================== --> */}
                    <div className="row">
                        <aside className="col-md-6">
                            <div className="card">
                                <article className="gallery-wrap">
                                    <div className="img-big-wrap">
                                        <div> <Link href="#"><img src={require("../../../assets/images/products/banh-bong-lan-cha-bong.jpg")} /></Link></div>
                                    </div> {/*<!-- slider-product.// --> */}
                                    <div className="thumbs-wrap">
                                        <a href="#" className="item-thumb"> <img src={require("../../../assets/images/products/banh-bong-lan-cha-bong.jpg")} /></a>
                                        <a href="#" className="item-thumb"> <img src={require("../../../assets/images/products/banh-bong-lan-cha-bong.jpg")} /></a>
                                        <a href="#" className="item-thumb"> <img src={require("../../../assets/images/products/banh-bong-lan-cha-bong.jpg")} /></a>
                                        <a href="#" className="item-thumb"> <img src={require("../../../assets/images/products/banh-bong-lan-cha-bong.jpg")} /></a>
                                    </div> {/*<!-- slider-nav.// -->*/}
                                </article> {/*<!-- gallery-wrap .end// -->*/}
                            </div> {/*<!-- card.// -->*/}
                        </aside>
                        <main className="col-md-6">
                            <article className="product-info-aside">

                                <h2 className="title mt-3 fs-5">Hot sale unisex New Design Shoe </h2>

                                <div className="rating-wrap my-3">
                                    <ul className="rating-stars">
                                        <div class="showcase-content">
                                            <div class="showcase-rating d-flex">
                                                <div class=" start me-1"><ion-icon name="star"></ion-icon></div>
                                                <div class=" start me-1"><ion-icon name="star"></ion-icon></div>
                                                <div class=" start me-1"><ion-icon name="star"></ion-icon></div>
                                                <div class=" start me-1"><ion-icon name="star-outline"></ion-icon></div>
                                                <div class="start" ><ion-icon name="star-outline"></ion-icon></div>
                                            </div>
                                        </div>
                                        <li>
                                            <i className="fa fa-star mr-1"></i> <i className="fa fa-star mr-1"></i>
                                            <i className="fa fa-star mr-1"></i> <i className="fa fa-star mr-1"></i>
                                            <i className="fa fa-star mr-1"></i>
                                        </li>
                                    </ul>
                                    <small className="label-rating text-muted">132 reviews</small>
                                    <small className="label-rating text-success"> <i className="fa fa-clipboard-check"></i> 154 orders </small>
                                </div> {/*<!-- rating-wrap.// -->*/}

                                <div className="mb-3">
                                    <var className="price h4">USD 465,00</var>
                                    <span className="text-muted ms-1">USD 562.65 incl. VAT</span>
                                </div> {/*<!-- price-detail-wrap .// -->*/}

                                <p style={{ fontSize: "15px" }}>Compact sport shoe for running, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat </p>


                                <dl className="row" style={{ fontSize: "15px" }}>
                                    <dt className="col-sm-3">Manufacturer</dt>
                                    <dd className="col-sm-9"><a href="#">Great textile Ltd.</a></dd>

                                    <dt className="col-sm-3">Article number</dt>
                                    <dd className="col-sm-9">596 065</dd>

                                    <dt className="col-sm-3">Guarantee</dt>
                                    <dd className="col-sm-9">2 year</dd>

                                    <dt className="col-sm-3">Delivery time</dt>
                                    <dd className="col-sm-9">3-4 days</dd>

                                    <dt className="col-sm-3">Availabilty</dt>
                                    <dd className="col-sm-9">in Stock</dd>
                                </dl>

                                <div className="form-row  mt-4 d-flex">
                                    <div className="form-group col-md flex-grow-0 me-4">
                                        <div className="input-group mb-3 input-spinner">
                                            <div className="input-group-prepend">
                                                <button className="btn btn-light" type="button" id="button-plus"> + </button>
                                            </div>
                                            <input type="text" className="form-control" value="1" style={{ height: "40px" }} />
                                            <div className="input-group-append">
                                                <button className="btn btn-light" type="button" id="button-minus"> &minus; </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group col-md">
                                        <button className="btn" style={{ backgroundColor: "orange" }}>
                                            <i className="fas fa-shopping-cart"></i> <span className="text text-white">Add to cart</span>
                                        </button>
                                        <a href="#" className="btn btn-light ms-2   ">
                                            <i className="fas fa-envelope"></i> <span className="text">Contact supplier</span>
                                        </a>
                                    </div>
                                </div>

                            </article>
                        </main>
                    </div>


                </div>
            </section >
            <div class="border container"></div>
            <div className="product-other container">
                <div className="title-product-other mt-3">
                    <h5><i>Sản phẩm cùng loại :</i></h5>
                </div>
                <div className="item-product-other mt-4 mb-4">
                    <div className="content-pro">
                        <div class="product-grid">
                            <div class="showcase">

                                <div class="showcase-banner">

                                    <img src={require(`../../../assets/images/products/banh-my-croissant-socola.jpg`)} alt="Bánh" width="300" class="product-img default" />
                                    <img src={require(`../../../assets/images/products/banh-my-croissant-socola.jpg`)} alt="Bánh" width="300" class="product-img hover" />

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
                </div>
            </div>
        </div >
    );
}

export default Product_Detail;