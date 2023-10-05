import { Link } from "react-router-dom";
import "./style.css"
import { useEffect, useState } from "react";
import productServices from "../../../services/ProductServices";
import List_Category from "../List/List_Category";
import List_Brand from "../List/List_Brand";
import Product_Item from "../../../compoment/frontend/Product_Item";

function Product_All() {
    const [Product_All, setProductAll] = useState([]);
    const [limit, setLimit] = useState(8);
    useEffect(function () {
        (async function () {
            await productServices.getProductAll(limit, 1).then(function (result) {
                setProductAll(result.data.products);
            })
        })()
    }, [limit]);
    return (
        <div className="product-all">
            <div className="container mb-5">
                <div className="title-proall mb-3">
                    <h3 id="h3-pro" className="text-center">Các Sản Phẩm Của Tr Cake</h3>
                </div>
                <div className="row">
                    <div className="col-3">
                        <div class="sidebar  has-scrollbar" data-mobile-menu="true">
                            <List_Category />
                            <List_Brand />
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="content-pro">
                            <div class="product-grid">
                                {Product_All.map((pro, index) => {
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

export default Product_All;