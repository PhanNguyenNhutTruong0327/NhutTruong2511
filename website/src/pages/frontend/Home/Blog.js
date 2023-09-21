import React from "react";
const Blog = () => (
    <div class="blog">

        <div class="container">

            <div class="blog-container has-scrollbar">

                <div class="blog-card">

                    <a href="#">
                        <img src={require("../../../assets/images/post/post1.jpg")} alt="" width="300" class="blog-banner"/>
                    </a>

                    <div class="blog-content">

                        {/* <a href="#" class="blog-category"></a> */}

                        <a href="#">
                            <h3 class="blog-title">GATEAUX MOUSSE - MANG CẢ THẾ GIỚI TRONG MIỆNG BẠN</h3>
                        </a>

                        <p class="blog-meta">
                             <cite>Mr Shop</cite> / <time > 09, 2023</time>
                        </p>

                    </div>

                </div>

                <div class="blog-card">

                    <a href="#">
                        <img src={require("../../../assets/images/post/post2.jpg")} alt=""
                            class="blog-banner" width="300"/>
                    </a>

                    <div class="blog-content">

                        <a href="#" class="blog-category"></a>

                        <h3>
                            <a href="#" class="blog-title">HAPPY VALENTINE'S DAY 2023</a>
                        </h3>

                        <p class="blog-meta">
                             <cite>Mr Shop</cite> / <time>09, 2023</time>
                        </p>

                    </div>

                </div>

                <div class="blog-card">

                    <a href="#">
                        <img src={require("../../../assets/images/post/post3.jpg")} alt=""
                            class="blog-banner" width="300"/>
                    </a>

                    <div class="blog-content">

                        <a href="#" class="blog-category"></a>

                        <h3>
                            <a href="#" class="blog-title">RED VELVET - NỮ HOÀNG TRÊN SÀN DIỄN BÁNH NGỌT</a>
                        </h3>

                        <p class="blog-meta">
                             <cite>Mr Shop</cite> / <time >9, 2023</time>
                        </p>

                    </div>

                </div>

                <div class="blog-card">

                    <a href="#">
                        <img src={require("../../../assets/images/post/post4.jpg")} alt=""
                            class="blog-banner" width="300"/>
                    </a>

                    <div class="blog-content">

                        <a href="#" class="blog-category"></a>

                        <h3>
                            <a href="#" class="blog-title">Bánh kem ngon - Vị matcha</a>
                        </h3>

                        <p class="blog-meta">
                             <cite>Mr Shop</cite> / <time>15, 2023</time>
                        </p>

                    </div>

                </div>

            </div>

        </div>

    </div>

);

export default Blog;