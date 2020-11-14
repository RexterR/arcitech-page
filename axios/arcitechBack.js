import axios from 'axios'
const instance = axios.create({
  baseURL: "https://arcitech.herokuapp.com",
  timeout: 20000,
});
export default instance;
