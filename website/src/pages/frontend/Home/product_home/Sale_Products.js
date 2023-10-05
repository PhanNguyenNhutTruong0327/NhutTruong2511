import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productservices from "../../../../services/ProductServices";
import Product_Item from "../../../../compoment/frontend/Product_Item";
import { urlImage } from "../../../../config";

function Sale_Products({ productItems, addToCart }) {  
    
    const [ProductSale, setProductSale] = useState([]);
    useEffect(function(){
        (async function(){
            await productservices.getProductNew(1,4).then(function(result){
                setProductSale(result.data.products);
            })
        })();
    },[]);
        return (

        <div class="product-main">

            <h2 class="title">Sản phẩm khuyến mãi</h2>

            <div class="product-grid">
                {ProductSale.map(function (pro,index) {
                    return (
                        <Product_Item key={index} product={pro} />   
                    );
                })}


            </div>

        </div>
    )
}

export default Sale_Products;