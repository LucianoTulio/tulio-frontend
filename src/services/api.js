import axios from 'axios'; 

const api = axios.create({

    baseURL : 'https://tuliobackend2.herokuapp.com' 


}); 

export default api;