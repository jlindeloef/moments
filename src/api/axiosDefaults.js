import axios from "axios";

axios.defaults.baseURL = "https://moments-picture-site-dd36c63eecaf.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;