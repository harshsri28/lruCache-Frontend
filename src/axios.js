import axios from "axios";
import config from "./config/development.json";

const instance = axios.create({
  baseURL: config.BASE_URI,
});

export default instance;
