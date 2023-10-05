import httpAxios from '../httpAxios'

function getCategories(){
    return httpAxios.get('category/index');
}

function getListCategories(parent_id,limit){
    return httpAxios.get(`category/category_list/${parent_id}/${limit}`);
}

function getBySlug(slug){
    return httpAxios.get('category/show/'+slug);

}
const categoryservice = {
    getCategories: getCategories,
    getListCategories:getListCategories,
    getBySlug:getBySlug
}
export default categoryservice;