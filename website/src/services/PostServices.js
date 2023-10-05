import httpAxios from '../httpAxios'

function getPost_All(){
    return httpAxios.get(`post/post_all_fe`);
}


function getById(slug){
    return httpAxios.get('post/show/'+slug);
}

function getPostDetails(slug){
    return httpAxios.get('post/post_detail/'+slug);
}

function getPostByTopic(topicid,limit){
    return httpAxios.get(`post/post_topic/${topicid}/${limit}`);
}
const postservices = {
    getById:getById,
    getPost_All:getPost_All,
    getPostDetails:getPostDetails,
    getPostByTopic:getPostByTopic,
}
export default postservices;