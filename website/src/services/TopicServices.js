import httpAxios from "../httpAxios";

function getBySlug(slug) {
    return httpAxios.get('topic/show/' + slug);
}

function getListTopic(parent_id) {
    return httpAxios.get('topic/list_topic/' + parent_id);
}

const topicservice = {
    getBySlug: getBySlug,
    getListTopic:getListTopic,
}
export default topicservice;