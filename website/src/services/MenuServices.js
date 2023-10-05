import httpAxios from '../httpAxios'

function getByParentId(position, parentId) {
    return httpAxios.get(`menu/getByParentId/${position}/${parentId}`);
}

const menuservices = {
    getByParentId: getByParentId
}
export default menuservices;