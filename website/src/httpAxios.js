import axios from "axios";

const httpAxios = axios.create({
    baseURL: 'http://localhost/PhanNguyenNhutTruong_Laravel/public/api/',
    timeout: 20000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export default httpAxios;