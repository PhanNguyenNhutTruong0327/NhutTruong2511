import httpAxios from "../httpAxios";

function create(order){
    return httpAxios.post('order/store',order);
}

const orderservices = {
    create:create,
}
export default orderservices;