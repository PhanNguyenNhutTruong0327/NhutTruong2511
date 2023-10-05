import { Link, useParams } from "react-router-dom";
import List_Brand from "../List/List_Brand";
import List_Category from "../List/List_Category";
import { useEffect, useState } from "react";
import productServices from "../../../services/ProductServices";
import Product_Item from "../../../compoment/frontend/Product_Item";

function Search_Product() {
    const { key } = useParams();
    const [limit, setLimit] = useState(8);
    const [products, setProducts] = useState([]);
    useEffect(function () {
        (async function () {
            await productServices.getSearchProduct(key, limit).then(function (res) {
                setProducts(res.data.products);
            })
        })();
    }, [limit]);
    if (products.length > 0) {
        return (
            <div className="product-all">
                <div className="container mb-5">
                    <div className="title-proall mb-3">
                        <h3 id="h3-pro" className="text-center">Tìm kiếm</h3>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3">
                            <div class="sidebar  has-scrollbar" data-mobile-menu="true">
                                <List_Category />
                                <List_Brand />
                            </div>
                        </div>
                        <div className="col-9">
                            <h5 id="h3-pro" className="mb-2">Kết quả tìm kiếm cho "{key}"</h5>

                            <div className="content-pro">
                                <div class="product-grid">
                                    {products.map((pro, index) => {
                                        return (<Product_Item product={pro} key={index} />);
                                    })}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center mt-4">
                                    <button className="btn btn-success" onClick={() => setLimit(limit + 4)}>Xem thêm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="product-all">
                <div className="container mb-5">
                    <div className="title-proall mb-3">
                        <h3 id="h3-pro" className="text-center">Tìm kiếm</h3>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div class="sidebar  has-scrollbar" data-mobile-menu="true">
                                <List_Category />
                                {/* <List_Brand /> */}
                            </div>
                        </div>
                        <div className="col-9">
                            <div style={{ height: "100px" }}></div>
                            <div className="content-pro row">
                                <div className="col-8">
                                    <h6 className="text-center fs-5">Không tìm thấy sản phẩm</h6>
                                </div>
                                <div className="col-4"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

export default Search_Product;