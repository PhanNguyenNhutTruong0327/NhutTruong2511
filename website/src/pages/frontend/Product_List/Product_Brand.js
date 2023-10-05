import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import categoryservice from "../../../services/CategoryServices";
import productServices from "../../../services/ProductServices";
import List_Category from "../List/List_Category";
import List_Brand from "../List/List_Brand";
import Product_Item from "../../../compoment/frontend/Product_Item";
import brandservices from "../../../services/BrandServices";

function Product_Brand() {
    const { slug } = useParams();
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(8);
    const [title, setTitle] = useState("");
    document.title = title;
    useEffect(function () {
        (async function () {
            try {
                const response = await brandservices.getBySlug(slug);
                const brandid = response.data.brand.id;
                setTitle(response.data.brand.name);
                const response2 = await productServices.getProductByBrandId(brandid, limit);
                setProducts(response2.data.products);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [limit, slug]);
    return (
        <div className="product-all">
            <div className="container mb-5">
                <div className="title-proall mb-3">
                    <h3 id="h3-pro" className="text-center">{title}</h3>
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className="sidebar  has-scrollbar" data-mobile-menu="true">
                            <List_Category />
                            <List_Brand />
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="content-pro">
                            <div class="product-grid">
                                {products.map((pro, index) => {
                                    return (
                                        <Product_Item product={pro} key={index} />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Product_Brand;