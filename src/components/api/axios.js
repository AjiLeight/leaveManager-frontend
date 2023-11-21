import axios from "axios";

const webApiURL = "http://localhost:8080";
export default axios.create({
  baseURL: webApiURL,
});
