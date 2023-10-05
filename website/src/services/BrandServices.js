import httpAxios from "../httpAxios";

function getBrandList(status){
    return httpAxios.get(`brand/index/${status}`);
}

function getBySlug(slug){
    return httpAxios.get('brand/show/'+slug);
}
const brandservices = {
    getBrandList: getBrandList,
    getBySlug:getBySlug,
};

export default brandservices;