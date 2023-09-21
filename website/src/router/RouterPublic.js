import contact from "../pages/frontend/contact";
import Cart from "../pages/frontend/Cart";
import Home from "../pages/frontend/Home";
import Login from "../pages/frontend/Login";
import Register from "../pages/frontend/Register";
import Product_All from "../pages/frontend/Products/Product_All";
import Product_Detail from "../pages/frontend/Products/Product_Detail";
import GioiThieu from "../pages/frontend/GioiThieu";
import My_Profile from "../pages/frontend/Profile";
import Profile_Address from "../pages/frontend/Profile/Profile_Address";
import Profile_Setting from "../pages/frontend/Profile/Profile_Setting";
import Profile_Order from "../pages/frontend/Profile/Profile_Order";
import Policy from "../pages/frontend/Policy";
import News from "../pages/frontend/News";
const RouterPublic = [
    {path:'/',component:Home},

    // Đăng kí, Đăng nhập
    {path:'/pages/login',component:Login},
    {path:'/pages/register',component:Register},


    // Sản phẩm
    {path:'/pages/san-pham',component:Product_All},
    {path:'/pages/san-pham/chi-tiet-san-pham/:slug',component:Product_Detail},


    // Trang con
    {path:'/pages/gioi-thieu',component:GioiThieu},
    {path:'/pages/policy/:slug',component:Policy},
    {path:'/pages/tin-tuc',component:News},


    // Profile
    {path:'/pages/profile',component:My_Profile},
    {path:'/pages/profile/address-profile',component:Profile_Address},
    {path:'/pages/profile/setting-profile',component:Profile_Setting},
    {path:'/pages/profile/order-profile',component:Profile_Order},
    // {path:'/chi-tiet-san-pham/:slug',component:ProductDetail},
    // {path:'/danh-muc-san-pham/:slug',component:ProductCategory},
    // {path:'/thuong-hieu/:slug',component:ProductBrand},
    {path:'/lien-he',component:contact},
    // {path:'/tin-tuc',component:News},
    // {path:'/:slug',component:Introduce},
    // {path:'/chi-tiet-bai-viet/:slug',component:NewsDetail},
    // {path:'/tin-tuc/:slug',component:PostTopic},
    // {path:'/tim-kiem/:keyword',component:SearchProduct},
    {path:'/cart',component:Cart},

];
export default RouterPublic;