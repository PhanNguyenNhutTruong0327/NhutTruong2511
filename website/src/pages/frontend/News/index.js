import { Link } from "react-router-dom";
import "./style.css"
function News() {
    return (
        <section>
            <div className="container mb-3">
                <div className="title mt-4 mb-4 text-center">
                    <h3 id="h3-pro" className="text-center">Tất cả bài viết</h3>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="row">
                            {/* news item */}
                            <div className="col-md-4 mb-3">
                                <div className="post-item border">
                                    <div className="post-image">
                                        <Link to={"/pages/tin-tuc/chi-tiet-bai-viet"} className="link-chi-tiet"><img style={{ height: "300px", width: "100%" }} src={require("../../../assets/images/post/post1.jpg")} className="img-fluid" alt="tin tuc" /></Link>
                                    </div>
                                    <div className="post-name p-2">
                                        <Link style={{ textDecoration: 'none' }} to="/pages/tin-tuc/chi-tiet-bai-viet"><h2 className="text-center fs-5 text-danger">tieu de</h2></Link>
                                    </div>
                                    <div className="PostDetail">
                                        <div className="row ps-2 fs-6">
                                            <p>chi tiet</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-4 mb-3">
                                <div className="post-item border">
                                    <div className="post-image">
                                        <Link to={"/pages/tin-tuc/chi-tiet-bai-viet"} className="link-chi-tiet"><img style={{ height: "300px", width: "100%" }} src={require("../../../assets/images/post/post1.jpg")} className="img-fluid" alt="tin tuc" /></Link>
                                    </div>
                                    <div className="post-name p-2">
                                        <Link style={{ textDecoration: 'none' }} to="/pages/tin-tuc/chi-tiet-bai-viet"><h2 className="text-center fs-5 text-danger">tieu de</h2></Link>
                                    </div>
                                    <div className="PostDetail">
                                        <div className="row ps-2 fs-6">
                                            <p>chi tiet</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-4 mb-3">
                                <div className="post-item border">
                                    <div className="post-image">
                                        <Link to={"/pages/tin-tuc/chi-tiet-bai-viet"} className="link-chi-tiet"><img style={{ height: "300px", width: "100%" }} src={require("../../../assets/images/post/post1.jpg")} className="img-fluid" alt="tin tuc" /></Link>
                                    </div>
                                    <div className="post-name p-2">
                                        <Link style={{ textDecoration: 'none' }} to="/pages/tin-tuc/chi-tiet-bai-viet"><h2 className="text-center fs-5 text-danger">tieu de</h2></Link>
                                    </div>
                                    <div className="PostDetail">
                                        <div className="row ps-2 fs-6">
                                            <p>chi tiet</p>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            {/*  */}

                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <button className="btn btn-success" >Xem thêm</button>
                    </div>
                </div>
            </div>





        </section>
    );
}

export default News;