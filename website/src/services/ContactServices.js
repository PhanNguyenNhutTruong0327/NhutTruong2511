import httpAxios from '../httpAxios'

function AddContact(contact){
    return httpAxios.post('contact/addcontact',contact);
}

const contactservices = {
    AddContact:AddContact
};
export default contactservices;