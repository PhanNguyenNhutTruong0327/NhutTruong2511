import httpAxios from "../httpAxios";

function AddUser(user){
    return httpAxios.post('user/adduser',user);
}

function Login(user){
    return httpAxios.post('user/login',user);
}

const userservices = {
    AddUser:AddUser,
    Login:Login
};

export default userservices;