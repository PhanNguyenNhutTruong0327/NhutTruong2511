import httpAxios from "../httpAxios";

function getSliderMain(position){
    return httpAxios.get(`slider/getSliderMain/${position}`);
}
const sliderservices = {
    getSliderMain:getSliderMain
}
export default sliderservices;