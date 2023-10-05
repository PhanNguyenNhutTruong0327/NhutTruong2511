import httpAxios from "../httpAxios";

function getProductNew(sale,limit){
    return httpAxios.get(`product/ProductNew/${sale}/${limit}`);
}

function getProductHome(category_id,limit,orderby){
    return httpAxios.get(`product/product_home/${category_id}/${limit}/${orderby}`);
}

function getProductDetail(id){
    return httpAxios.get(`product/product_detail/${id}`);
}

function getProductAll(limit,page){
    return httpAxios.get(`product/product_all/${limit}/${page}`);
}

function getProductByCategoryId(category_id,limit){
    return httpAxios.get(`product/product_category/${category_id}/${limit}`);
}

function getProductByBrandId(brand_id,limit){
    return httpAxios.get(`product/product_brand/${brand_id}/${limit}`);
}

function getSearchProduct(key,limit){
    return httpAxios.get(`product/search_product/${key}/${limit}`);
}

const productServices = {
    getProductNew:getProductNew,
    getProductHome:getProductHome,
    getProductDetail:getProductDetail,
    getProductAll:getProductAll,
    getProductByCategoryId:getProductByCategoryId,
    getProductByBrandId:getProductByBrandId,
    getSearchProduct:getSearchProduct,

}
export default productServices;