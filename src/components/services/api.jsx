import axios from 'axios';

const api = axios.create({
    baseURL: 'https://leads-sabrinapenido.harperdbcloud.com'
    //baseURL: 'http://localhost:3000/'
    //baseURL: 'https://plankton-app-e77tz.ondigitalocean.app/'
});
export default api;